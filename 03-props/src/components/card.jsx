import React from 'react'

const card = (props) => {

    console.log(props.user, props.age)

  return (
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user} {props.age}</h1>
        <p>Software Engineer</p>
        <button>View Profile</button>
      </div>
  )
}

export default card
