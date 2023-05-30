import React, { useEffect,useContext } from 'react'
import Section4Data from './Section4Data';
import data2 from '../data/section4';
import AOS from "aos"
import "aos/dist/aos.css"
import LangContext from './langContext';
const Section4 = () => {
    const ctx = useContext(LangContext)
useEffect(()=>{
    AOS.init({duration:1000})
},[])
    return (
   <>
 
   <div className="section4 mt-5">
<div className="container ">
    <div className="row g-3">
        <div className="col-12 text-center">
                <h5 className='ms-3'  data-aos="fade-in">{ctx.lang.section4.section4txt1}</h5>
    <h2 className='ms-3' data-aos="fade-in">{ctx.lang.section4.section4txt2} <br /> {ctx.lang.section4.section4txt3}</h2>
        </div>
{
    data2.map((fd,i)=>{
       return  <Section4Data 
       key={i}
       icon={fd.icon}
       title={ctx.lang.section4.section4icon[fd.id]}
       title2={ctx.lang.section4.section4icontxt2[fd.id]}
       />

    })
}
    </div>
</div>

   </div>
   </>
  )
}

export default Section4