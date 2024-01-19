import React from 'react'
import "./Projects.css"
const Projects = ({data}) => {
  return (
    <>
       <div
        className="productCard"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        {/* <Link className="redirectLink" onClick={() => setTrigger(true)}> */}
          <div className="productInfo">
            <h1>{data.title}</h1>

            <p>{data.details}</p>
          </div>
        {/* </Link> */}
      </div>
    
    </>
    
  )
}

export default Projects