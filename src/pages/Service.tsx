import React, { useEffect,useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import AOS from "aos"
import "aos/dist/aos.css"
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext';
import { Helmet } from 'react-helmet';

const Service = () => {
  const ctx = useContext(LangContext)
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    AOS.init({duration:1000})
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
    <title>{ctx.lang.helmet.service}</title>
  </Helmet>
  <section className="serviceSection">
  <div className="d-flex justify-content-center align-o">
    <div className="serviceTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="serviceTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.service.servicetxt}</a></h1></div>
  </div>
</section>

    <div className="serviceText ">
    <div className="serviceTitle pt-5 pb-3 mb-5">
    <h6 className="serviceh6 text-center">{ctx.lang.service.ourservice}</h6>
      <h1 className='serviceh1 text-center'>
      {ctx.lang.service.provide} <br /> <span className='serviceSpan'>{ctx.lang.service.provide2}</span>
      </h1>
    </div>
   
<div className="container pb-5">
  <div className="row g-3">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
      <div className="boxSvg pt-5 " data-aos="fade-in">
        <div className="boxSvgText">
       <div className="d-flex mt-2">
        <div className="SvgIcon ms-3">
        <svg width="48" height="57" viewBox="0 0 48 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_526_1617)">
<path d="M24.0652 28.3575C17.9514 28.3575 13.0083 23.4144 13.0083 17.4306V11.4469C13.0083 10.9266 13.5286 10.4062 14.049 10.4062H33.9514C34.4717 10.4062 34.992 10.9266 34.992 11.4469V17.3006C34.992 23.4144 30.049 28.3575 24.0652 28.3575ZM15.0896 12.4876V17.3006C15.0896 22.1136 19.1221 26.1461 23.9351 26.1461C28.7481 26.1461 32.7807 22.2436 32.7807 17.3006V12.4876H15.0896Z" className='svgColor'></path>
<path d="M34.3417 12.4878H13.6588C12.8783 12.4878 12.2279 12.2276 11.7076 11.5772C11.3173 10.9268 11.1873 10.1463 11.3173 9.49593C13.0084 3.90244 18.2116 0 24.0653 0C29.919 0 35.1222 3.90244 36.6832 9.49593C36.9434 10.2764 36.8133 11.0569 36.2929 11.5772C35.7726 12.2276 35.1222 12.4878 34.3417 12.4878ZM24.0653 2.0813C19.1222 2.0813 14.8295 5.33333 13.3986 10.0163C13.3986 10.1463 13.3986 10.2764 13.3986 10.2764C13.3986 10.2764 13.5287 10.4065 13.6588 10.4065H34.3417C34.4718 10.4065 34.4718 10.4065 34.6019 10.2764C34.6019 10.2764 34.732 10.1463 34.6019 10.0163C33.3011 5.33333 28.8783 2.0813 24.0653 2.0813Z" className='svgColor'></path>
<path d="M19.9025 8.32499C19.3821 8.32499 18.8618 7.80466 18.8618 7.28434V1.82092C18.8618 1.3006 19.3821 0.780273 19.9025 0.780273C20.4228 0.780273 20.9431 1.3006 20.9431 1.82092V7.28434C20.9431 7.80466 20.4228 8.32499 19.9025 8.32499Z" className='svgColor'></path>
<path d="M28.2277 8.32499C27.7073 8.32499 27.187 7.80466 27.187 7.28434V1.82092C27.187 1.3006 27.7073 0.780273 28.2277 0.780273C28.748 0.780273 29.2683 1.3006 29.2683 1.82092V7.28434C29.2683 7.80466 28.748 8.32499 28.2277 8.32499Z" className='svgColor'></path>
<path d="M44.0976 38.3742C43.7073 38.3742 43.3171 38.2442 43.187 37.8539C40.9756 33.8214 37.3334 31.4799 33.3008 31.4799C30.8293 31.4799 28.6179 29.919 27.7073 27.5775C25.2358 28.4881 22.6342 28.4881 20.1626 27.5775C19.2521 29.919 17.1708 31.4799 14.5691 31.4799C10.6667 31.4799 7.02442 33.8214 4.81304 37.7238C4.55287 38.2442 3.90247 38.3742 3.38214 38.1141C2.86182 37.8539 2.73174 37.2035 2.9919 36.6832C5.59352 32.1303 9.88621 29.3986 14.5691 29.3986C16.2602 29.3986 17.6911 28.358 18.2114 26.797C18.3415 26.5368 18.3415 26.2767 18.4716 26.0165C18.6017 25.7564 18.7317 25.4962 18.9919 25.3661C19.2521 25.236 19.6423 25.236 19.9025 25.3661C22.374 26.6669 25.3659 26.6669 27.8374 25.3661C28.0976 25.236 28.4878 25.236 28.748 25.3661C29.0082 25.4962 29.2683 25.7564 29.2683 26.0165C29.3984 26.2767 29.3984 26.5368 29.5285 26.797C30.0488 28.358 31.4797 29.3986 33.1708 29.3986C37.8537 29.3986 42.2764 32.1303 44.8781 36.8133C45.1382 37.3336 45.0082 37.984 44.4878 38.2442C44.4878 38.3742 44.2277 38.3742 44.0976 38.3742Z" className='svgColor'></path>
<path d="M24.0653 38.2442C19.6426 38.2442 16.1304 34.732 16.1304 30.3092V29.6588C16.1304 29.1385 16.6507 28.6182 17.171 28.6182C17.6913 28.6182 18.2117 29.1385 18.2117 29.6588V30.3092C18.2117 33.5613 20.8133 36.1629 24.0653 36.1629C27.3174 36.1629 29.919 33.5613 29.919 30.3092V29.6588C29.919 29.1385 30.4393 28.6182 30.9596 28.6182C31.48 28.6182 32.0003 29.1385 32.0003 29.6588V30.3092C31.8702 34.732 28.358 38.2442 24.0653 38.2442Z" className='svgColor'></path>
<path d="M24.0649 17.1705C16.6503 17.1705 13.7885 12.2274 13.7885 11.9672C13.6584 11.577 13.6584 11.1867 13.7885 10.9266C13.9186 10.6664 14.1787 10.4062 14.569 10.4062H33.4308C33.821 10.4062 34.0812 10.5363 34.3413 10.9266C34.4714 11.1867 34.6015 11.577 34.3413 11.9672C34.2112 12.2274 31.4795 17.1705 24.0649 17.1705ZM16.7803 12.4876C18.0812 13.6583 20.2925 14.9591 23.9348 14.9591C27.5771 14.9591 29.7885 13.5282 31.0893 12.4876H16.7803Z" className='svgColor'></path>
<path d="M7.6749 56.0651C4.42287 56.0651 1.56108 54.2439 0.130185 51.3821C0.00010412 51.122 0.00010412 50.7317 0.130185 50.4716C0.260267 50.2114 0.650511 49.9512 1.04075 49.9512H3.38222C4.68303 49.9512 5.72368 48.9106 5.72368 47.6098C5.72368 46.309 4.68303 45.2683 3.38222 45.2683H1.04075C0.650511 45.2683 0.390348 45.1382 0.130185 44.748C0.00010412 44.4878 -0.129977 44.0976 0.130185 43.7073C1.56108 40.8456 4.55295 39.0244 7.6749 39.0244C10.2765 39.0244 12.8782 40.3252 14.4391 42.4065H33.5611C34.992 40.5854 37.0733 39.2846 39.4147 39.1545C42.9269 38.7643 46.309 40.5854 47.87 43.7073C48.0001 44.0976 48.0001 44.3577 47.87 44.748C47.7399 45.0082 47.3497 45.2683 46.9594 45.2683H44.618C43.3172 45.2683 42.2765 46.309 42.2765 47.6098C42.2765 48.9106 43.3172 49.9512 44.618 49.9512H46.9594C47.3497 49.9512 47.6099 50.0813 47.87 50.4716C48.0001 50.7317 48.1302 51.122 47.87 51.5122C46.4391 54.374 43.4473 56.1951 40.3253 56.1951C37.4635 56.1951 34.7318 54.7643 33.1708 52.2927H14.8294C13.3985 54.5041 11.1871 55.8049 8.58547 56.0651C8.32531 56.0651 7.93506 56.0651 7.6749 56.0651ZM14.179 50.0813H33.6912C34.0814 50.0813 34.4716 50.3415 34.6017 50.6017C35.7725 52.683 37.8538 53.9838 40.1952 53.9838C42.0164 53.9838 43.5773 53.2033 44.8782 52.0325H44.4879C42.0164 52.0325 40.0651 50.0813 40.0651 47.6098C40.0651 45.1382 42.0164 43.187 44.4879 43.187H44.8782C43.5773 41.7561 41.6261 40.9756 39.5448 41.2358C37.5936 41.3659 35.9025 42.4065 34.8619 44.0976C34.7318 44.3577 34.3416 44.6179 33.9513 44.6179H13.9188C13.5286 44.6179 13.2684 44.4878 13.0082 44.0976C11.8375 42.2764 9.7562 41.2358 7.6749 41.2358C5.85376 41.2358 4.29279 42.0163 2.99197 43.187H3.38222C5.85376 43.187 7.80498 45.1382 7.80498 47.6098C7.80498 50.0813 5.85376 52.0325 3.38222 52.0325H3.12206C4.42287 53.4634 6.37409 54.2439 8.45539 53.9838C10.5367 53.7236 12.3578 52.5529 13.3985 50.7317C13.5286 50.3415 13.9188 50.0813 14.179 50.0813Z" className='svgColor'></path>
<path d="M13.5284 48.6506C13.0081 48.6506 12.4878 48.1303 12.4878 47.61C12.4878 47.0897 13.0081 46.5693 13.5284 46.5693H34.6016C35.1219 46.5693 35.6423 47.0897 35.6423 47.61C35.6423 48.1303 35.1219 48.6506 34.6016 48.6506H13.5284Z" className='svgColor'></path>
</g>
<defs>
<clipPath id="clip0_526_1617">
<rect width="48" height="56.065" fill="white"></rect>
</clipPath>
</defs>
</svg>
        </div>
        <div className="SvgIcon"> 
          <h5 className='ms-2 mt-3 svgh5 '>{ctx.lang.service.serviceicon1}</h5>
        </div>
       </div>
          <p className='svgP text-secondary ms-3 mt-4 mb-3'>{ctx.lang.service.serviceicon2}</p>
<a href="#react" className='ms-3 svgA'>{ctx.lang.service.readmore} <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
   <div className="boxSvg pt-5 " data-aos="fade-in">
        <div className="boxSvgText">
       <div className="d-flex mt-2">
        <div className="SvgIcon ms-3">
        <svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_526_1582)">
