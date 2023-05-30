import React,{useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import AOS from "aos"
import "aos/dist/aos.css"
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext'
const VirtualTours = () => {
const {t} = useTranslation()
const ctx = useContext(LangContext)
const windowImg =()=>{
   if (window.innerWidth < 900){
       window.location.assign("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-06/")
   } else {
    window.open("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-06/","","width=1000,height=600")
   }

}

const windowImg2 =()=>{
    if (window.innerWidth < 900){
        window.location.assign("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-06/")
    } else {
     window.open("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-05/","","width=1000,height=600")
    }
 
}
const windowImg3 =()=>{
      if (window.innerWidth < 900){
       window.location.assign("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-06/")
   } else {
    window.open("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-04/","","width=1000,height=600")
   }

}
const windowImg4 =()=>{
      if (window.innerWidth < 900){
       window.location.assign("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-06/")
   } else {
    window.open("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-03/","","width=1000,height=600")
   }

}
const windowImg5 =()=>{
     if (window.innerWidth < 900){
       window.location.assign("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-06/")
   } else {
    window.open("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-02/","","width=1000,height=600")
   }
 
}
const windowImg6 =()=>{
    if (window.innerWidth < 900){
        window.location.assign("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-06/")
    } else {
     window.open("https://demo2.themelexus.com/kitchor/virtual-tour/kitchen-virtual-tour-01/","","width=1000,height=600")
    }
 
}
const [loading,setLoading] = useState(false)

useEffect(()=>{
    AOS.init({duration:1500})
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },1500)
},[])

    return (
        <>
         <Helmet>
        <meta charSet="utf-8" />
        <title>{ctx.lang.helmet.virtualtours}</title>
      </Helmet>
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
<section className="virtualTours">
  <div className="d-flex justify-content-center align-o">
    <div className="virtualText mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="virtualText mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.vt}</a></h1></div>
  </div>
</section>


   
    <h1 className="virtualTitle1 text-center my-2 mt-4" >
    {ctx.lang.virtualtours.vttxt1}
    </h1>
    <p className='virtualTitle2 text-center text-secondary' >
    {ctx.lang.virtualtours.vttxt2} <br />   {ctx.lang.virtualtours.vttxt3}
    </p>

   <div className="virtualBox">
    <div className="container">
        <div className="row g-3 my-3">
            <div className="col-6 col-sm-6 col-md-6 col-lg-4" >
                <div className="virtualImg" onClick={windowImg} data-aos="fade-in">
                    <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/07/Tour_6.jpg" alt="" className="img-fluid"  />
                <div className="virtualText">
                <h1 className='text-center virtualh1 mt-3'>  {ctx.lang.virtualtours.vttxt4}</h1>
                </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4" >
                <div className="virtualImg" onClick={windowImg2}  data-aos="fade-in">
                    <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/07/Tour_5.jpg" alt="" className="img-fluid" />
                    <div className="virtualText">
                <h1 className='text-center virtualh1 mt-3'>   {ctx.lang.virtualtours.vttxt5}</h1>
                </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4" >
                <div className="virtualImg" onClick={windowImg3}  data-aos="fade-in">
                    <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/07/Tour_4.jpg" alt="" className="img-fluid" />
                    <div className="virtualText">
                <h1 className='text-center virtualh1 mt-3'>  {ctx.lang.virtualtours.vttxt6}</h1>
                </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4" >
                <div className="virtualImg" onClick={windowImg4}  data-aos="fade-in">
                    <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/07/Tour_3.jpg" alt="" className="img-fluid" />
                    <div className="virtualText">
                <h1 className='text-center virtualh1 mt-3'>   {ctx.lang.virtualtours.vttxt7}</h1>
                </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4" >
                <div className="virtualImg" onClick={windowImg5}  data-aos="fade-in">
                    <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/07/Tour_2.jpg" alt="" className="img-fluid" />
                    <div className="virtualText">
                <h1 className='text-center virtualh1 mt-3'>   {ctx.lang.virtualtours.vttxt8}</h1>
                </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4" >
                <div className="virtualImg" onClick={windowImg6}  data-aos="fade-in">
                    <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/07/Tour_1.jpg" alt="" className="img-fluid" />
                    <div className="virtualText">
                <h1 className='text-center virtualh1 mt-3'>   {ctx.lang.virtualtours.vttxt9}</h1>
                </div>
                </div>
            </div>
        </div>
    </div>
   </div>
   

    </>
}
   </>
  )
}

export default VirtualTours