import React,{useState,useEffect,useContext} from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext';
const Faqs = () => {
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
    <title>{ctx.lang.helmet.faqs}</title>
  </Helmet>
 <section className="faqsSection">
  <div className="d-flex justify-content-center align-o">
    <div className="faqsTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="faqsTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.faqs.faqstitle}</a></h1></div>
  </div>
</section>

   <div className="faqsSection2 my-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 ">
          <div className="faqsImg">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/faq_imge.jpg" alt="" className="img-fluid"  width="100%"/>
          </div>
        <div className="faqsImgText ">
          <h6 className="faqsImgTxth6 mt-5">{ctx.lang.faqs.populartxt}</h6>
          <h1 className="faqsImgTxth1 mt-4">
          {ctx.lang.faqs.populartxt1} {ctx.lang.faqs.populartxt2} {ctx.lang.faqs.populartxt3}
          </h1>
          <p className='faqsImgTxtp text-secondary mt-4 '>{ctx.lang.faqs.populartxt4}</p>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-12 mt-3 ">
         <div className="d-flex">
          <div className="faqsImgIcon mt-3">
             <div className="faqsIcon">
             <i className="fa-solid fa-truck-fast"></i>
             </div>
          </div>
          <div className="faqsImgIcon ms-3">
            <span className='faqsImgIconSpan'>{ctx.lang.faqs.populartxt5}</span>
            <p className="text-secondary">lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</p>
          </div>
         </div>

          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-12 mt-3">
              <div className="d-flex">
          <div className="faqsImgIcon mt-3">
             <div className="faqsIcon">
             <i className="fa-solid fa-share-from-square"></i>
             </div>
          </div>
          <div className="faqsImgIcon ms-3">
            <span className='faqsImgIconSpan'>{ctx.lang.faqs.populartxt6}</span>
            <p className="text-secondary">lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</p>
          </div>
         </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-12 ">
              <div className="d-flex">
          <div className="faqsImgIcon mt-3">
             <div className="faqsIcon">
             <i className="fa-solid fa-address-card"></i>
             </div>
          </div>
          <div className="faqsImgIcon ms-3">
            <span className='faqsImgIconSpan'>{ctx.lang.faqs.populartxt7}</span>
            <p className="text-secondary">lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</p>
          </div>
         </div>
          </div>
        </div>
        </div>
        
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 ">
          <div className="faqsAccordion">
            <h3 className="faqsh3  mt-2">{ctx.lang.faqs.preconstruction}</h3>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 ">
                     <hr className="hr" />
     
 <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      {ctx.lang.faqs.faqstxt1}
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      {ctx.lang.faqs.faqstxt2}
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt3}
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree1" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt4}
      </button>
    </h2>
    <div id="flush-collapseThree1" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt5}
      </button>
    </h2>
    <div id="flush-collapseThree2" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree3" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt6}
      </button>
    </h2>
    <div id="flush-collapseThree3" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree4" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt7}
      </button>
    </h2>
    <div id="flush-collapseThree4" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="faqsAccordion mt-5">
            <h3 className="faqsh3  mt-2">{ctx.lang.faqs.faqstxt8}</h3>
          </div>
          <hr className="hr" />
          <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree5" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt4}
      </button>
    </h2>
    <div id="flush-collapseThree5" className="accordion-collapse collapse show" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree6" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt9}
      </button>
    </h2>
    <div id="flush-collapseThree6" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree7" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt10}
      </button>
    </h2>
    <div id="flush-collapseThree7" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree8" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt11}
      </button>
    </h2>
    <div id="flush-collapseThree8" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree9" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt12}
      </button>
    </h2>
    <div id="flush-collapseThree9" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
  <hr className="hr" />
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree10" aria-expanded="false" aria-controls="flush-collapseThree">
      {ctx.lang.faqs.faqstxt6}
      </button>
    </h2>
    <div id="flush-collapseThree10" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{ctx.lang.faqs.faqstxtall}</div>
    </div>
  </div>
</div>

<hr className="hr" />

 
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

export default Faqs