<path d="M21.021 47.9135C20.8958 47.9135 20.7845 47.8856 20.6732 47.8161C20.4506 47.6909 20.3254 47.4683 20.3254 47.2179L20.0889 23.8734C20.0889 23.623 20.2141 23.3865 20.4367 23.2613L40.6648 11.589C40.8735 11.4638 41.1518 11.4638 41.3604 11.589C41.583 11.7142 41.7082 11.9368 41.7082 12.1872L41.7917 23.0665C41.7917 23.456 41.4856 23.7621 41.0961 23.776C40.7066 23.776 40.4005 23.4699 40.3866 23.0804L40.3031 13.4115L21.4662 24.2908L21.6888 46.0353L36.046 37.7437C36.3799 37.549 36.8112 37.6603 37.006 37.9941C37.2007 38.328 37.0894 38.7593 36.7555 38.9541L21.3688 47.8439C21.2714 47.8856 21.1462 47.9135 21.021 47.9135Z" className='svgColor'></path>
<path d="M21.0211 47.9133C20.8959 47.9133 20.7846 47.8854 20.6733 47.8159L0.584307 36.3245C0.375626 36.1993 0.236505 35.9767 0.236505 35.7263L0 12.3818C0 12.1314 0.125209 11.8949 0.347802 11.7697C0.570395 11.6445 0.834725 11.6445 1.04341 11.7697L21.1464 23.2611C21.355 23.3863 21.4942 23.6089 21.4942 23.8593L21.7307 47.2038C21.7307 47.4542 21.6055 47.6907 21.3829 47.8159C21.2716 47.8854 21.1464 47.9133 21.0211 47.9133ZM1.62771 35.3228L20.3116 46.0073L20.089 24.2766L1.40512 13.5922L1.62771 35.3228Z" className='svgColor'></path>
<path d="M20.7986 24.5691C20.6733 24.5691 20.562 24.5413 20.4508 24.4718L0.347802 12.9804C0.139121 12.8552 0 12.6326 0 12.3822C0 12.1318 0.139121 11.8952 0.347802 11.77L20.576 0.0978127C20.7846 -0.0273959 21.0629 -0.0273959 21.2716 0.0978127L41.3745 11.5892C41.5971 11.7144 41.7223 11.9509 41.7223 12.2013C41.7223 12.4517 41.5832 12.6882 41.3745 12.8134L21.1464 24.4718C21.0351 24.5274 20.9098 24.5691 20.7986 24.5691ZM2.10072 12.3683L20.7846 23.0527L39.6077 12.1874L20.9238 1.50293L2.10072 12.3683Z" className='svgColor'></path>
<path d="M15.7067 33.0133L12.3956 28.951L10.3923 29.577L8.29156 26.8642L6.16301 27.8798L5.88477 14.5381L15.5397 20.0612L15.7067 33.0133ZM12.8825 27.3233L14.2598 29.0067L14.1485 20.8542L7.33162 16.9588L7.51248 25.6817L8.70892 25.1113L10.8931 27.9354L12.8825 27.3233Z" className='svgColor'></path>
<path d="M24.4711 41.6669C24.2346 41.6669 24.012 41.5557 23.8729 41.3331C23.6642 40.9992 23.7755 40.5679 24.0955 40.3731L28.4361 37.702C28.7699 37.4933 29.2012 37.6046 29.396 37.9246C29.6047 38.2585 29.4934 38.6898 29.1734 38.8845L24.8328 41.5557C24.7215 41.6391 24.5963 41.6669 24.4711 41.6669Z" className='svgColor'></path>
<path d="M24.4711 38.5643C24.2346 38.5643 24.012 38.453 23.8729 38.2304C23.6642 37.8965 23.7755 37.4653 24.0955 37.2705L30.342 33.4168C30.6759 33.2082 31.1072 33.3195 31.3019 33.6394C31.4967 33.9594 31.3993 34.4046 31.0794 34.5994L24.8328 38.453C24.7215 38.5226 24.5963 38.5643 24.4711 38.5643Z" className='svgColor'></path>
<path d="M14.9833 21.2439C14.8581 21.2439 14.7468 21.216 14.6355 21.1465L6.2604 16.3607C6.03781 16.2355 5.9126 16.0129 5.9126 15.7625C5.9126 15.5121 6.03781 15.2895 6.2604 15.1504L26.1268 3.33902C26.3494 3.21382 26.6138 3.21382 26.8364 3.33902L34.8636 7.98566C35.0723 8.11087 35.2114 8.33346 35.2114 8.58388C35.2114 8.83429 35.0862 9.05689 34.8775 9.1821L15.345 21.1326C15.2337 21.2021 15.1085 21.2439 14.9833 21.2439ZM7.9855 15.7347L14.9554 19.7274L33.1385 8.6117L26.4746 4.75806L7.9855 15.7347Z" className='svgColor'></path>
<path d="M40.9708 40.4153C35.9903 40.4153 31.9419 36.3669 31.9419 31.3864C31.9419 26.4058 35.9903 22.3574 40.9708 22.3574C45.9514 22.3574 49.9998 26.4058 49.9998 31.3864C49.9998 36.3669 45.9514 40.4153 40.9708 40.4153ZM40.9708 23.7486C36.7555 23.7486 33.3331 27.171 33.3331 31.3864C33.3331 35.6017 36.7555 39.0241 40.9708 39.0241C45.1862 39.0241 48.6086 35.6017 48.6086 31.3864C48.6086 27.171 45.1723 23.7486 40.9708 23.7486Z" className='svgColor'></path>
<path d="M40.9709 35.2118C40.8596 35.2118 40.7344 35.1839 40.637 35.1283C40.3031 34.9474 40.1779 34.5162 40.3587 34.1823L43.9481 27.6853C44.1289 27.3514 44.5602 27.2262 44.8941 27.4071C45.228 27.5879 45.3532 28.0192 45.1723 28.3531L41.583 34.8501C41.4578 35.0727 41.2213 35.2118 40.9709 35.2118Z" className='svgColor'></path>
<path d="M40.9707 35.2121C40.8176 35.2121 40.6507 35.1564 40.5255 35.0451L37.9657 32.9027C37.6735 32.6522 37.6318 32.207 37.8822 31.9149C38.1326 31.6227 38.5778 31.581 38.87 31.8314L41.4298 33.9739C41.7219 34.2243 41.7637 34.6695 41.5132 34.9617C41.3602 35.1147 41.1654 35.2121 40.9707 35.2121Z" className='svgColor'></path>
</g>
<defs>
<clipPath id="clip0_526_1582">
<rect width="50" height="47.9132" fill="white"></rect>
</clipPath>
</defs>
</svg>
        </div>
        <div className="SvgIcon">
          <h5 className='ms-2 mt-3 svgh5'>{ctx.lang.service.serviceicon3}</h5>
        </div>
       </div>
          <p className='svgP text-secondary ms-3 mt-4 mb-4'>{ctx.lang.service.serviceicon4}</p>
