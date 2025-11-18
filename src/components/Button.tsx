interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "disabled";
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  href,
  disabled = false,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: "1rem",
    fontWeight: 600,
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    opacity: disabled ? 0.5 : 1,
  };

  const variants = {
    primary: {
      backgroundColor: "var(--accent)",
      color: "#ffffff",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "var(--text)",
      border: "2px solid var(--border)",
    },
    disabled: {
      backgroundColor: "var(--muted)",
      color: "var(--text)",
    },
  };

  const style = {
    ...baseStyles,
    ...variants[disabled ? "disabled" : variant],
  };

  const handleHover = (e: React.MouseEvent<HTMLElement>, isHover: boolean) => {
    if (disabled) return;
    
    if (variant === "primary") {
      e.currentTarget.style.backgroundColor = isHover ? "var(--accent-hover)" : "var(--accent)";
      e.currentTarget.style.transform = isHover ? "translateY(-2px)" : "translateY(0)";
      e.currentTarget.style.boxShadow = isHover ? "0 4px 12px var(--shadow)" : "none";
    } else if (variant === "secondary") {
      e.currentTarget.style.borderColor = isHover ? "var(--accent)" : "var(--border)";
      e.currentTarget.style.color = isHover ? "var(--accent)" : "var(--text)";
      e.currentTarget.style.transform = isHover ? "translateY(-2px)" : "translateY(0)";
    }
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
