// models/User.ts
import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: "general" | "admin" | "agent";
  createdAt: Date;
  updatedAt: Date;
  savedListings: string[];
}

const UserSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["general", "admin", "agent"],
    default: "general",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  savedListings: { type: [String], default: [] },
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
