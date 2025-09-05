import type { Counts } from "../../App"

type RenderProps = {
    counts: Counts,
}


const Render = ({
    counts,
}:RenderProps) => {

  return (
    <div style={{
      display: "flex",
      flexDirection: 'column',
      gap: "10px",
      width: "300px",
      minHeight: '300px',
      justifyContent: "center",
      alignItems: "center",
      border: '2px solid green',
      borderRadius: '50%'
    }}>
      <p>Primary Clicks: {counts.primary}</p>
      <p>Secondary Clicks: {counts.secondary}</p>
      <p>Danger Clicks: {counts.danger}</p>
      <p>Total: {counts.primary + counts.secondary + counts.danger}</p>
    </div>
  )
}

export default Render