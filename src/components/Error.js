import React from 'react'
const Error = ({ type }) => {
  
  if (type === "single-product") {
    return <div className="section section-center text-center">
      <h2>Error Occurred While Fetching Product</h2>
      <h3>Re-directing..</h3>
  </div>
  }

  return <div className="section section-center text-center">
    <h2>Error Occurred While Getting Data</h2>
  </div>
}

export default Error
