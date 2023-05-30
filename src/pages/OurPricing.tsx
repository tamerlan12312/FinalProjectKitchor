import React,{useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext';
const OurPricing = () => {
  const ctx = useContext(LangContext)
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
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
    <title>{ctx.lang.helmet.pricing}</title>
  </Helmet>
      <section className="ourSection">
  <div className="d-flex justify-content-center align-o">
    <div className="ourTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="ourTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.pricing.pricingtitle}</a></h1></div>
  </div>
          <h4 className='text-center ourh4 animate__animated animate__zoomIn'>{ctx.lang.pricing.pricingtxt1}</h4>
</section>
      
      <section className="ourText">
        <div className="container py-5">
          <div className="row ">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 colBox2 mt-3">
              <div className="ourBox">
                <h1 className='mt-2 ourh1'>{ctx.lang.pricing.pricingtxt2}</h1>
                <br />
                <p >{ctx.lang.pricing.pricingtxt3} <br /> {ctx.lang.pricing.pricingtxt4}</p>
              </div>
            </div>


            <div className="col-12 col-sm-6 col-md-4 col-lg-3 colBox mt-3">
<div className="ourBox1">
  <h6 className='text-center mt-4'>{ctx.lang.pricing.pricingtxt5}</h6>
  <h3 className='text-center mb-4 mb-4'> <sup>$</sup>23<sub>SQ/FT</sub> </h3>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt6}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt7}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt8}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt9}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt10}</h6>
  <h6 className='text-center text-secondary'>{ctx.lang.pricing.pricingtxt11}</h6>
  <div className="ourTxtA ">
  <a href="#react" className='my-3'> {ctx.lang.pricing.readmore} <i className="fa-solid fa-arrow-right-long"></i></a>
  </div>
</div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 colBox mt-3">
            <div className="ourBox1">
  <h6 className='text-center mt-4'>{ctx.lang.pricing.pricingtxt12}</h6>
  <h3 className='text-center mb-4'> <sup>$</sup>65<sub>SQ/FT</sub></h3>
  
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt13}</h6>
  <h6 className='text-center mb-4 text-secondary '>{ctx.lang.pricing.pricingtxt14}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt15}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt16}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt17}</h6>
  <h6 className='text-center text-secondary '>{ctx.lang.pricing.pricingtxt18}</h6>
  <div className="ourTxtA ">
  <a href="#react" className='my-3'> {ctx.lang.pricing.readmore} <i className="fa-solid fa-arrow-right-long"></i></a>
  </div>
</div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 colBox mt-3">
            <div className="ourBox1">
  <h6 className='text-center mt-4'>{ctx.lang.pricing.pricingtxt19}</h6>
  <h3 className='text-center mb-4'> <sup>$</sup>185<sub>SQ/FT</sub></h3>
  
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt20}</h6>
  <h6 className='text-center mb-4 text-secondary '>{ctx.lang.pricing.pricingtxt21}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt22}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt23}</h6>
  <h6 className='text-center mb-4 text-secondary'>{ctx.lang.pricing.pricingtxt24}</h6>
  <h6 className='text-center text-secondary '>{ctx.lang.pricing.pricingtxt25}</h6>
  <div className="ourTxtA ">
  <a href="#react" className='my-3'> {ctx.lang.pricing.readmore} <i className="fa-solid fa-arrow-right-long"></i></a>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>
  </>
}
   </>
  )
}

export default OurPricing