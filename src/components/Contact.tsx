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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://portfolio-backend.onrender.com/api/contact",
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
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mallikarjun-billur-82977032a",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/mallikarjunmb12",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:billurmallikarjun4@gmail.com",
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
          <h2>Get In Touch</h2>
          <p style={{ color: "var(--muted)" }}>
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
            <h3>Send a Message</h3>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <InputField
                type="text"
                label="Name"
                required
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
              />

              <InputField
                type="email"
                label="Email"
                required
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
              />

              <InputField
                type="textarea"
                label="Message"
                required
                value={formData.message}
                onChange={(v) => setFormData({ ...formData, message: v })}
              />

              <Button type="submit" disabled={isSubmitting}>
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
            <h3>Connect With Me</h3>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

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
