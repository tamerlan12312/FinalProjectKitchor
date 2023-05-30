import React, { useEffect,useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext'
import { Helmet } from 'react-helmet'
const About = () => {
  const ctx = useContext(LangContext)
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    AOS.init({duration:600})
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[])
  return (
  <>
{
  loading ?
  <div className="spinners">
  <PulseLoader
 color={"#DAA24E"}
 loading={loading}
 size={15}

/>
</div>

  :

  <>
   <Helmet>
    <meta charSet="utf-8" />
    <title>{ctx.lang.helmet.about}</title>
  </Helmet>
 <section className="aboutSection">
  <div className="d-flex justify-content-center align-o">
    <div className="aboutTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="aboutTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.about.abouttxt}</a></h1></div>
  </div>
</section>

   <div className="aboutText">
   <div className="container my-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
          <div className="aboutImg">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/About2_01.jpg" alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
         <div className="aboutText2">
         <h5 className='text-center abouth5'>
         {ctx.lang.about.abouttxt}
         </h5>
         <h4 className='text-center abouth4'>  {ctx.lang.about.creativedesign} <br />{ctx.lang.about.creativedesign2}</h4>
         <h6 className='text-center abouth6' data-aos="zoom-in"> {ctx.lang.about.h6}</h6>
          <div className="d-flex justify-content-center align-items-center" data-aos="zoom-in">
          <a href="#react" className='abouta mt-4'> {ctx.lang.about.read} <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
         </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6  mt-3">
        <div className="aboutText2" data-aos="zoom-in">
         <h5 className='text-center abouth5'>
         {ctx.lang.about.system}
         </h5>
         <h4 className='text-center abouth4' > {ctx.lang.about.europe}</h4>
         <h6 className='text-center abouth6'> {ctx.lang.about.p}</h6>
         </div>
         <div className="row">
          <div className="col-12">
            <div className="d-flex mt-5">
              <div className="aboutTxtIcon mt-2" data-aos="fade-up">
              <i className="fa-solid fa-file-signature "></i>
              </div>
              <div className="aboutTxtIcon" data-aos="fade-up">
                <p className='aboutP ms-3'>{ctx.lang.about.icontext} <br /> {ctx.lang.about.icontext2}  {ctx.lang.about.icontext3}</p>
              </div>
            </div>
          </div>
          <hr  className='hr'/>
          <div className="col-12">
            <div className="d-flex mt-3">
              <div className="aboutTxtIcon mt-2" data-aos="fade-up">
              <i className="fa-solid fa-pen-ruler"></i>
              </div>
              <div className="aboutTxtIcon" data-aos="fade-up">
                <p className='aboutP ms-3'> {ctx.lang.about.icontext4} <br />  {ctx.lang.about.icontext5}  {ctx.lang.about.icontext6}</p>
              </div>
            </div>
          </div>
         </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6  mt-3">
          
          <div className="aboutImg2">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/About_02.jpg" alt="" className="img-fluid" width="100%" />
          </div>
        </div>
      </div>
    </div>
    
<div className="aboutbg">
  <br />
  <div className="aboutbgText">
  <div className="container">
    <div className="row">
    <h1 className='abouth1'> {ctx.lang.about.choice}</h1>
    <div className="justify-content-center align-items-center">
   <h1 className='abouth1-1 text-center'> {ctx.lang.about.choice2} <br /> {ctx.lang.about.choice3} </h1>
 
   </div>
    </div>
  </div>
  </div>
  <br />
</div>


<div className="aboutLastText mt-5">
<h6 className='text-center aboutLasth6' >{ctx.lang.about.proud} </h6>
<h1 className='text-center aboutLasth1 mb-5'>{ctx.lang.about.awards} </h1>
<div className="container">
  <div className="row">
<hr  className='hr mb-5'/>
    <div className="col-12 col-sm-12 col-md-12 col-lg-1">
      <div className="awards">
        <h6 className='awardsh6 mt-3'>2018</h6>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-3">
      <h6 className='mt-3 awardsh6best'>{ctx.lang.about.designp}  </h6>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
      <h6 className='mt-3 awardsh6best2 text-secondary'>
      {ctx.lang.about.designp4} </h6>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-2">
    <div className="d-flex justify-content-end">
    <i className="fa-solid fa-arrow-right-long mt-3 ms-5"></i>
    </div>
    </div>
    
    <hr className="hr my-5" />
  </div>
  <div className="row">
  <div className="col-12 col-sm-12 col-md-12 col-lg-1">
      <div className="awards">
        <h6 className='awardsh6 mt-3'>2020</h6>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-3">
      <h6 className='mt-3 awardsh6best'>{ctx.lang.about.designp2} </h6>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
      <h6 className='mt-3 awardsh6best2 text-secondary'>
      {ctx.lang.about.designp4} </h6>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-2">
    <div className="d-flex justify-content-end">
    <i className="fa-solid fa-arrow-right-long mt-3 ms-5"></i>
    </div>
    </div>
    <hr className='hr my-5' />
  </div>

  <div className="row">
  <div className="col-12 col-sm-12 col-md-12 col-lg-1">
      <div className="awards">
        <h6 className='awardsh6 mt-3'>2021</h6>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-3">
      <h6 className='mt-3 awardsh6best'>{ctx.lang.about.designp3} </h6>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
      <h6 className='mt-3 awardsh6best2 text-secondary'>
      {ctx.lang.about.designp4} </h6>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-2">
    <div className="d-flex justify-content-end">
    <i className="fa-solid fa-arrow-right-long mt-3 ms-5"></i>
    </div>
    </div>
    <hr className='hr my-5' />
  </div>
</div>
</div>
   </div>
  </>
}
  </>
  )
}

export default About