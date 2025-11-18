import { Button } from "./Button";
import { ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const handleDownloadResume = () => {
    // Mock download functionality
    alert("Resume download would start here. In production, link to actual resume PDF.");
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Text Content */}
        <div style={{ animation: "fadeInUp 0.8s ease-out" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              backgroundColor: "var(--card)",
              borderRadius: "2rem",
              marginBottom: "1.5rem",
              border: "1px solid var(--border)",
            }}
          >
            <small style={{ color: "var(--accent)", fontWeight: 600 }}>
              Frontend Developer
            </small>
          </div>
          
          <h1 style={{ marginBottom: "1rem", color: "var(--text)" }}>
            Hi, I'm{" "}
            <span style={{ color: "var(--accent)" }}>Mallikarjun Billur</span>
          </h1>
          
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--muted)",
              marginBottom: "2rem",
              maxWidth: "600px",
            }}
          >
            I craft elegant, user-centric web experiences with modern technologies. 
            Passionate about clean code, responsive design, and bringing ideas to life.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Button href="#projects" variant="primary" ariaLabel="View my projects">
              View Projects <ArrowRight size={20} />
            </Button>
            <Button
              variant="secondary"
              onClick={handleDownloadResume}
              ariaLabel="Download resume"
            >
              <Download size={20} /> Download Resume
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeInUp 0.8s ease-out 0.2s backwards",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              aspectRatio: "1",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, var(--accent) 0%, var(--success) 100%)",
                borderRadius: "2rem",
                opacity: 0.1,
                animation: "pulse 3s ease-in-out infinite",
              }}
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MzM5MTUyNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mallikarjun Billur - Frontend Developer workspace"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "2rem",
                border: "2px solid var(--border)",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
        }

        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
