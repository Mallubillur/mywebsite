interface InputFieldProps {
  type: "text" | "email" | "textarea";
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
}

export function InputField({
  type,
  name,
  label,
  placeholder,
  required = false,
  value,
  onChange,
  ariaLabel,
}: InputFieldProps) {
  const baseStyles: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    backgroundColor: "var(--bg)",
    border: "2px solid var(--border)",
    borderRadius: "0.5rem",
    color: "var(--text)",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--accent)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label
        htmlFor={name}
        style={{
          color: "var(--text)",
          fontWeight: 600,
          fontSize: "0.875rem",
        }}
      >
        {label}
        {required && <span style={{ color: "var(--accent)", marginLeft: "0.25rem" }}>*</span>}
      </label>
      
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={5}
          style={{
            ...baseStyles,
            resize: "vertical",
            minHeight: "120px",
          }}
          aria-label={ariaLabel || label}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={baseStyles}
          aria-label={ariaLabel || label}
        />
      )}
    </div>
  );
}
