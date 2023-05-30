import React, { useEffect,useContext} from 'react'
import CountUp from 'react-countup';
import AOS from "aos"
import "aos/dist/aos.css"
import LangContext from './langContext';
const Section2 = () => {
  const ctx = useContext(LangContext)
useEffect(()=>{
  AOS.init({duration:800})
},[])
 return (
<>

<div className="container mt-5">
    <div className="row g-3">
        <div className="col-12 col-sm-6 col-md-4">
            <div className="boxCount">
             <div className="d-flex justify-content-center" >

              <div className="boxCounter" ><h1 data-aos="fade-in">
        <CountUp start={0} end={25} duration={3} delay={0} />
              +
                </h1></div>
              <div className="boxCounterText"><h5 className='mt-2 ms-2'  data-aos="fade-in">
              {ctx.lang.section2.section2txt1}<br />   {ctx.lang.section2.section2txt2} <br />   {ctx.lang.section2.section2txt3}
                </h5></div>
             </div>
            </div>
        </div>
        
        <div className="col-12 col-sm-6 col-md-4">
          <div className="boxSection2Text"  >
            <h6 className='text-center'  data-aos="fade-in">{ctx.lang.header.about}</h6>
            <h1 className='text-center'  data-aos="fade-in">{ctx.lang.section2.section2txt4} <br /> {ctx.lang.section2.section2txt5}</h1>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <div className="boxSection2Text1" >
            <p className='text-secondary' data-aos="fade-in">{ctx.lang.section2.section2txt6}</p>
            <div className="d-flex justify-content-end">
            <a href="#react" className='ms-auto' data-aos="fade-in">{ctx.lang.section2.section2txt7}
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
            
            </div>
          </div>
        </div>
    </div>
  </div>
</>
  )
}

export default Section2