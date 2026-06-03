import React from 'react'
import card from './components/card.jsx'
import navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div>
      {navbar()}
      {navbar()}
      {card()}
      {card()}
      
    </div>
  )
}

export default App
