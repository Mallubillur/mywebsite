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

  // ✅ CONNECTED TO BACKEND
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
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
        {/* Heading */}
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
          <p
            style={{
              color: "var(--muted)",
              marginTop: "1rem",
              maxWidth: "600px",
              margin: "1rem auto 0",
            }}
          >
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div
            style={{
              backgroundColor: "var(--bg)",
              padding: "2rem",
              borderRadius: "1rem",
              border: "1px solid var(--border)",
            }}
          >
            <h3 style={{ marginBottom: "1.5rem" }}>Send a Message</h3>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <InputField
                type="text"
                name="name"
                label="Name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(value) =>
                  setFormData({ ...formData, name: value })
                }
              />

              <InputField
                type="email"
                name="email"
                label="Email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(value) =>
                  setFormData({ ...formData, email: value })
                }
              />

              <InputField
                type="textarea"
                name="message"
                label="Message"
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={(value) =>
                  setFormData({ ...formData, message: value })
                }
              />

              <Button type="submit" variant="primary" disabled={isSubmitting}>
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div
            style={{
              backgroundColor: "var(--bg)",
              padding: "2rem",
              borderRadius: "1rem",
              border: "1px solid var(--border)",
            }}
          >
            <h3 style={{ marginBottom: "1rem" }}>Connect With Me</h3>
            <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
              Let's connect on social media or drop me an email.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "48px",
                      height: "48px",
                      backgroundColor: "var(--card)",
                      borderRadius: "0.5rem",
                      border: "2px solid var(--border)",
                      color: "var(--text)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Grid */}
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3rem;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
