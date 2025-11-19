import React from "react";
import { Tag } from "./Tag";
import { GraduationCap, Award } from "lucide-react";

/**
 * About.tsx
 * Updated to reflect skills & technologies from your resume.
 * Resume link points to the uploaded file at: /mnt/data/Mallikarjun_ENG22CS0099.pdf
 */

export function About() {
  const skills = [
    // Programming Languages
    "Java",
    "Python",
    "C",
    "JavaScript",

    // Web / Frontend
    "HTML5",
    "CSS3",
    "React.js",
    "TypeScript",

    // Backend
    "Node.js",
    "Express.js",

    // Databases
    "SQL",
    "MongoDB",

    // ML / CV / Data
    "YOLOv5",
    "OpenCV",
    "Jupyter Notebook",
    "Machine Learning",
    "Feature Engineering",
    "Predictive Modeling",

    // Data Analytics
    "Power BI",
    "Excel",
    "DAX",
    "Data Cleaning & Transformation",

    // Tools & Platforms
    "GitHub",
    "VS Code",
  ];

  return (
    <section
      id="about"
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>About Me</h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="about-grid"
        >
          {/* Bio */}
          <div
            style={{
              backgroundColor: "var(--card)",
              padding: "2rem",
              borderRadius: "1rem",
              border: "1px solid var(--border)",
            }}
            className="animate-fade-in-up"
          >
            <h3 style={{ marginBottom: "1rem" }}>Who I Am</h3>
            <p style={{ color: "var(--muted)", marginBottom: "1rem" }}>
              B.Tech Computer Science & Engineering student with strong expertise in Java, Python,
              Data Structures, and Machine Learning. Experienced in developing AI-powered solutions,
              data analytics dashboards, and web applications through academic coursework and
              hands-on projects. Passionate about building intelligent systems that solve
              real-world problems.
            </p>
            <p style={{ color: "var(--muted)" }}>
              Proficient in problem-solving, teamwork, and analytical thinking, with a strong
              interest in pursuing a career in Software Development, Data Science, or Artificial
              Intelligence. Continuously learning and exploring new technologies to enhance
              technical skills and contribute to innovative, impactful projects.
            </p>

            {/* Resume button */}
            <div style={{ marginTop: "1.25rem" }}>
              <a
                href="/mnt/data/Mallikarjun_ENG22CS0099.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "0.6rem 1rem",
                  backgroundColor: "var(--accent)",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                View / Download Resume
              </a>
            </div>
          </div>

          {/* Education */}
          <div
            style={{
              backgroundColor: "var(--card)",
              padding: "2rem",
              borderRadius: "1rem",
              border: "1px solid var(--border)",
            }}
            className="animate-fade-in-up"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <GraduationCap size={24} style={{ color: "var(--accent)" }} />
              <h3>Education</h3>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: "0.5rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div>
                  <p style={{ fontWeight: 600 }}>Bachelor of Technology in Computer Science</p>
                  <p style={{ color: "var(--muted)" }}>Dayananda Sagar University</p>
                </div>
                <small style={{ color: "var(--muted)" }}>2022 - 2026</small>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem", marginBottom: "1rem" }}>
              <Award size={24} style={{ color: "var(--accent)" }} />
              <h3>Certifications</h3>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", padding: 0, margin: 0 }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "var(--accent)", borderRadius: "50%" }} />
                <span style={{ color: "var(--muted)" }}>Java Full Stack - Course Completion</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "var(--accent)", borderRadius: "50%" }} />
                <span style={{ color: "var(--muted)" }}>Microsoft Power BI from Infosys Springboard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div
          style={{
            marginTop: "3rem",
            backgroundColor: "var(--card)",
            padding: "2rem",
            borderRadius: "1rem",
            border: "1px solid var(--border)",
          }}
          className="animate-fade-in-up"
        >
          <h3 style={{ marginBottom: "1.5rem" }}>Skills & Technologies</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={skill}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s backwards`,
                }}
              >
                <Tag>{skill}</Tag>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        /* small keyframe fallback for Tag animation if not defined globally */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default About;
