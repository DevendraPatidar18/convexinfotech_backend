import asyncHandler from "../utils/asyncHandler.js";
import axios from "axios";

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY; // Set this in your .env file

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Firebase Auth REST API endpoint
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;

    const response = await axios.post(url, {
      email,
      password,
      returnSecureToken: true,
    });

    // You can add additional admin checks here if needed

    return res.status(200).json({
      message: "Login successful",
      token: response.data.idToken,
      user: response.data,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid email or password",
      error: error.response?.data?.error?.message || error.message,
    });
  }
});

export { adminLogin };