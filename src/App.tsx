import { useState } from 'react'
import ButtonsRow from './components/ButtonsRow/ButtonsRow'
import Render from './components/Render/Render'


export type Counts = {
  primary: number,
  secondary: number,
  danger: number,
}

function App() {

  const [counts, setCounts] = useState<Counts>({
    primary: 0,
    secondary: 0,
    danger: 0,
  })

  const handleClick = (variant : keyof Counts) => {
    setCounts((prev) => ({
      ...prev,
      [variant]: prev[variant] + 1,
    }));
  };

  return (
    <>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      minHeight: "100vh",
      gap: "16px",
    }}>
      <Render counts={counts}></Render>
      <ButtonsRow handleClick={handleClick}></ButtonsRow>
    </div>
    </>
  )
}

export default App
