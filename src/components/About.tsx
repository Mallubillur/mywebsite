import { Tag } from "./Tag";
import { GraduationCap, Award } from "lucide-react";

export function About() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Next.js",
    "Node.js",
    "Git",
    "Responsive Design",
    "UI/UX",
    "Web Accessibility",
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
              I'm a passionate Frontend Developer with a keen eye for design and a commitment to creating 
              seamless user experiences. With expertise in modern web technologies, I transform ideas into 
              responsive, accessible, and performant web applications.
            </p>
            <p style={{ color: "var(--muted)" }}>
              My approach combines technical excellence with creative problem-solving, ensuring every project 
              not only meets requirements but exceeds expectations. I thrive in collaborative environments 
              and am always eager to learn new technologies.
            </p>
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <p style={{ fontWeight: 600 }}>Bachelor of Technology in Computer Science</p>
                  <p style={{ color: "var(--muted)" }}>University Name</p>
                </div>
                <small style={{ color: "var(--muted)" }}>2018 - 2022</small>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem", marginBottom: "1rem" }}>
              <Award size={24} style={{ color: "var(--accent)" }} />
              <h3>Certifications</h3>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "var(--accent)", borderRadius: "50%" }} />
                <span style={{ color: "var(--muted)" }}>Advanced React & Redux</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "var(--accent)", borderRadius: "50%" }} />
                <span style={{ color: "var(--muted)" }}>Web Accessibility Specialist</span>
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
      `}</style>
    </section>
  );
}
