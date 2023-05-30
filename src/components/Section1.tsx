import React,{useContext} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter'
import LangContext from './langContext';
const Section1 = () => {
  const ctx = useContext(LangContext)
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
<>

<div className='mt-5'>
        <Slider {...settings}>
       
<div className="boxSectionImg1">

<div className="section1Box">
<div className="d-flex justify-content-center align-items-center flex-wrap">
<h1 className='text-center animate__animated animate__fadeIn'>{ctx.lang.section1.section1txt} <br /> <p className='text-center'>
           <Typewriter
            words={[`${ctx.lang.section1.section1txt2}`]}
            loop={50}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
           </p>
           </h1>
           <div className="boxSection1Text2">
                <h6 className='animate__animated animate__fadeIn'>{ctx.lang.section1.section1txt3} <p className='text-center'>{ctx.lang.section1.section1txt4}</p></h6>
            <div className="section1Button text-center mt-5">
              <a href="#react">{ctx.lang.section1.section1txt5} <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
            </div>
            </div>

</div>
</div>
</div>




          <div className='boxSectionimg2'>
          <div className="section1Box">
<div className="d-flex justify-content-center align-items-center flex-wrap">
<h1 className='text-center animate__animated animate__fadeIn'>{ctx.lang.section1.section1txt6} <br /> <p className='text-center'>
           <Typewriter
            words={[`${ctx.lang.section1.section1txt7}`]}
            loop={50}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
           </p>
           </h1>
           <div className="boxSection1Text2">
                <h6 className='animate__animated animate__fadeIn'>{ctx.lang.section1.section1txt3} <p className='text-center'>{ctx.lang.section1.section1txt4}</p></h6>
            <div className="section1Button text-center mt-5">
              <a href="#react">{ctx.lang.section1.section1txt5} <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
            </div>
            </div>

</div>
</div>
          </div>







          <div className='boxSectionimg3'>
          <div className="section1Box">
<div className="d-flex justify-content-center align-items-center flex-wrap">
<h1 className='text-center animate__animated animate__fadeIn'>{ctx.lang.section1.section1txt8} <br /> <p className='text-center'>
           <Typewriter
            words={[`${ctx.lang.section1.section1txt9}`]}
            loop={50}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
           </p>
           </h1>
           <div className="boxSection1Text2">
                <h6 className='animate__animated animate__fadeIn'>{ctx.lang.section1.section1txt3} <p className='text-center'>{ctx.lang.section1.section1txt4}</p></h6>
            <div className="section1Button text-center mt-5">
              <a href="#react">{ctx.lang.section1.section1txt5} <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
            </div>
            </div>

</div>
</div>

          </div>
        </Slider>
      </div>
  
</>
  )
}

export default Section1