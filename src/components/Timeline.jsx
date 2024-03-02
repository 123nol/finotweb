import React from 'react'
import "./TimeLine.css"
import { Timelinedata } from '../data/Timelineplot'

const Timeline = ({data}) => {
  return (
    <div className='milestones'>
      <h3 style={{textAlign:"end"}}>{data.date}</h3>
      <div className='moremile'>
        <div>
        <img src={data.img} alt="" style={{borderRadius: "9%"}}/>
        <p style={{fontWeight:"200"}}>{data.detail}</p>
        </div>
        {data.img2 && 
        <div>
        <img src={data.img2} alt="" style={{borderRadius: "9%"}}/>
        <p style={{fontWeight:"200"}}>{data.detail2}</p>
        </div>}
      </div>
      {/* <div className='flagdot'> </div> */}
      
      
    </div>
  )
}

export default Timeline