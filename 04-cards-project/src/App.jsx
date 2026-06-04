import React from 'react'
import Card from './components/Card'
import User from './components/user'

function App() {

    const arr = [1,2,3,4,5]

  return (
    <div className="parent">
        <Card />
        
        {arr.map(function(){
            return 'anisha'
        })}
    </div>
  )
}


export default App
