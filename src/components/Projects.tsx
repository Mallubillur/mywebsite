import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMzkxNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with cart, payments, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjMzODE2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MzM5MTUyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts and location-based insights.",
      tags: ["React", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMzkxNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Portfolio Builder",
      description: "Drag-and-drop portfolio creator with customizable templates.",
      tags: ["Vue.js", "Vuex", "Firebase"],
      githubUrl: "https://github.com",
    },
    {
      image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjMzODE2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Social Media Analytics",
      description: "Track and analyze social media metrics with interactive charts.",
      tags: ["React", "D3.js", "Express", "MySQL"],
      liveUrl: "https://example.com",
    },
    {
      image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MzM5MTUyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Recipe Finder",
      description: "Search and save recipes with nutritional information and filters.",
      tags: ["JavaScript", "HTML5", "CSS3", "API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section
      id="projects"
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
          <h2 style={{ marginBottom: "1rem" }}>Projects</h2>
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
            A showcase of my recent work and side projects
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
          }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
