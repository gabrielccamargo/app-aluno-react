export default function InputField({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  rightSlot,
}) {
  return (
    <div className="field">
      <label htmlFor={id}>
        <span>{label}</span>
        {rightSlot}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <small className="field-error" id={`${id}-error`}>
          {error}
        </small>
      )}
    </div>
  );
}
