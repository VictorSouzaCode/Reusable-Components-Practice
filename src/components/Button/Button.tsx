import "./button.css";
import type { Counts } from "../../App";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger",
  size?: "sm" | "md" | "lg",
  borders?: "light" | "medium" | "heavy",
  disabled?: boolean,
  increment?: number,
  onClick?: (variant : keyof Counts, increment: number) => void,
  children: React.ReactNode,
}

const button = ({
  variant = "primary",
  size = "sm",
  borders = "light",
  increment = 1,
  disabled = false,
  onClick,
  children,

}: ButtonProps) => {

  const className = `button ${variant} ${size} ${borders}`;

  return (
    <button className={className} onClick={() => onClick?.(variant, increment)} disabled={disabled}>
      {children}
    </button>
  )
}

export default button