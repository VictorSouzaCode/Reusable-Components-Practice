import Button from "../Button/Button"
import { buttonConfig } from "../Ultils/buttonConfig"
import type { Counts } from "../../App"
// in another folder learn how to transfer buttonConfig to a json file so designers can work with it without touch any code
// add simple css styles there too


// 1: Step increments live inside the Counts state

// 2: Disabled state moved to buttonConfig

// 3: Erase everything and combine them into a cleanest version
// All configuration (increments + disabled state) lives inside buttonConfig, while the state only tracks numbers.

type ButtonRowProps = {
    handleClick: (variant : keyof Counts | "reset") => void,
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
        
      {buttonConfig.map(({ variant, size, borders, increment, label, disabled}) => (
        <Button
        key={variant}
        variant={variant}
        size={size}
        borders={borders}
        disabled={disabled}
        increment={increment}
        onClick={() => handleClick(variant)}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}

export default ButtonsRow