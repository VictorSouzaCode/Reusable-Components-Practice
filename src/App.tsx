import { useState } from 'react'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      display: "flex", 
      gap: "10px",
      width: "100%",
      minHeight: "100vh",
      justifyContent: "center",
      alignItems: "center"
      }}>
        
      <Button variant="primary" size="sm" borders='light'>
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

export default App
