import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Support connecting a custom user Firebase project via standard environment variables or fallback to the platform default config.
const config = {
  apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY || firebaseConfig.apiKey,
  authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN || firebaseConfig.authDomain,
  projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID || firebaseConfig.projectId,
  storageBucket: (import.meta as any).env.VITE_FIREBASE_STORAGE_BUCKET || firebaseConfig.storageBucket,
  messagingSenderId: (import.meta as any).env.VITE_FIREBASE_MESSAGING_SENDER_ID || firebaseConfig.messagingSenderId,
  appId: (import.meta as any).env.VITE_FIREBASE_APP_ID || firebaseConfig.appId,
  firestoreDatabaseId: (import.meta as any).env.VITE_FIREBASE_DATABASE_ID || firebaseConfig.firestoreDatabaseId || '(default)',
};

const app = initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
});

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, config.firestoreDatabaseId); /* CRITICAL: The app will break without this line */

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}
