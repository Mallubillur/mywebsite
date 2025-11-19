import React from "react";
import { Tag } from "./Tag";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({
  image,
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div
      className="project-card"
      style={{
        backgroundColor: "var(--card)",
        borderRadius: "1rem",
        overflow: "hidden",
        border: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 12px 28px var(--shadow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Project Image */}
      <div
        style={{
          width: "100%",
          position: "relative",
          paddingBottom: "60%", // Responsive height
          overflow: "hidden",
          backgroundColor: "var(--bg)",
        }}
      >
        <ImageWithFallback
          src={image}
          alt={`${title} screenshot`}
          className="project-image"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {/* Project Content */}
      <div
        style={{
          padding: "1.5rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--text)",
          }}
        >
          {title}
        </h3>

        <p style={{ color: "var(--muted)", flexGrow: 1 }}>{description}</p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {/* Footer Links (Code & Live) */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub link for ${title}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              <Github size={18} />
              Code
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${title}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}
        </div>
      </div>

      <style>{`
        .project-card:hover .project-image {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
}