<a href="#react" className='ms-3 svgA'>{ctx.lang.service.readmore} <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>

    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
   <div className="boxSvg pt-5 " data-aos="fade-in">
        <div className="boxSvgText">
       <div className="d-flex mt-2">
        <div className="SvgIcon ms-3">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_526_1564)">
<path d="M39.1513 26.3341C38.6665 26.3341 38.1816 25.8553 38.1816 25.3765V20.5885C38.1816 20.1097 38.6665 19.6309 39.1513 19.6309C39.6362 19.6309 40.121 20.1097 40.121 20.5885V25.3765C40.121 25.8553 39.7574 26.3341 39.1513 26.3341Z" className='svgColor'></path>
<path d="M39.1515 47.9998H4.48483C3.99999 47.9998 3.51514 47.521 3.51514 47.0422V20.8277C3.51514 20.3489 3.99999 19.8701 4.48483 19.8701C4.96968 19.8701 5.45453 20.3489 5.45453 20.8277V46.0846H38.1818V44.5285C38.1818 44.0497 38.6667 43.5709 39.1515 43.5709C39.6364 43.5709 40.1212 44.0497 40.1212 44.5285V47.1619C40.1212 47.521 39.7576 47.9998 39.1515 47.9998Z" className='svgColor'></path>
<path d="M42.6667 23.9404C42.4242 23.9404 42.303 23.9404 42.0606 23.8207L21.8182 10.0551L1.57576 23.8207C1.21212 23.9404 0.848485 23.9404 0.484848 23.8207C0.242424 23.701 0 23.3419 0 22.9828V15.4417C0 15.0826 0.121212 14.8432 0.363636 14.6038L21.2121 0.119981C21.5758 -0.119421 21.9394 -0.119421 22.303 0.119981L43.1515 14.6038C43.3939 14.8432 43.5152 15.0826 43.5152 15.4417V22.9828C43.5152 23.3419 43.2727 23.701 43.0303 23.8207C43.0303 23.9404 42.7879 23.9404 42.6667 23.9404ZM1.93939 15.9205V21.1873L21.2121 8.02023C21.5758 7.78083 21.9394 7.78083 22.303 8.02023L41.5758 21.0676V15.8008L21.8182 2.15489L1.93939 15.9205Z" className='svgColor'></path>
<path d="M28.1212 48.0004H15.5151C15.0303 48.0004 14.5454 47.5216 14.5454 47.0428V31.9605C14.5454 31.4817 15.0303 31.0029 15.5151 31.0029H28.1212C28.606 31.0029 29.0909 31.4817 29.0909 31.9605V47.0428C29.0909 47.5216 28.7272 48.0004 28.1212 48.0004ZM16.4848 46.0852H27.1515V32.9181H16.4848V46.0852Z" className='svgColor'></path>
<path d="M40.3634 42.4944C36.121 42.4944 32.7271 39.1428 32.7271 34.9533C32.7271 30.7637 36.121 27.4121 40.3634 27.4121C44.6058 27.4121 47.9998 30.7637 47.9998 34.9533C47.9998 39.1428 44.6058 42.4944 40.3634 42.4944ZM40.3634 29.3273C37.2119 29.3273 34.6664 31.841 34.6664 34.9533C34.6664 38.0655 37.2119 40.5792 40.3634 40.5792C43.5149 40.5792 46.0604 38.0655 46.0604 34.9533C46.0604 31.841 43.5149 29.3273 40.3634 29.3273Z" className='svgColor'></path>
<path d="M40.3637 37.4668C40.1213 37.4668 39.8789 37.3471 39.7577 37.2274L36.3637 34.2349C36.0001 33.8758 35.8789 33.2773 36.2425 32.9182C36.6061 32.5591 37.2122 32.4394 37.5758 32.7985L40.0001 34.9531L45.2122 27.6513C45.5758 27.1725 46.1819 27.0528 46.5455 27.4119C47.0304 27.771 47.1516 28.3695 46.788 28.7286L41.2122 37.1077C40.9698 37.3471 40.7274 37.4668 40.3637 37.4668C40.4849 37.4668 40.3637 37.4668 40.3637 37.4668Z" className='svgColor'></path>
<path d="M44.8485 48.0002H0.969697C0.484848 48.0002 0 47.5214 0 47.0426C0 46.5638 0.484848 46.085 0.969697 46.085H44.8485C45.3333 46.085 45.8182 46.5638 45.8182 47.0426C45.8182 47.5214 45.3333 48.0002 44.8485 48.0002Z" className='svgColor'></path>
<path d="M9.69713 24.8976C9.33349 24.8976 9.09107 24.7779 8.84864 24.5385C8.48501 24.0597 8.60622 23.4612 9.09107 23.2218L21.2123 14.6033C21.6971 14.2442 22.3032 14.3639 22.5456 14.8427C22.9092 15.3215 22.788 15.92 22.3032 16.1594L10.182 24.7779C10.182 24.7779 9.93955 24.8976 9.69713 24.8976Z" className='svgColor'></path>
<path d="M33.9395 24.8979C33.6971 24.8979 33.5758 24.8979 33.3334 24.6585L21.2122 16.04C20.7274 15.6809 20.7274 15.0824 20.9698 14.7233C21.2122 14.3642 21.9395 14.2445 22.3031 14.4839L34.4243 23.1024C34.9092 23.4615 34.9092 24.06 34.6668 24.4191C34.5455 24.6585 34.1819 24.8979 33.9395 24.8979Z" className='svgColor'></path>
</g>
<defs>
<clipPath id="clip0_526_1564">
<rect width="48" height="48" fill="white"></rect>
</clipPath>
</defs>
</svg>
        </div>
        <div className="SvgIcon">
          <h5 className='ms-2 mt-3 svgh5'>{ctx.lang.service.serviceicon5}</h5>
        </div>
       </div>
          <p className='svgP text-secondary ms-3 mt-4 mb-4'>{ctx.lang.service.serviceicon6}</p>
