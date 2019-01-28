import React from 'react'

import './ErrorIndicator.css' 
import icon from './errorIndicator.png'

const ErrorIndicator = () => {
  return(
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span>
        something has gone terribly wrong
      </span>
    </div>
  )
}

export default ErrorIndicator