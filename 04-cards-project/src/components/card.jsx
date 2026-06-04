import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <div className="logo-container">
          <img src='https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/amazon-logo.png' alt="logo" />
        </div>
        <button className="save">
          Save <Bookmark size={12} />
        </button>
      </div>
      <div className="center">
        <div className="brand-meta">
          <span className="company">Amazon</span>
          <span className="time">1 day ago</span>
        </div>
        <h2>Senior UI/UX Designer</h2>
        <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
        </div>
      </div>
      <div className="divider" />
      <div className="bottom">
        <div className="left">
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <div className="right">
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