<a href="#react" className='ms-3 svgA'>{ctx.lang.service.readmore} <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>

    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
   <div className="boxSvg pt-5 " data-aos="fade-in">
        <div className="boxSvgText">
       <div className="d-flex mt-2">
        <div className="SvgIcon ms-3">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4587 30.0364C12.169 30.0364 11.8792 29.8432 11.6861 29.5535C9.94763 25.6903 10.0442 21.3442 12.0724 17.5776C13.2313 15.4528 14.9698 13.6178 16.9979 12.4589C17.3842 12.2657 17.8671 12.3623 18.1569 12.7486C18.35 13.1349 18.2535 13.6178 17.8671 13.9076C16.0321 14.97 14.5834 16.6118 13.5211 18.4468C11.7826 21.7305 11.5895 25.5937 13.1348 28.974C13.3279 29.3603 13.1348 29.8432 12.7484 30.0364C12.6519 30.0364 12.5553 30.0364 12.4587 30.0364Z" className='svgColor'></path>
<path d="M35.5411 30.0361C35.4446 30.0361 35.348 30.0361 35.1548 29.9396C34.7685 29.7464 34.5754 29.2635 34.7685 28.8772C37.2796 23.2756 35.2514 16.8048 29.9395 13.7142C29.5532 13.5211 29.4566 12.9416 29.6498 12.5553C29.843 12.1689 30.4224 12.0724 30.8088 12.2655C36.7967 15.7424 39.2112 23.179 36.3138 29.5533C36.1206 29.843 35.8309 30.0361 35.5411 30.0361Z" className='svgColor'></path>
<path d="M21.3441 48C20.9577 48 20.4748 47.8068 20.1851 47.5171C19.8954 47.2274 19.7022 46.841 19.7022 46.3581L19.6056 42.2052C17.8672 41.8189 16.3219 41.1429 14.7767 40.2736L11.8793 43.2676C11.5895 43.5573 11.2032 43.7505 10.7203 43.7505C10.2374 43.7505 9.85111 43.5573 9.56137 43.2676L5.21529 39.0181C4.53924 38.3421 4.53924 37.2797 5.21529 36.7002L8.11268 33.7062C7.24346 32.2575 6.5674 30.6157 6.08451 28.9738H1.93159C1.54527 28.9738 1.06237 28.7807 0.772636 28.4909C0.482897 28.2012 0.289738 27.8149 0.289738 27.332L0 21.3441C0 20.4748 0.676056 19.7022 1.64185 19.7022L5.79477 19.6056C6.18109 17.8672 6.85714 16.3219 7.72636 14.7767L4.73239 11.8793C4.05634 11.2032 4.05634 10.1408 4.73239 9.56137L8.98189 5.21529C9.17505 4.82897 9.56137 4.63582 10.0443 4.63582C10.5272 4.63582 10.9135 4.82897 11.2032 5.11871L14.1972 8.0161C15.6459 7.14688 17.2877 6.47082 18.9296 5.98793V1.83501C18.9296 1.35211 19.1227 0.965795 19.4125 0.676056C19.7022 0.386318 20.0885 0.193159 20.5714 0.193159L26.6559 0C27.1388 0 27.5252 0.193159 27.8149 0.482897C28.1046 0.772636 28.2978 1.15895 28.2978 1.64185L28.3944 5.79477C30.1328 6.18109 31.6781 6.85714 33.2233 7.72636L36.1207 4.73239C36.4105 4.44266 36.7968 4.2495 37.2797 4.2495C37.7626 4.2495 38.1489 4.44266 38.4386 4.73239L42.7847 8.98189C43.4608 9.65795 43.4608 10.7203 42.7847 11.2998L39.8873 14.2938C40.7565 15.7425 41.4326 17.3843 41.9155 19.0262H46.0684C46.5513 19.0262 46.9376 19.2193 47.2274 19.5091C47.5171 19.7988 47.7103 20.1851 47.7103 20.668L47.8068 26.7525C47.8068 27.6217 47.1308 28.3944 46.165 28.3944L42.0121 28.4909C41.6258 30.2294 40.9497 31.7746 40.0805 33.3199L43.0744 36.2173C43.3642 36.507 43.5573 36.8934 43.5573 37.3763C43.5573 37.8592 43.3642 38.2455 43.0744 38.5352L38.825 42.8813C38.1489 43.5573 37.0865 43.5573 36.507 42.8813L33.5131 39.9839C32.0644 40.8531 30.4225 41.5292 28.7807 42.0121V46.165C28.7807 47.0342 28.1046 47.8068 27.1388 47.8068L21.3441 48ZM14.5835 38.4386C14.7767 38.4386 14.8732 38.4386 14.9698 38.5352C16.5151 39.501 18.1569 40.1771 19.8954 40.5634C20.668 40.7565 21.1509 41.4326 21.1509 42.1087L21.2475 46.2616L27.332 46.165V42.0121C27.332 41.2394 27.8149 40.5634 28.5875 40.3702C30.326 39.8873 31.9678 39.1147 33.4165 38.1489C33.7062 37.9557 34.1891 37.9557 34.4789 38.2455L38.5352 42.1087L37.9557 41.5292L42.2052 37.1831L38.6318 33.8994C38.3421 33.6097 38.3421 33.2233 38.5352 32.9336C39.501 31.3883 40.1771 29.7465 40.5634 28.008C40.7565 27.2354 41.4326 26.7525 42.1087 26.7525L46.2616 26.6559L46.165 20.5714H42.0121C41.2394 20.5714 40.5634 20.0885 40.3702 19.3159C39.8873 17.5775 39.1147 15.9356 38.1489 14.4869C37.9557 14.1972 37.9557 13.7143 38.2455 13.4245L41.6258 9.94769L37.2797 5.79477L33.8994 9.27163C33.6097 9.56137 33.2233 9.56137 32.9336 9.36821C31.3883 8.40241 29.7465 7.72636 28.008 7.34004C27.2354 7.14688 26.7525 6.47082 26.7525 5.79477L26.6559 1.64185L20.5714 1.73843V5.89135C20.5714 6.66398 20.0885 7.34004 19.3159 7.5332C17.5775 8.0161 15.9356 8.78873 14.4869 9.75453C14.1972 9.94769 13.7143 9.94769 13.4245 9.65795L9.94769 6.27767L5.79477 10.6237L9.27163 14.004C9.56137 14.2938 9.56137 14.6801 9.36821 14.9698C8.40241 16.5151 7.72636 18.1569 7.34004 19.8954C7.24346 20.668 6.5674 21.2475 5.79477 21.2475H1.64185L1.73843 27.332H5.89135C6.66398 27.332 7.34004 27.8149 7.5332 28.5875C8.0161 30.326 8.78873 31.9678 9.75453 33.4165C9.94769 33.7062 9.94769 34.1891 9.65795 34.4789L6.27767 37.9557L10.6237 42.2052L14.004 38.7284C14.1972 38.5352 14.3903 38.4386 14.5835 38.4386Z" className='svgColor'></path>
<path d="M23.9517 20.7648C21.1509 20.7648 18.833 18.4469 18.833 15.6461C18.833 12.8453 21.1509 10.5273 23.9517 10.5273C26.7525 10.5273 29.0704 12.8453 29.0704 15.6461C29.0704 18.4469 26.8491 20.7648 23.9517 20.7648ZM23.9517 12.1692C22.0201 12.1692 20.4749 13.7145 20.4749 15.6461C20.4749 17.5776 22.0201 19.1229 23.9517 19.1229C25.8833 19.1229 27.4286 17.5776 27.4286 15.6461C27.4286 13.7145 25.8833 12.1692 23.9517 12.1692Z" className='svgColor'></path>
<path d="M32.8372 35.0584H15.1631C14.3905 35.0584 13.811 34.4789 13.811 33.7063V23.7586C13.811 22.5031 14.5837 21.3441 15.7426 20.9578H15.8392L19.6058 20.0886C20.0887 19.992 20.475 20.2818 20.5716 20.6681C20.6682 21.151 20.3784 21.5373 19.9921 21.6339L16.3221 22.5031C15.7426 22.6962 15.4529 23.1791 15.4529 23.7586V33.4166H32.5475V23.7586C32.5475 23.1791 32.2577 22.6962 31.6782 22.5031L28.0082 21.6339C27.5253 21.5373 27.3322 21.0544 27.4287 20.6681C27.5253 20.1852 28.0082 19.992 28.3945 20.0886L32.1611 20.9578H32.2577C33.4167 21.4407 34.1893 22.5031 34.1893 23.7586V33.7063C34.1893 34.4789 33.6098 35.0584 32.8372 35.0584Z" className='svgColor'></path>
<path d="M17.9636 35.0587C17.4807 35.0587 17.1909 34.6723 17.1909 34.286V27.4289C17.1909 26.946 17.5772 26.6562 17.9636 26.6562C18.4465 26.6562 18.7362 27.0426 18.7362 27.4289V34.286C18.8328 34.6723 18.4465 35.0587 17.9636 35.0587Z" className='svgColor'></path>
<path d="M29.9396 35.0587C29.4567 35.0587 29.167 34.6723 29.167 34.286V27.4289C29.167 26.946 29.5533 26.6562 29.9396 26.6562C30.4225 26.6562 30.7123 27.0426 30.7123 27.4289V34.286C30.8088 34.6723 30.4225 35.0587 29.9396 35.0587Z" className='svgColor'></path>
</svg>
        </div>
        <div className="SvgIcon">
          <h5 className='ms-2 mt-3 svgh5'>{ctx.lang.service.serviceicon7}</h5>
        </div>
       </div>
          <p className='svgP text-secondary ms-3 mt-4 mb-4'>{ctx.lang.service.serviceicon8}</p>
