import React, { useEffect,useContext } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import LangContext from './langContext'
import { Link } from 'react-router-dom'
const Footer = () => {
  const ctx = useContext(LangContext)
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
<>
<footer>
<div className="footerBox">
  <div className="footerText">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-5">
          <h3 className='text-center footerh3' data-aos="fade-in">{ctx.lang.footer.footertxt}</h3>
          <div className="row">
            <div className="col-12  mt-4">
              <h1 className="footerh1 text-center" data-aos="fade-in">{ctx.lang.footer.footertxt1}</h1>
            <div className="row">
              <div className="col-12 ">
                <h1 className="footerh1 text-center" data-aos="fade-in">{ctx.lang.footer.footertxt2}</h1>
             <div className="row mt-5">
              <div className="col-12  text-center">
                <a href="#react" className='footerA'>{ctx.lang.footer.footertxt3} <i className="fa-solid fa-calendar-days ms-2"></i></a>
              </div>
             </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    <hr className="hr my-5" />
    <div className="container ">
      <div className="row">
      
      
       <div className="col-12 col-sm-6 col-md-3 col-lg-3 ">
       <div className="footerImgBox ">
        <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/l ogo-2.svg" alt="" className="img-fluid" />
       </div> 
     <br />
     <h6 className="footerLasth6  text-secondary">
     {ctx.lang.footer.footertxt4}
     </h6>
       <div className="row mt-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-2   mt-2">
          <div className="footerIcon">
          <i className="fa-solid fa-phone-volume"></i>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-10    mt-2 ">
          <h6 className='footerlasth6'>+ 1875 333 489</h6>
          <div className="row ">
            <div className="col-12  mt-2">
          <h6 className='footerlasth61'>
          {ctx.lang.footer.footertxt5}
          </h6>
            </div>
          </div>
        </div>
       </div>
       <div className="d-flex justify-content-start align-items-center flex-wrap text-secondary" > 
        <div className="boxIcon ">
        <i className="fa-brands fa-twitter" title='Twitter'></i>
        </div>
        <div className="boxIcon">
        <i className="fa-brands fa-facebook-f" title='Facebook'></i>
        </div>
        <div className="boxIcon">
        <i className="fa-brands fa-github"title='Github'></i>
        </div>
        <div className="boxIcon">
        <i className="fa-brands fa-instagram" title='Instagram'></i>
        </div>
        <div className="boxIcon">
        <i className="fa-brands fa-pinterest" title='Pinterest'></i>
        </div>
   </div>
       </div>
       <div className="col-6 col-sm-6 col-md-3 col-lg-3">
       <h6 className="lastFooterh6">{ctx.lang.footer.footertxt6}</h6>
       <br />
     <Link to="/about" style={{"textDecoration":"none"}}><p className='lastFooterP'>{ctx.lang.footer.footertxt7}</p></Link>
       <Link to="/team" style={{"textDecoration":"none"}}><p className='lastFooterP'>{ctx.lang.footer.footertxt8}</p></Link>
       <Link to="/comingsoon" style={{"textDecoration":"none"}}><p className='lastFooterP'>{ctx.lang.comingsoon.comingtitle}</p></Link>
       <Link to="/project" style={{"textDecoration":"none"}}><p className='lastFooterP'>{ctx.lang.footer.footertxt10}</p></Link>
      <Link to="/virtualtours" style={{"textDecoration":"none"}}> <p className='lastFooterP'>{ctx.lang.footer.footertxt11}</p></Link>
       </div>
       <div className="col-6 col-sm-6 col-md-3 col-lg-3">
       <h6 className="lastFooterh6">{ctx.lang.footer.footertxt12}</h6>
       <br />
    <Link to="/addtocart" style={{"textDecoration":"none"}}>   <p className='lastFooterP'>{ctx.lang.footer.footertxt13}</p></Link>
      <Link to="/blog" style={{"textDecoration":"none"}}><p className='lastFooterP'>{ctx.lang.footer.footertxt14}</p></Link>
       <Link to="/yourblog" style={{"textDecoration":"none"}}><p className='lastFooterP'>{ctx.lang.footer.footertxt15}</p></Link>
     <Link to="/service" style={{"textDecoration":"none"}} >  <p className='lastFooterP'>{ctx.lang.footer.footertxt16}</p></Link>
       </div>
       <div className="col-6 col-sm-6 col-md-3 col-lg-3">
       <h6 className="lastFooterh6">{ctx.lang.footer.footertxt17}</h6>
       <br />
   <Link to="/faqs" style={{"textDecoration":"none"}}>    <p className='lastFooterP'>{ctx.lang.footer.footertxt18}</p></Link>
     <Link to="/contact" style={{"textDecoration":"none"}}>  <p className='lastFooterP'>{ctx.lang.footer.footertxt19}</p></Link>
<Link to="*" style={{"textDecoration":"none"}}>       <p className='lastFooterP'>{ctx.lang.footer.footertxt20}</p></Link>
    <Link to="/ourpricing" style={{"textDecoration":"none"}}>   <p className='lastFooterP'>{ctx.lang.footer.footertxt21}</p></Link>
     <Link to="/login" style={{"textDecoration":"none"}}>  <p className='lastFooterP'>{ctx.lang.footer.footertxt22}</p></Link>
     <Link to="/addtocart" style={{"textDecoration":"none"}}>  <p className='lastFooterP'>{ctx.lang.footer.footertxt23}</p></Link>
       </div>
      </div>
    </div>
      <hr className="hr" />
      <div className="d-flex justify-content-center align-items-center">
        <div className="footerCopy mb-3">
        <i className="fa-regular fa-copyright"></i>
        <span className='ms-1 '>Copyright 2022 <span className='footerSpan'>kitchor.</span>{ctx.lang.footer.footertxt24}</span>
        </div>
      </div>
  </div>


</div>
</footer>


</>
  )
}

export default Footer