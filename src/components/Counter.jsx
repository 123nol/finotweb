import React from 'react'
import { People, Paid, Checklist } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import "./Counter.css"
const Counter = ({scroll}) => {
  useEffect(()=>{
    let valueDisplays = document.querySelectorAll(".num");
    let interval= 4000;
    
    valueDisplays.forEach((valueDisplay, index) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval / (endValue*(index**20)));
    let counter = setInterval (function () {
    
    
    startValue += 1;
    valueDisplay.textContent = startValue;
    
    if (startValue == endValue) {
    clearInterval (counter);
    }
    }, duration);
    });
    
  }, {})



  return (
    <div className='parentcount'>
      <div className='counted actmem'>
      <People style={{width: "50px", height:"50px"}}/>
        
        <div className='num' data-val="300">0</div>
        <div style={{fontSize: "40px", fontWeight:"bold"}}>ACTIVE MEMBERS</div>

      </div>
      <div className='counted compro'>
      <Checklist style={{width: "50px", height:"50px"}}/>
        <div className='num' data-val="120">0</div>
        <div style={{fontSize: "40px", fontWeight:"bold"}}>PROJECTS COMPLETED</div>

      </div>
      <div className='counted fundraised'>
      <Paid style={{width: "50px", height:"50px"}}/>
      <div style={{display: "flex", gap: "5px", justifyContent: "center", alignItems: "center"}}>
        <div className='num' data-val="2000000" style={{width:"120px"}}>0</div>
        
        <div style={{fontSize: "40px", fontWeight:"200", width:"fit-content"}}>ETB</div>
        </div>
        <div style={{fontSize: "40px", fontWeight:"bold"}}>FUNDS RAISED</div>

      </div>
    </div>
  )
}

export default Counter