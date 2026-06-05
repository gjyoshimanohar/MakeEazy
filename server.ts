import express from "express";
import path from "path";
import multer from "multer";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";
import fs from "fs";

// Load environment variables (optional, typically vite handles root .env but in dev tsx we might need dotenv)
import "dotenv/config";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  // Use memory storage for the uploaded file so we don't have to keep it on disk
  const storage = multer.memoryStorage();
  const upload = multer({ storage });

  // Add body parsers for JSON if needed
  app.use(express.json());

  // Set up Nodemailer transporter (User needs to configure SMTP variables in their environment)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS, 
    },
  });

  // API Route for Career Application
  app.post("/api/apply", upload.single("resume"), async (req, res) => {
    try {
      const { firstName, lastName, email, phone, role } = req.body;
      const resume = req.file;

      if (!firstName || !lastName || !email || !phone || !role) {
        return res.status(400).json({ error: "All fields are required" });
      }

      if (!resume) {
        return res.status(400).json({ error: "Please upload your resume" });
      }

      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn("SMTP credentials not configured. Please set SMTP_USER and SMTP_PASS.");
        // We will mock success if credentials aren't provided so the UI can still be tested in preview
        return res.status(200).json({ 
          success: true, 
          message: "(Mock) Application received successfully! Note: Configure SMTP to send real emails." 
        });
      }

      const mailOptions = {
        from: `"${firstName} ${lastName}" <${email}>`,
        to: "info@makeeazy.in", 
        subject: `New Job Application: ${role} - ${firstName} ${lastName}`,
        text: `New job application received.
        
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Role: ${role}

Resume is attached.`,
        attachments: [
          {
            filename: resume.originalname,
            content: resume.buffer,
          },
        ],
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Application submitted successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to submit application. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
