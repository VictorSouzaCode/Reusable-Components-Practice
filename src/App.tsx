import { useState } from 'react'
import ButtonsRow from './components/ButtonsRow/ButtonsRow'
import Render from './components/Render/Render'


// i want to add functions to these buttons, a simple count one, and i want to display the results in my render component
// the problem is that renders lives in a separate folder from the buttons, i need a way to transfer the info from the buttons to the render
// all count logic needs to be in the buttons row, or in the button components

function App() {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((number) => number + 1)
  }

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
      <Render count={count}></Render>
      <ButtonsRow handleClick={handleClick}></ButtonsRow>
    </div>
    </>
  )
}

export default App
