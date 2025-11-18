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
      style={{
        backgroundColor: "var(--card)",
        borderRadius: "1rem",
        overflow: "hidden",
        border: "1px solid var(--border)",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      className="project-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px var(--shadow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "60%",
          overflow: "hidden",
          backgroundColor: "var(--bg)",
        }}
      >
        <ImageWithFallback
          src={image}
          alt={`${title} project screenshot`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          className="project-image"
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flex: 1,
        }}
      >
        <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ color: "var(--muted)", flex: 1 }}>{description}</p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            paddingTop: "0.5rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--text)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text)";
              }}
              aria-label={`View ${title} on GitHub`}
            >
              <Github size={18} />
              <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--text)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text)";
              }}
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={18} />
              <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>Live</span>
            </a>
          )}
        </div>
      </div>

      <style>{`
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
