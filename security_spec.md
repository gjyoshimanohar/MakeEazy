# Security Specification: Compliance Blogs Firestore Schema

This document defines the security boundaries, data invariants, and defensive validation rules for the `blogs` Firestore collection.

## 1. Access Roles & Scopes

| Collection | Path | Read Access | Write Access (Create/Update/Delete) |
| :--- | :--- | :--- | :--- |
| **Blogs** | `/blogs/{blogId}` | **Public** (Unauthenticated allowed) | **Admin Only** (Google Sign-In, Email Verified, matching `admn.makeeazy@gmail.com`) |

---

## 2. Core Data Invariants

1. **Global Read Access**: Any visitor can browse and view compiled blog posts/articles. No auth check required for standard view/list.
2. **Authorized-Only Compositions**: Document creation, edits, or removals must be strictly bound to authenticated and verified Google accounts matching the primary administrator email: `admn.makeeazy@gmail.com`.
3. **No Key Tampering & Orphaned Creation**: All mandatory keys (`id`, `title`, `category`, `htmlContent`) must exist on create, with precise types and bounded lengths to limit injection storage abuse.
4. **Card Gradient Limits**: Gradient presets must strictly match the validated list of approved color schemes in the application.

---

## 3. The "Dirty Dozen" Red Team Payloads

These are malicious JSON payloads that public attackers might attempt to send. Our `firestore.rules` must reject them with `PERMISSION_DENIED`:

1. **Anonymous / Unauthenticated Create**: An unauthenticated attacker attempts to write a new blog.
2. **Standard User Create**: An authenticated user with a different email attempts to write a blog.
3. **Admin Privilege Spoof**: Create with unverified email token (`admn.makeeazy@gmail.com` with `email_verified: false`).
4. **Title Injection Attack**: Blog title size exceeds 200 characters or contains malicious code injections.
5. **Card Gradient Injection**: Attempt to write arbitrary dangerous classes as `gradient` instead of whitelisted values.
6. **Ghost Key Injection (Shadow fields)**: Injecting unwhitelisted properties like `isAdminOverride: true` inside a blog document.
7. **Read Duration Overflow**: Attempting to set `readTime` to a very large string value (e.g. 10MB of data) to bloat the Firestore write size.
8. **Invalid Category Type**: Assigning an arbitrary category string (e.g. `Hacked Category`) outside the enum bounds.
9. **Category Key Nullification**: Removing/nullifying the category or title of an existing blog post during an update.
10. **ID Mismatch Hijack**: Setting the path parameter `blogId` to a valid identifier while setting the internal `id` key inside the body to a different string.
11. **Malicious Content Bloat**: Writing a body payload with HTML content exceeding 500KB to inflate read storage pricing.
12. **CreatedDate Mocking**: Injecting an arbitrary historic timestamp on a newly created post.

---

## 4. Test Specifications

A full verification model will check:
- `get` / `list` passes for guest users.
- `create` / `update` / `delete` fails for standard users.
- `create` / `update` / `delete` passes for Google Authenticated admin with email `admn.makeeazy@gmail.com` and verified state.
