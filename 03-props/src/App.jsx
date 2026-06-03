import React from 'react'
import card from './components/card.jsx'

const App = () => {
  return (
    <div className="parent">
      {card({ user:"Aniruddh", age: "21", img: "https://images.unsplash.com/photo-1753454116088-b7f113c65824?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})}
      {card({ user:"Anisha", age: "24", img: "https://plus.unsplash.com/premium_photo-1775931094360-90a5f76e9aba?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})}
    </div>
  )
}

export default App
