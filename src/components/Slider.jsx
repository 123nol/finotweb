import React from 'react'
import "./Slider.css"
import { useState } from 'react';
import { ArrowLeft,ArrowRight } from '@mui/icons-material';
const Slider = () => {
  const data=["https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinys rgb&w=1600",
  "https://www.innertraditions.com/media/amasty/blog/cache/d/i/817/550/dialog-gf8cccd729_1920.jpg",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinys rgb&w=1600"

  ];
  const [state, setState] = useState(0)
  const prev = () => {
    state === 0 ? setState(2) : setState(state - 1)

  }
  const next = () => {
    state === 2 ? setState(0) : setState(state + 1)
  }
  return (
      <div className='slider'>
        <div className='container' style={{transform : `translateX(-${state*100}vw)`}}>
          <div className='slidecont ' >
              <div className='slidedesc'>
                <div style={{fontSize: "120px", fontWeight: "bold"}}>SERVICE ABOVE SELF</div>
                <div style={{fontSize: "25px", fontWeight: "400"}}>We are passionate about helping others</div>
              </div>
             <img className="slideimg" src={data[0]} alt=""/>
          </div >
          <div className='slidecont' >
            <div className='slidedesc'>
            <div style={{fontSize: "120px", fontWeight: "bold"}}>SERVICE ABOVE SELF</div>
                <div style={{fontSize: "25px", fontWeight: "400"}}>We are passionate about helping others</div>
            </div>
             <img className="slideimg" src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg" alt="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg"/>
          </div>
          <div className='slidecont'>
              <div className='slidedesc'>
                <div style={{fontSize: "120px", fontWeight: "bold"}}>SERVICE ABOVE SELF</div>
                <div style={{fontSize: "25px", fontWeight: "400"}}>We are passionate about helping others</div>
                </div>
              <img className="slideimg" src={data[2]} alt=""/>
          </div>
         
         
         
        </div>
        <div className='arrow'>
          <div className='icon' onClick={prev}>
            <ArrowLeft/>
            
          </div>
          <div className='icon' onClick={next}>
            <ArrowRight/>
          </div>
        </div>
      </div>
      
    
  )
}

export default Slider

