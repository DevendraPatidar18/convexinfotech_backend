// firestore.js
import admin from "firebase-admin";
import { readFileSync } from "fs";
import path from "path";
import { FIREBASE_KEY } from "../env.js";



let db; // keep reference so we don’t re-init multiple times

 function database() {
  if (db) return db; // prevent duplicate initialization

  try {
    try {
    if (!process.env.PRIVATE_KEY || !process.env.CLIENT_EMAIL || !process.env.PROJECT_ID) {
      throw new Error("Firebase env variables are missinggggggggggggg. Check your .env file.");
    }
    // const serviceAccount = JSON.parse(
    //   readFileSync(path.resolve(process.env.FIREBASE_KEY), "utf8")
    // );
    const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
    admin.initializeApp({
    credential: admin.credential.cert({
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: privateKey,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    universe_domain: process.env.UNIVERSE_DOMAIN,
  }),
});

    console.log("✅ Firestore has been initialized.");
    db = admin.firestore();
    return db;

  } catch (error) {
    console.error("❌ Error initializing Firestore:", error.message);
    process.exit(1);
    throw error;
    
  }
}

export default database;