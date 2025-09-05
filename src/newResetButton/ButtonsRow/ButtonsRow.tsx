import Button from "../Button/Button"
import { buttonConfig } from "../Ultils/buttonConfig"
import type { Counts } from "../../App"

type ButtonRowProps = {
    handleClick: (variant : keyof Counts | "reset", increament:number) => void,
}

const ButtonsRow = ({
    handleClick,

}:ButtonRowProps) => {

  return (
    <div style={{
      display: "flex", 
      gap: "10px",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      }}>
        
      {buttonConfig.map(({ variant, size, borders, increment, label}) => (
        <Button
        key={variant}
        variant={variant}
        size={size}
        borders={borders}
        increment={increment}
        onClick={handleClick}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}

export default ButtonsRow