import React from 'react'
import Slider from '../components/Slider'
import "./Landing.css"
import { Timelinedata } from '../data/Timelineplot'
import Timeline from '../components/Timeline'
import { Projectsdata } from '../data/Projectsdata'
import Projects from '../components/Projects'
const Landing = () => {
  return (
    <div className='landing'>
      <Slider/>
      <div className='about'>
        <div className='aboutinfo'> 
          <h1 style={{color:"rgb(255, 122, 122)", fontSize: "40px"}}>WHO ARE WE?</h1>
          <p>The Rotaract Club of Colombo is the first and oldest Rotaract Club in Sri Lanka, and the third in South Asia. Established on 9th September 1969, we are a registered non-profit social service organisation under Rotary International and fall under the guardianship of the Rotary Club of Colombo (founded in 1929). The Club aims to develop effective leaders and promote responsible citizenship to maintain international understanding and peace. </p>
        </div>
        <div className='aboutimg'>
          <img src="https://www.rotaractclubofcolombo.org/public/images/home1.png" al=""/>

        </div>
      </div>
      {/* <div className='timeplot'> */}
        <div style={{textAlign: "center", gap: "20px", marginTop: "30px"}}>
          <h1>Our History</h1>
          <p style={{fontSize: "23px", fontWeight: "300"}}> Milestones in our history that have made this journey special. </p>
        </div>
        <div className='timeline'>
          {Timelinedata.map((plot)=>(
           <Timeline key={plot.id} data={plot}/>
          )
          )}

        {/* </div> */}
      
    </div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',textAlign: "center", gap: "20px", marginTop: "30px"}}>
          <h1>Our Signatutre Projects</h1>
          <p style={{fontSize: "23px", fontWeight: "300", width: "40%", }}> RCC is recognized for the success of their signature projects, which have grown over the
decades to become synonymous with their name. </p>
        </div>
        <div className='prolist'>
          {Projectsdata.map((project)=>(
           <Projects key={project.id} data={project}/>
          )
          )}

        {/* </div> */}
      
    </div>
    </div>
  )
}

export default Landing