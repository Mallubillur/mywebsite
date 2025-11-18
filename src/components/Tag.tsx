interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.375rem 0.75rem",
        backgroundColor: "var(--card)",
        color: "var(--accent)",
        borderRadius: "9999px",
        fontSize: "0.875rem",
        fontWeight: 500,
        border: "1px solid var(--border)",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </span>
  );
}
