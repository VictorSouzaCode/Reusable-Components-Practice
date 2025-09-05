import "./button.css";
import type { Counts } from "../../App";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger",
  size?: "sm" | "md" | "lg",
  borders?: "light" | "medium" | "heavy",
  disabled?: boolean,
  onClick?: (variant : keyof Counts) => void,
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
    <button className={className} onClick={() => onClick?.(variant)} disabled={disabled}>
      {children}
    </button>
  )
}

export default button