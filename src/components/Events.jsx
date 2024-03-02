import React from 'react'
import "./Events.css"
import { useEffect } from 'react';
const Events = ({data}) => {
  useEffect(() => {
    const events = document.querySelectorAll(".eventdesc");
    events.forEach((event, index) => {
      if (index % 2 === 0) {
        event.style.flexDirection = "row-reverse";
       
      } else if (index % 2 !== 0) {
        event.style.flexDirection = "row";
       
      }
    });
  }, []);
  return (
    <>
    <div className='eventlist'>
        <div className='eventdate'>
          <div style={{width:"100%", display: "flex",justifyContent:"center", height: "fit-content", gap: "20px" }}>
          <h4 style={{display: "flex", gap:"0px",alignItems:"center",justifyContent:"flex-end", paddingBottom:"40px", width:"fit-content", textTransform: "uppercase"}}>
            {data.month}<br/> {data.year} 
          </h4>
          <h1 style={{fontSize:"100px", fontWeight: "bold", color:"orange", height:"fit-content" ,  width:"fit-content"}}>{data.day}</h1>
          </div>
          <div>
            <p style={{fontSize:"30px", textAlign:"center", fontWeight: "200"}}>{data.time} <span style={{fontSize:"15px"}}>PM</span></p>
          </div>
          
        </div>
        <div className='eventtitle'>
          <h2 style={{fontSize:"40px", width: "80%"}}>{data.title}</h2>
          <div className='inclusion'>
            <h5>{data.concern}</h5>
          </div>

        </div>
        <div className='eventdesc'>
          <div className='eventimg'>
              <img src={data.img} alt=""/>
          </div>
          <div className='eventdescription'>
            <div style={{display:"flex", flexDirection:"column", gap: "5px" }}>
              <h3>Descrption</h3>
              <p>{data.detail} </p>

            </div>
            <div style={{display:"flex", flexDirection:"column", gap: "5px" }}>
              <h3>Location</h3>
              <p>{data.Location} </p>

            </div>

            
          </div>

        </div>
        </div>
    </>
    
  )
}

export default Events