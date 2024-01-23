import React from 'react'
import "./Projects.css"
import Popup from './Popup'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Projects = ({data}) => {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <Popup trigger={trigger} setTrigger={setTrigger}>
        <h3 style={{ fontSize: "35px" }}>{data.title}</h3>
        <section className="popup-text">
          <div>
            <iframe src={data.videoLink} title="video"></iframe>
          </div>

          <p>{data.details}</p>
        </section>
        <section className="popup-images">
          <img src={data.firstImage} alt="" />
          <img src={data.secondImage} alt="" />
          <img src={data.thirdImage} alt="" />
        </section>
      </Popup>
       <div
        className="productCard"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        <Link className="redirectLink" onClick={() => setTrigger(true)}>
          <div className="productInfo">
            <h1>{data.title}</h1>

            <p>{data.details}</p>
          </div>
        </Link>
      </div>
    
    </>
    
  )
}

export default Projects