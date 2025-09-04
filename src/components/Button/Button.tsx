
import "./button.css";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger",
  size?: "sm" | "md" | "lg",
  borders?: "light" | "medium" | "heavy",
  disabled?: boolean,
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