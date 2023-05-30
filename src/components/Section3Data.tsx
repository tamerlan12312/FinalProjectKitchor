import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
interface propsType {
    image:any,
    title:string,
    title2:string,
    title3:string
}

const Section3Data = ({image,title,title2,title3}:propsType) => {
    useEffect(()=>{
        AOS.init({duration:1000})
      },[])
  return (
   <>
       <div className="col-6 col-sm-6 col-md-4 col-lg-3" >
       <div className="boxCardImg" data-aos="fade-in">
       <img src={image} className="img-fluid" alt="..."  />
       <div className="boxCardText">
        <h1 className='ms-3 mt-4'>{title}</h1>
        <a href="#react" >{title2} <i className="fa-solid fa-arrow-right-long"></i></a>
        <div className="boxCardText2">
            <h6 className='ms-2' >{title3}</h6>
         
        </div>
       </div>
       </div>
       </div>
      
   </>
  )
}

export default Section3Data