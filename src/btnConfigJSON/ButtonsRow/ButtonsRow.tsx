import Button from "../Button/Button"
import { buttonConfig } from "../Ultils/buttonConfig"
import type { Counts } from "../../App"
// transfer buttonConfig to a json file so designers can work with it without touch any code

//For this to work, i need to make sure my tsconfig.json has:
/*
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
*/

// App + ButtonsRow stay the same

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