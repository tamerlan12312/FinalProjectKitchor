import React, { useEffect,useContext } from 'react'
import { useTranslation } from 'react-i18next'
import AOS from "aos"
import "aos/dist/aos.css"
import LangContext from './langContext'
const Section5 = () => {
    const {t,i18n} = useTranslation()
    const ctx = useContext(LangContext)
    useEffect(()=>{
      AOS.init({duration:1000})
    },[])
  return (
   <>
   <br />
   <section className="section5">
<div className="container ">
<div className="promoText " data-aos="fade-in" >
  <br /> <br />
    <h6 className="promoh6 py-3" >
       {ctx.lang.section5.promovideo}
    </h6>
    <h4 > {ctx.lang.section5.promotext} <br />  {ctx.lang.section5.promotext2}</h4>
  <p className='py-3'>{ctx.lang.section5.promop} <br /> {ctx.lang.section5.promop2}<br /> {ctx.lang.section5.promop3}</p>
  <a href="https://www.youtube.com/watch?v=Z30Jk8QpAMI" target={"_blank"}  >{ctx.lang.section5.promomore}
  <i className="fa-regular fa-circle-play ms-2"></i>
  </a>
  <br /> <br /> <br /> <br />
</div>
</div>
   </section>
   
   </>
  )
}

export default Section5