<a href="#react" className='ms-3 svgA'>{ctx.lang.service.readmore} <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>


<div className="container-fluid py-5">
  <div className="row g-3">
    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
      <div className="imgService ">
        <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/img_services1.jpg" alt="" className="img-fluid" width="100%" />
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
      <div className="serviceTxt">
        <h6 className="serviceTxth5 ms-3 mt-5" data-aos="fade-in" >
        {ctx.lang.service.accomp}
        </h6>
        <h1 className="serviceTxth1 ms-3" data-aos="fade-in">
        {ctx.lang.service.proudly1} <br />  {ctx.lang.service.proudly2} 
        </h1>
        <p className="serviceTxtp ms-3" data-aos="fade-in"> {ctx.lang.service.years} </p>
      </div>
      <div className="row ms-3 g-2">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
         <div className="d-flex">
         <div className="serviceIcon">
          <i className="fa-solid fa-kitchen-set"></i>
          </div>
          <div className="serviceIconText ms-3 ">
            <h6 className='serviceIconTexth6'>
            <CountUp start={0} end={168} duration={4} delay={1} />
            </h6>
            <h6 className='serviceIconTexth62 ms-1'>{ctx.lang.service.done1} <br /> {ctx.lang.service.done2}</h6>
          </div>
         </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
        <div className="d-flex">
         <div className="serviceIcon">
         <i className="fa-regular fa-calendar-days"></i>
          </div>
          <div className="serviceIconText ms-3 ">
            <h6 className='serviceIconTexth6'><CountUp start={0} end={36} duration={4} delay={1} /></h6>
            <h6 className='serviceIconTexth62 ms-1'>{ctx.lang.service.experience1} <br /> {ctx.lang.service.experience2}</h6>
          </div>
         </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
        <div className="d-flex">
         <div className="serviceIcon">
         <i className="fa-solid fa-user-plus"></i>
          </div>
          <div className="serviceIconText ms-3 ">
            <h6 className='serviceIconTexth6'><CountUp start={0} end={158} duration={4} delay={1} /><sup style={{"fontSize":"30px"}}>+</sup></h6>
            <h6 className='serviceIconTexth62 ms-1'>{ctx.lang.service.happy1}<br /> {ctx.lang.service.happy2}</h6>
          </div>
         </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
        <div className="d-flex">
         <div className="serviceIcon">
         <i className="fa-solid fa-layer-group"></i>
          </div>
          <div className="serviceIconText ms-3 ">
            <h6 className='serviceIconTexth6'><CountUp start={0} end={16000}    duration={5}   delay={1} /></h6>
            <h6 className='serviceIconTexth62 ms-1'>{ctx.lang.service.cups1}<br /> {ctx.lang.service.cups2}</h6>
          </div>
         </div>
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

export default Service