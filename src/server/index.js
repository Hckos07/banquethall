const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5500;

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/callRequests", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Schema & Model
const requestSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
});

const CallRequest = mongoose.model("CallRequest", requestSchema);

// ✅ CORS Configuration
app.use(cors({
  origin: "*", // Change this in production
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(express.json());

// ✅ Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Admin email
    pass: process.env.EMAIL_PASS, // App password
  },
});

// ✅ API Route: Handle Form Submission
app.post("/api/request-call", async (req, res) => {
  const { name, phone, email } = req.body;

  // Validation
  if (!name || !phone || !email) {
    return res.status(400).json({ success: false, message: "All fields are required!" });
  }
  if (phone.length !== 10) {
    return res.status(400).json({ success: false, message: "Invalid phone number!" });
  }

  try {
    // ✅ Save to MongoDB
    const newRequest = new CallRequest({ name, phone, email });
    await newRequest.save();

    // ✅ Admin Email
    const adminMailOptions = {
      from: process.env.EMAIL,
      to: process.env.USER_EMAIL, // Admin Email
      subject: "New Call Request",
      text: `📞 New Call Request 📞\n\n👤 Name: ${name}\n📱 Phone: ${phone}\n📧 Email: ${email}`,
    };

    // ✅ User Confirmation Email
    const userMailOptions = {
      from: process.env.EMAIL,
      to: email, // Send to user
      subject: "We Received Your Request!",
      text: `Hello ${name},\n\nThank you for your request! Our team will contact you soon at ${phone}.\n\nBest regards,\nTeam`,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.json({ success: true, message: "Request submitted successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Server error. Try again later." });
  }
});

// ✅ Fetch All Requests (For Admin)
app.get("/api/requests", async (req, res) => {
  try {
    const requests = await CallRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error("Database Fetch Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch requests" });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});