import { useState } from 'react'
import ButtonsRow from './components/ButtonsRow/ButtonsRow'
import Render from './components/Render/Render'


export type Counts = {
  primary: number,
  secondary: number,
  danger: number,
}

// Next steps to improve the functions tomorrow in the morning
/* each button should increment by different amounts (primary +1, secondary +2, danger +3).
*/
// update onClick to handle increament
// update the button component to have a default increament
// update app with handleClick
// update ButtonRow
// with that done You can later make the increments dynamic (props, config file, even random).
// Buttons remain reusable — each defines its increment value.


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

  const handleClick = (
    variant:keyof Counts, increament:number
  ) => {
    setCounts((prev) => ({
      ...prev,
      [variant]: prev[variant] + increament,
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
