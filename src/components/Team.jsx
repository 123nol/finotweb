import React from 'react'
import "./Team.css"
import { LinkedIn, Instagram, Email } from '@mui/icons-material'
const Team = ({data}) => {
  
  return (
    <div className='teamcard'>
      <img src={data.img} alt=""/>
      <div>
        <h1>{data.name}</h1>
        <h2>{data.position}</h2>
        <div className='teamlink'>
          <a href={data.linkd}><LinkedIn/></a>
          <a href={data.email}><Email/></a>
          <a href={data.instagram}><Instagram/></a>
        </div>
      </div>


     
    </div>
  )
}

export default Team