import React from 'react'
import "./Team.css"
import { LinkedIn, Instagram, Email } from '@mui/icons-material'
const Team = ({data}) => {
  
  return (
    <div className='teamcard'>
  
      <img src={data.img} alt=""/>
     
      <div className='teamdesc'>
        <h3 style={{textTransform:"uppercase", width:"100px"}}>{data.name}</h3>
        <h4 style={{fontWeight:"500", textTransform: "uppercase", fontSize:"15px"}}>{data.position}</h4>
        <div className='teamlink'>
          <a href={data.linkd}><LinkedIn style={{color:"black"}}/></a>
          <a href={data.email}><Email style={{color:"black"}}/></a>
          <a href={data.instagram}><Instagram style={{color:"black"}}/></a>
        </div>
      </div>


     
    </div>
  )
}

export default Team