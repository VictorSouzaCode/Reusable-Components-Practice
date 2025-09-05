import "./button.css";
import type { Counts } from "../../App";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "reset",
  size?: "sm" | "md" | "lg" | "xl",
  borders?: "light" | "medium" | "heavy",
  disabled?: boolean | ((variant: keyof Counts | "reset") => boolean),
  increment?: number,
  onClick?: (variant : keyof Counts | "reset", increament:number) => void,
  children: React.ReactNode,
}

const button = ({
  variant = "primary",
  size = "sm",
  borders = "light",
  disabled = false,
  increment = 1,
  onClick,
  children,

}: ButtonProps) => {

  const className = `button ${variant} ${size} ${borders}`;

  const isDisabled = typeof disabled === "boolean" ? disabled : disabled(variant)

  return (
    <button className={className} onClick={() => onClick?.(variant, increment)} disabled={isDisabled}>
      {children}
    </button>
  )
}

export default button