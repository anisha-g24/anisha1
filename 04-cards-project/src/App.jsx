import React from 'react'
import {Bookmark} from 'lucide-react'

const data = Array.from({length: 8}).map((_, i) => ({
  id: i,
  company: 'Amazon',
  time: `${i + 1} days ago`,
  title: 'Senior UI/UX Designer',
  tags: ['Part Time', 'Senior Level'],
  rate: '$120/hr',
  location: 'Mumbai, India',
  logo: 'https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/amazon-logo.png',
  image: 'https://i.pinimg.com/webp85/1200x/7a/01/9d/7a019d5d66eb2617d69906c992b2059f.webp'
}))

const Card = ({item}) => (
  <div className="card">
    <div className="top">
      <div className="logo-container">
        <img src={item.logo} alt="logo" />
      </div>
      <button className="save">Save <Bookmark size={12}/></button>
    </div>
    <div className="center">
      <div className="brand-meta">
        <span className="company">{item.company}</span>
        <span className="time">{item.time}</span>
      </div>
      <h2>{item.title}</h2>
      <div className="tag">
        {item.tags.map(t => <h4 key={t}>{t}</h4>)}
      </div>
    </div>
    <div className="divider" />
    <div className="bottom">
      <div className="left">
        <h3>{item.rate}</h3>
        <p>{item.location}</p>
      </div>
      <div className="right">
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  </div>
)

const App = () => {
  return (
    <div className="parent">
      <Card item={data[0]} />
    </div>
  )
}


export default App

