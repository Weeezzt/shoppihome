// routes/auth.ts
import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userSchema";

const authRouter = express.Router();
const JWT_SECRET = "your_jwt_secret"; // Store this in environment variables for production

// Register Route
authRouter.post("/auth/register", async (req: Request, res: Response): Promise<any> => {
  const { username, email, password, role } = req.body;

  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new UserModel({ username, email, password: hashedPassword, role });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, username: newUser.username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Login Route
authRouter.post("/auth/login", async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;

  try {
    // Find user
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, user: { username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

authRouter.get("/profile/username", async (req: Request, res: Response): Promise<any> => {
  const token = req.headers.authorization?.split(" ")[1];

  console.log("Token:", token);

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET!) as { username: string };
    res.status(200).json({ username: decoded.username });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

authRouter.get("/profile/:username", async (req: Request, res: Response): Promise<any> => {
  const { username } = req.params;

  try {
    const user = await UserModel.findOne({ username });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
});

authRouter.post(
  "/profile/:username/save-listing",
  async (req: Request, res: Response): Promise<any> => {
    const { username } = req.params;
    const { listingId } = req.body;
    console.log("Username:", username);
    try {
      const user = await UserModel.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      user.savedListings.push(listingId);
      await user.save();
      res.status(200).json({ message: "Listing saved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error saving listing", error });
    }
  }
);

export default authRouter;
