import Button from "../Button/Button"
import type { Counts } from "../../App"

type ButtonRowProps = {
    handleClick: (variant : keyof Counts, increament:number) => void,
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
        
      <Button variant="primary" size="sm" borders='light' increment={1} onClick={handleClick}>
        Primary
      </Button>

      <Button variant="secondary" size="md" borders='medium'
      onClick={handleClick} increment={2}>
        Secondary
      </Button>

      <Button variant="danger" size="lg" borders="heavy"
      onClick={handleClick} increment={3}>
        Danger
      </Button>
    </div>
  )
}

export default ButtonsRow