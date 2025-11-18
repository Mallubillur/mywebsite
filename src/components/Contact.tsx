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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
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
      url: "https://linkedin.com/in/mallikarjunbillur",
      color: "#0077b5",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/mallikarjunbillur",
      color: "#1da1f2",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mallikarjun@example.com",
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
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
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
          <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: "600px", margin: "1rem auto 0" }}>
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Contact Form */}
          <div
            style={{
              backgroundColor: "var(--bg)",
              padding: "2rem",
              borderRadius: "1rem",
              border: "1px solid var(--border)",
            }}
            className="animate-fade-in-up"
          >
            <h3 style={{ marginBottom: "1.5rem" }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <InputField
                type="text"
                name="name"
                label="Name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
              />
              <InputField
                type="email"
                name="email"
                label="Email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
              />
              <InputField
                type="textarea"
                name="message"
                label="Message"
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={(value) => setFormData({ ...formData, message: value })}
              />
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                ariaLabel="Send message"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div
              style={{
                backgroundColor: "var(--bg)",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid var(--border)",
              }}
              className="animate-fade-in-up"
            >
              <h3 style={{ marginBottom: "1rem" }}>Connect With Me</h3>
              <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
                Let's connect on social media or drop me an email. I'm always open to discussing new projects and opportunities.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = social.color;
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 4px 12px var(--shadow)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                backgroundColor: "var(--bg)",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid var(--border)",
              }}
              className="animate-fade-in-up"
            >
              <h3 style={{ marginBottom: "1rem" }}>Quick Info</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <small style={{ color: "var(--muted)", display: "block", marginBottom: "0.25rem" }}>
                    Email
                  </small>
                  <a
                    href="mailto:billurmallikarjun@gmail.com"
                    style={{
                      color: "var(--accent)",
                      textDecoration: "none",
                    }}
                  >
                    mallikarjun@example.com
                  </a>
                </div>
                <div>
                  <small style={{ color: "var(--muted)", display: "block", marginBottom: "0.25rem" }}>
                    Location
                  </small>
                  <span>Bangalore, India</span>
                </div>
                <div>
                  <small style={{ color: "var(--muted)", display: "block", marginBottom: "0.25rem" }}>
                    Availability
                  </small>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "var(--success)",
                        borderRadius: "50%",
                      }}
                    />
                    <span>Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          grid-template-columns: 1.5fr 1fr;
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
