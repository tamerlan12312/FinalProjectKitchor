import React, { useEffect,useContext } from 'react'
import Slider from "react-slick";
import AOS from "aos"
import "aos/dist/aos.css"
import LangContext from './langContext';

const Section8:React.FC = () => {
  const ctx = useContext(LangContext)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
useEffect(()=>{
  AOS.init({duration:1000})
},[])
  return (
    <>
   <section className="section8 mt-5">
   <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
       <div className="clientSay">
       <h4 className='sec8h4' data-aos="fade-in">{ctx.lang.section8.testimonials}</h4>
       <h3 className='sec8h3' data-aos="fade-in">{ctx.lang.section8.testimonials2} <br /> {ctx.lang.section8.testimonials3}</h3>
       <div>
        <Slider {...settings}>
          <div className='clientText mt-3 ms-auto'>
          <i className="fa-solid fa-quote-left"></i>
          <p>{ctx.lang.section8.testimonials4}</p>
           <div className="d-flex">
            <div className="clientImg ms-1">
              <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_002.png" alt="" className="img-fluid" />
            </div>
           <div className="clientName">
            <h6 className='ms-2 firstName'>
            Sharon Gunther
            </h6>
            <h6 className='ms-2 text-secondary'>
            Fresh Design
            </h6>
           </div>
           </div>
          </div>
          <div className='clientText mt-3 ms-auto'>
          <i className="fa-solid fa-quote-left"></i>
          <p>{ctx.lang.section8.testimonials5} </p>
           <div className="d-flex">
            <div className="clientImg ms-1">
              <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_003.png" alt="" className="img-fluid" />
            </div>
           <div className="clientName">
            <h6 className='ms-2 firstName'>
               Joshua Keith
            </h6>
            <h6 className='ms-2 text-secondary'>
            Senior client
            </h6>
           </div>
           </div>
          </div>
        </Slider>
      </div>
       </div>
       
      </div>

      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
        <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/h3_images_03.jpg" alt="" className="img-fluid" />
      </div>
    </div>
   </div>
   </section>
    </>
  )
}

export default Section8

