import React from 'react'
import "./MobileEvent.css"
import { LockClock } from '@mui/icons-material'

const MobileEvent = ({data}) => {
  return (
    <div className='mobilecont' style={{display:"none"}}>
      <div className='imgtitle'>
        <img src={data.img}/>
        <div>
          {data.concern}
        </div>
        <div>
          {data.title}
        </div>



      </div>
      <div className='mobiledesc'>
        <div>
          <h3>Description</h3>
          {data.detail}
        </div>
        <div>
          <h3>Location</h3>
          {data.Location}

        </div>
        <div>
          <span><LockClock/></span>   {data.time}
        </div>
        <div>
          button
        </div>

      </div>

    </div>
  )
}

export default MobileEvent