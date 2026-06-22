export default function Button({ children, type = "button", variant = "primary", className = "", ...props }) {
  return (
    <button className={`button button--${variant} ${className}`.trim()} type={type} {...props}>
      {children}
    </button>
  );
}
