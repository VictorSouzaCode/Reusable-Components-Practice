import Button from "../Button/Button"

type ButtonRowProps = {
    handleClick: () => void,
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
        
      <Button variant="primary" size="sm" borders='light' onClick={handleClick}>
        Primary
      </Button>

      <Button variant="secondary" size="md" borders='medium'>
        Secondary
      </Button>

      <Button variant="danger" size="lg" borders="heavy">
        Danger
      </Button>
    </div>
  )
}

export default ButtonsRow