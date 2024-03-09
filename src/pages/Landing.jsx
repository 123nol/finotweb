import React from 'react'
import Slider from '../components/Slider'
import "./Landing.css"
import { Timelinedata } from '../data/Timelineplot'
import Timeline from '../components/Timeline'
import { Projectsdata } from '../data/Projectsdata'
import Projects from '../components/Projects'
import Events from '../components/Events'
import { Eventsdata } from '../data/Eventsdata'
import { useState } from 'react'
import Counter from '../components/Counter'
import { board } from '../data/Teamdata'
import Team from '../components/Team'

const Landing = () => {
  const [bottom, setBottom]= useState()
  

  return (
    <div className='landing' onScroll={
      (e)=>{
        if(e.target.scrollheight-e.target.scrollTop === e.target.clientHeight){
          setBottom(true)
        }
      }
    
    }>
      <Slider/>
      {/* <div className='about'>
        <div className='aboutinfo'> 
          <h1 style={{color:"rgb(190, 135, 135)", fontSize: "40px"}}>WHO ARE WE?</h1>
          <p>The Rotaract Club of Colombo is the first and oldest Rotaract Club in Sri Lanka, and the third in South Asia. Established on 9th September 1969, we are a registered non-profit social service organisation under Rotary International and fall under the guardianship of the Rotary Club of Colombo (founded in 1929). The Club aims to develop effective leaders and promote responsible citizenship to maintain international understanding and peace. </p>
        </div>
        <div className='aboutimg'>
          <img src="https://www.rotaractclubofcolombo.org/public/images/home1.png" al=""/>

        </div>
      </div> */}
      <div className='timeplot'>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end',textAlign: "center", gap: "20px", margin: "30px", width: "95%"}} id="history">
          <h1 style={{color:"rgb(190, 135, 135)", fontSize: "40px"}}>Our History</h1>
          <p style={{fontSize: "23px", fontWeight: "400" }}> Milestones in our history that have made this journey special. </p>
        </div>
        <div className='timeline'>
          {Timelinedata.map((plot)=>(
           <Timeline key={plot.id} data={plot}/>
          )
          )}

        </div>
      
    </div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',textAlign: "center", gap: "20px", marginTop: "30px"}} >
          <h1 style={{color:"rgb(190, 135, 135)"}} id="projects">Our Signatutre Projects</h1>
          <p style={{fontSize: "19px", fontWeight: "400", width: "90%", }}> RCF is recognized for the success of their signature projects, which have grown over the
decades to become synonymous with their name. </p>
        </div>
        <div className='prolist'>
          {Projectsdata.map((project)=>(
           <Projects key={project.id} data={project}/>
          )
          )}

        {/* </div> */}
        
      
    </div>
   
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',textAlign: "center", gap: "20px", marginTop: "30px"}} >
          <h1 style={{color:"rgb(190, 135, 135)"}} id="events">Events</h1>
          <p style={{fontSize: "19px", fontWeight: "400", width: "90%", }}> Some events we plan to conduct in the months to come </p>
        </div>
        <div className='allevents'>
            {Eventsdata.map((data)=>(<Events key={data.id} data={data}/>))}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',textAlign: "center", gap: "20px", marginTop: "30px", width:"100vw"}} >
        <h1 style={{color:"rgb(190, 135, 135)"}} id='teams'>Meet The Team</h1>
          <p style={{fontSize: "23px", fontWeight: "300", width: "40%", }}> Our hardworking Board Of Directors </p>
          

        <div className='landteam'>
          {board.map(data=>(<Team key={data.id} data={data}/>))}
        </div>
        </div>
        <Counter scroll={bottom}/>
        
    </div>
  )
}

export default Landing