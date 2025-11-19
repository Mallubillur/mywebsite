import React from "react";
import { ProjectCard } from "./ProjectCard";

/**
 * Projects.tsx
 * Projects replaced with the three real projects from your resume.
 *
 * NOTE: Update githubUrl / liveUrl values to actual repo/demo links.
 */

// local uploaded resume path (from conversation history)
export const resumeFilePath = "/mnt/data/Mallikarjun_ENG22CS0099.pdf";

export function Projects() {
  const projects = [
    {
      title: "Fruit Recognition & Price Estimation",
      description:
        "Real-time fruit detection using YOLOv5 + OpenCV. Detects fruits and estimates price based on type and weight estimation. Implemented using Python, OpenCV and YOLOv5; includes Jupyter Notebook for experiments.",
      image: "/images/fruit-recognition.jpeg",
      tags: ["Python", "YOLOv5", "OpenCV", "Jupyter Notebook"],
      githubUrl: "https://github.com/YOUR_GITHUB/fruit-recognition", // update
      liveUrl: "", // no live demo
    },
    {
      title: "Amazon Prime Video Analysis",
      description:
        "Interactive Power BI dashboard analyzing movies & TV shows on Amazon Prime — data cleaning, transformation and DAX measures to surface insights and visuals.",
      image: "/images/amazon-prime.jpg",
      tags: ["Power BI", "Excel", "DAX", "Data Cleaning"],
      githubUrl: "https://github.com/YOUR_GITHUB/amazon-prime-analysis", // update
      liveUrl: "", // update if you publish a report
    },
    {
      title: "Crime Rate Prediction",
      description:
        "Machine learning model to predict crime rates using historical datasets. Includes preprocessing, feature engineering, model training, and visualization to identify trends and hotspots.",
      image: "/images/crime-prediction.jpg",
      tags: ["Python", "Machine Learning", "Feature Engineering", "Visualization"],
      githubUrl: "https://github.com/YOUR_GITHUB/crime-rate-prediction", // update
      liveUrl: "", // update if you have a demo
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
          <p
            style={{
              color: "var(--muted)",
              marginTop: "1rem",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A showcase of my recent work and academic projects
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

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Projects;
