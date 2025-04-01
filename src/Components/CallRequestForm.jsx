import { useState } from "react";
import axios from "axios";

const CallRequestForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5500/api/request-call", {
        name,
        phone,
        email,
      });

      if (response.data.success) {
        setMessage("✅ Request submitted successfully! Check your email.");
        setName("");
        setPhone("");
        setEmail("");
      } else {
        setMessage(response.data.message || "Something went wrong. Try again.");
      }
    } catch (error) {
      setMessage("❌ Error submitting request. Please try again later.");
      console.error("Request Error:", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800">Request a Callback</h2>
      <p className="text-gray-600 text-center mb-4">Enter your details and we'll contact you soon.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Phone Number Field */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          <span className="px-4 bg-gray-200 flex items-center">+91</span>
          <input
            type="text"
            maxLength="10"
            className="w-full p-3 outline-none"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Email Field */}
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
        >
          Request a Call
        </button>
      </form>

      {message && (
        <p className="text-center text-gray-700 mt-4">{message}</p>
      )}

      <p className="text-sm text-center text-gray-500 mt-4">
        By submitting this form you agree to our {" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms and Conditions
        </a>.
      </p>
    </div>
  );
};

export default CallRequestForm;
