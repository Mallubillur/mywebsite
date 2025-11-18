import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "3rem 1.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "2rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <h3 style={{ marginBottom: "0.5rem" }}>Mallikarjun Billur</h3>
            <p style={{ color: "var(--muted)", maxWidth: "400px" }}>
              Frontend Developer crafting beautiful, accessible web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.125rem" }}>Quick Links</h3>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.125rem" }}>Get In Touch</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a
                href="mailto:mallikarjun@example.com"
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                mallikarjun@example.com
              </a>
              <p style={{ color: "var(--muted)" }}>Bangalore, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>
            © {currentYear} Mallikarjun Billur. All rights reserved.
          </p>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Made with <Heart size={16} style={{ color: "var(--accent)" }} /> using React & Tailwind
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 2fr 1fr 1fr;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
