import { Button } from "./Button";
import { Download, Briefcase, Calendar } from "lucide-react";

export function Resume() {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2022 - Present",
      description: "Leading frontend development for multiple client projects. Architected scalable React applications and mentored junior developers.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led migration from JavaScript to TypeScript",
        "Established component library used across 5+ projects",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "Jun 2020 - Dec 2021",
      description: "Developed responsive web applications using React and modern CSS frameworks.",
      achievements: [
        "Built and maintained 10+ client websites",
        "Implemented accessibility standards (WCAG 2.1 AA)",
        "Reduced load times by 50% through code splitting",
      ],
    },
    {
      role: "Junior Web Developer",
      company: "StartUp Studio",
      period: "Aug 2019 - May 2020",
      description: "Collaborated with design and backend teams to create user-friendly interfaces.",
      achievements: [
        "Converted design mockups to responsive HTML/CSS",
        "Integrated RESTful APIs into frontend applications",
        "Participated in agile development processes",
      ],
    },
  ];

  const handleDownloadResume = () => {
    alert("Resume download would start here. In production, link to actual resume PDF.");
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
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Experience</h2>
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
            My professional journey and work history
          </p>
        </div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            paddingLeft: "2rem",
          }}
          className="timeline-container"
        >
          {/* Timeline Line */}
          <div
            style={{
              position: "absolute",
              left: "0.375rem",
              top: "0.5rem",
              bottom: "0.5rem",
              width: "2px",
              backgroundColor: "var(--border)",
            }}
            className="timeline-line"
          />

          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              style={{
                position: "relative",
                marginBottom: "2.5rem",
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s backwards`,
              }}
            >
              {/* Timeline Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-1.625rem",
                  top: "0.5rem",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                  border: "3px solid var(--bg)",
                  zIndex: 1,
                }}
              />

              {/* Content Card */}
              <div
                style={{
                  backgroundColor: "var(--card)",
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  border: "1px solid var(--border)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(8px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px var(--shadow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <h3 style={{ marginBottom: "0.25rem" }}>{exp.role}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--muted)" }}>
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.375rem 0.75rem",
                      backgroundColor: "var(--bg)",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <Calendar size={14} style={{ color: "var(--accent)" }} />
                    <small style={{ color: "var(--muted)" }}>{exp.period}</small>
                  </div>
                </div>

                <p style={{ color: "var(--muted)", marginBottom: "1rem" }}>
                  {exp.description}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "0.5rem",
                        color: "var(--muted)",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "6px",
                          width: "6px",
                          height: "6px",
                          backgroundColor: "var(--success)",
                          borderRadius: "50%",
                          marginTop: "0.5rem",
                        }}
                      />
                      <span style={{ fontSize: "0.875rem" }}>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Button
            variant="primary"
            onClick={handleDownloadResume}
            ariaLabel="Download full resume"
          >
            <Download size={20} /> Download Full Resume
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-container {
            padding-left: 1.5rem;
          }
          .timeline-line {
            left: 0.25rem;
          }
        }
      `}</style>
    </section>
  );
}
