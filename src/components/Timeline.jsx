import React from 'react'
import "./TimeLine.css"
import { Timelinedata } from '../data/Timelineplot'
import { useState } from 'react'

const Timeline = ({data}) => {
    const [draw,setDraw]=useState(false)
    const[appear,setAppear]=useState(false)
    window.addEventListener("scroll", ()=>{
      if(window.scrollY>=600){
        setDraw(true)
        setAppear(true)
      }
    })
  return (

    <div className={appear?'milestones appear':"milestones"}>
      <h3 style={{textAlign:"end"}}>{data.date}</h3>
      <div className={draw?'moremile draw':'moremile'}>
        <div>
        <img src={data.img} alt="" style={{borderRadius: "5%"}}/>
        <p style={{fontWeight:"bold", textTransform:"uppercase"}}>{data.title}</p>
        
        <p style={{fontWeight:"300"}}>{data.detail}</p>
        </div>
        {data.img2 && 
        <div>
        <img src={data.img2} alt="" style={{borderRadius: "5%"}}/>
        <p style={{fontWeight:"bold", textTransform:"uppercase"}}>{data.title}</p>
        <p style={{fontWeight:"300"}}>{data.detail2}</p>
        </div>}
      </div>
      {/* <div className='flagdot'> </div> */}
      
      
    </div>
  )
}

export default Timeline