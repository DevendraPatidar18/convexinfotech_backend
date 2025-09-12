import  database  from "../db/database.js";
import { z } from "zod"; // for validation

const db = database();
const collection = db.collection("enquiries");

// ✅ Validation schema with Zod
const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email(),
  enquireAbout: z.string().min(2, "Please specify what the enquiry is about"),
  enquiryDescription: z.string().min(5, "Description must be at least 5 characters"),
  createdAt: z.date().default(() => new Date()),
});

export class EnquiryModel {
  static async create(data) {
    const parsed = enquirySchema.parse(data); // ✅ validation
    const docRef = await collection.add(parsed);
    return { id: docRef.id, ...parsed };
  }

  static async findById(id) {
    const doc = await collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
  }

  static async findAll() {
    const snapshot = await collection.orderBy("createdAt", "desc").get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async update(id, data) {
    await collection.doc(id).update(data);
    return this.findById(id);
  }

  static async delete(id) {
    await collection.doc(id).delete();
    return { success: true };
  }
}

