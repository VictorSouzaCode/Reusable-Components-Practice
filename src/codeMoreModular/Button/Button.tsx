import "./button.css";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "reset",
  size?: "sm" | "md" | "lg" | "xl",
  borders?: "light" | "medium" | "heavy",
  disabled?: boolean,
  increment?: number,
  onClick?: () => void,
  children: React.ReactNode,
}

const button = ({
  variant = "primary",
  size = "sm",
  borders = "light",
  disabled = false,
  onClick,
  children,

}: ButtonProps) => {

  const className = `button ${variant} ${size} ${borders}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default button