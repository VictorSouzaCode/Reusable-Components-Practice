import { useState } from 'react'
import ButtonsRow from './btnConfigJSON/ButtonsRow/ButtonsRow'
import Render from './btnConfigJSON/Render/Render'
import { buttonConfig } from './btnConfigJSON/Ultils/buttonConfig'

export type Counts = {
  primary: number,
  secondary: number,
  danger: number,
}

// make the Render component automatically adapt to the config (so you don’t have to hardcode "Primary", "Secondary", etc. there either)?

// last one go one step further and make the steps completely configurable via a buttonsConfig array, so you don’t need to repeat JSX for each button?

function App() {

  const [counts, setCounts] = useState<Counts>({
    primary: 0,
    secondary: 0,
    danger: 0,
  })

  // variant: Is a parameter of the type keyof Counts, , which means it can only be one of the keys (property names) defined in the Counts type.
  const handleClick = (
    variant:keyof Counts | "reset",
  ) => {

    // reset count
    if(variant === "reset") {
      setCounts({ primary: 0, secondary: 0, danger: 0})
      return;
    }

    // look up config for the clicked variant
    const config = buttonConfig.find((btn) => btn.variant === variant);
    if(!config) return;

    setCounts((prev) => ({
      ...prev,
      [variant]: prev[variant] + config.increment,
    }));

  }; // inside this function it uses the setCounts function to update the counts state. It does this by creating a new object that spreads the previous counts object (...prev) and then updates the specific property ([variant]) by adding the increment value to the previous value (prev[variant] + increament).

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
