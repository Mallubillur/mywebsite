import { useState } from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ CONNECTED TO LIVE BACKEND (RENDER)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://portfolio-backend-meny.onrender.com", // 🔥 CHANGE HERE
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mallikarjunbillur",
      color: "var(--text)",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mallikarjun-billur-82977032a",
      color: "#0077b5",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/mallikarjunmb12",
      color: "#1da1f2",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:billurmallikarjun4@gmail.com",
      color: "var(--accent)",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "var(--card)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Get In Touch</h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
          <p style={{ color: "var(--muted)", marginTop: "1rem" }}>
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div
            style={{
              backgroundColor: "var(--bg)",
              padding: "2rem",
              borderRadius: "1rem",
              border: "1px solid var(--border)",
