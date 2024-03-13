import React from 'react'
import "./MobileEvent.css"
import { PunchClock, PinDrop, CalendarMonth } from '@mui/icons-material'


const MobileEvent = ({data}) => {
  return (
    <div className='mobilecont' style={{display:"none"}}>
      <div className='imgtitle'>
        <img src={data.img} alt=""/>
        <div id="mobcon">
          {data.concern}
        </div>
       



      </div>
      <div className='mobiledesc'>
      <h3 id="mobtit" style={{fontSize:"15px"}}>
          {data.title}
        </h3>
        <div id="mobdetail" style={{fontSize:"15px"}}>
          <h3 style={{fontSize:"15px"}}>Description</h3>
          {data.detail}
        </div>
        <div style={{fontSize:"15px", alignContent:"center"}}>
        <span ><PinDrop style={{width:"15px"}}/></span>{data.Location}

        </div >
        <div style={{fontSize:"15px"}}>
          <span><PunchClock style={{width:"15px"}}/></span>   {data.time}
        </div>
        <div style={{fontSize:"15px"}}>
          <span><CalendarMonth style={{width:"15px"}}/></span>   {data.month} {data.day} {data.year}
        </div>

        <div id="mobbut">
          <button type='button'>Register</button>
        </div>

      </div>

    </div>
  )
}

export default MobileEvent