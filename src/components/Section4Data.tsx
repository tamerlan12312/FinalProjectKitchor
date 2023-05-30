import React, { useEffect, useRef } from 'react'



interface propsType {
  icon:any,
  title:string,
  title2:string
}

const Section4Data = ({icon,title,title2}:propsType) => {


  return (
    <>
   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="services" data-aos="fade-in" >
      <div className="serviceIcon"  >
      <i className={`${icon}`}  ></i>
      </div>
   <div className="boxText"  >
    <h5 className='icontext text-center' >{title}</h5>
    <br />
    <p className='text-center text-secondary' >{title2}</p>
   </div>
    
    </div>
   </div>
   
    </>
  )
}

export default Section4Data