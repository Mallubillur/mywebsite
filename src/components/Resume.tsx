import { Button } from "./Button";
import { Download } from "lucide-react";

export function Resume() {
  // Resume download function (unchanged)
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "Mallikarjun_Billur_Resume.pdf"; // GitHub Pages friendly
    link.download = "Mallikarjun_Billur_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section
      id="resume"
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Resume</h2>

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
          Fresher | Academic Projects & Skills Based Profile
        </p>

        {/* Download Button */}
        <div style={{ marginTop: "2.5rem" }}>
          <Button
            variant="primary"
            onClick={handleDownloadResume}
            ariaLabel="Download resume"
          >
            <Download size={20} /> Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
