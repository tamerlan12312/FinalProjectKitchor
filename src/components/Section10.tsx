import React, { useEffect,useContext } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import LangContext from './langContext'
const blog1 = require ("../image/blog1.jpg")
const blog2 = require ("../image/blog2.jpg")
const blog3 = require ("../image/blog3.jpg")
const Section10:React.FC = () => {
    const ctx= useContext(LangContext)
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
   <>
  <section className="section10 mt-5">
    <div className="container ">
    <h5 className='text-center sec10h5' data-aos="fade-in">{ctx.lang.section10.blog} </h5>
    <h1 className='text-center sec10h1' data-aos="fade-in">{ctx.lang.section10.news} </h1>
        <div className="row mt-5 g-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="blog">
                    <div className="blogImg">
                    <img src={blog1} alt="" className="img-fluid" />
                    <div className="overlaySearch">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    </div>
                    <p className='mt-3 blogText' >{ctx.lang.section10.section10txt}</p>
                    <i className="fa-regular fa-calendar-days"></i> <span className='iconTxt'>{ctx.lang.section10.date} /</span>
                    <span className='iconTxt text-secondary'> By Admin </span>
                    <p className='mt-4 blogText2'>{ctx.lang.section10.section10txt3}</p>
                   <a href="#react" className='readMore'>{ctx.lang.section10.readmore}</a>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="blog">
                    <div className="blogImg">
                    <img src={blog2} alt="" className="img-fluid" />
                    <div className="overlaySearch">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    </div>
                    <p className='mt-3 blogText' >{ctx.lang.section10.section10txt1}</p>
                    <i className="fa-regular fa-calendar-days"></i> <span className='iconTxt'>{ctx.lang.section10.date} /</span>
                    <span className='iconTxt text-secondary'> By Admin </span>
                    <p className='mt-4 blogText2'>{ctx.lang.section10.section10txt3}</p>
                   <a href="#react" className='readMore'>{ctx.lang.section10.readmore}</a>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="blog">
                    <div className="blogImg">
                    <img src={blog3} alt="" className="img-fluid" />
                    <div className="overlaySearch">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    </div>
                    <p className='mt-2 blogText' >{ctx.lang.section10.section10txt2}</p>
                    <i className="fa-regular fa-calendar-days"></i> <span className='iconTxt'>{ctx.lang.section10.date} /</span>
                    <span className='iconTxt text-secondary'> By Admin </span>
                    <p className='mt-4 blogText2'>{ctx.lang.section10.section10txt3}</p>
                   <a href="#react" className='readMore'>{ctx.lang.section10.readmore}</a>
                </div>
            </div>
       
        </div>
    </div>
  </section>
  <br /> <br />
   </>
  )
}

export default Section10