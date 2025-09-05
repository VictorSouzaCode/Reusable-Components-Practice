import { useState } from 'react'
import ButtonsRow from './useMapForButtons/ButtonsRow/ButtonsRow'
import Render from './useMapForButtons/Render/Render'


export type Counts = {
  primary: number,
  secondary: number,
  danger: number,
}

// Later Difining button config  in an array and mapping it instead of hardcoding each <Button />

// add a reset button (that sets all counts back to 0) using this same pattern, without messing the clean design?

// move the entire button config into a separate file (buttons.config.ts) so i keep my components ultra-clean and scalable
/* 
Scalable → want a new button? Just add it in buttons.config.ts.

Reusable → same config could be used for a toolbar, menu, or even a test suite.

Separation of concerns → logic (App), rendering (ButtonsRow), and configuration (buttons.config.ts) are all separate.
*/

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
    variant:keyof Counts,
    increment:number,
  ) => {
    setCounts((prev) => ({
      ...prev,
      [variant]: prev[variant] + increment,
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
