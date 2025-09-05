
type RenderProps = {
    count: number,
}


const Render = ({
    count,
}:RenderProps) => {

  return (
    <div style={{
      display: "flex", 
      gap: "10px",
      width: "100px",
      minHeight: '100px',
      justifyContent: "center",
      alignItems: "center",
      border: '2px solid green',
      borderRadius: '50%'
    }}>
        {count}
    </div>
  )
}

export default Render