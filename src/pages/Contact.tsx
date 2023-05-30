import React, { useRef,useEffect, useState,useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos"
import "aos/dist/aos.css"
import PulseLoader from "react-spinners/PulseLoader";

import LangContext from '../components/langContext'


const Contact = () => {

 
  const ctx = useContext(LangContext)
  const [loading,setLoading] = useState(false)
    const form = useRef<any>()
    const sendEmail = (e:any) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bnqoc7t', 'template_skv974x', form.current, 'Qfg_ke61T5Y70A3gb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
     e.target.reset()
     toast.success(ctx.lang.toastify.contacttoastify, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
    };
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


<section className="contactSection">
<Helmet>
    <meta charSet="utf-8" />
    <title>{ctx.lang.helmet.contact}</title>
  </Helmet>

    <section className="contactSection2">
<div className="d-flex justify-content-center align-o">
  <div className="contactTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
  <div className="contactTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.contact.contacttxt1}</a></h1></div>
</div>
</section>
    <div className="container-fluid ms-2 my-5">
      <div className="row " >
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
          <h6 className='contacth6 ms-2'>{ctx.lang.contact.contacttxt2}</h6>
          <h1 className='contacth1' >
          {ctx.lang.contact.contacttxt3}<br /> {ctx.lang.contact.contacttxt4}
          </h1>
          <p className='text-secondary' data-aos="fade-in">{ctx.lang.contact.contacttxt5}</p>
        </div>


        <div className="col-6 col-sm-6 col-md-4 col-lg-4 ">
        <div className="d-flex">
          <div className="boxContactIcon">
          <i className="fa-solid fa-house"></i>
          </div>
          <div className="boxContactIcon">
            <h6 className='ms-3 mt-1 contacth6icon'>{ctx.lang.contact.contacttxt6}</h6>
            <p className='contactp text-secondary ms-3'>2972 Westheimer Rd. Santa <br /> Ana, Illinois 85486</p>
          </div>
          </div>   
          <hr className='mt-0 hr' />
       
<div className="row">
<div className="col-12 ">
<div className="d-flex">
          <div className="boxContactIcon" data-aos="fade-in">
          <i className="fa-solid fa-phone"></i>
          </div>
          <div className="boxContactIcon" data-aos="fade-in">
            <h6 className='ms-3 mt-1 contacth6icon'>{ctx.lang.contact.contacttxt1}</h6>
            <p className='contactp text-secondary ms-3'>(229) 555-0109 <br /> (229) 555-2872</p>
          </div>
          </div>   
          <hr className='mt-0 hr' />
</div>
</div>
<div className="row">
<div className="col-12 ">
<div className="d-flex">
          <div className="boxContactIcon" data-aos="fade-in">
          <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="boxContactIcon" data-aos="fade-in">
            <h6 className='ms-3 mt-1 contacth6icon'>{ctx.lang.contact.contacttxt9}</h6>
            <p className='contactp text-secondary ms-3'>contact@example.com</p>
          </div>
          </div>   
         
</div>
</div>
       
        </div>


        <div className="col-6 col-sm-6 col-md-4 col-lg-4 ">
        <div className="d-flex">
          <div className="boxContactIcon " >
          <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="boxContactIcon" >
            <h6 className='ms-3 mt-1 contacth6icon'>{ctx.lang.contact.contacttxt6}</h6>
            <p className='contactp text-secondary ms-3'>2972 Westheimer Rd. Santa <br /> Ana, Illinois 85486</p>
          </div>
          </div>   
          <hr className='mt-0 hr' />
          <div className="row">
            <div className="col-12 ">
            <div className="d-flex">
          <div className="boxContactIcon" data-aos="fade-in">
          <i className="fa-solid fa-clock"></i>
          </div>
          <div className="boxContactIcon" data-aos="fade-in">
            <h6 className='ms-3 mt-1 contacth6icon'>{ctx.lang.contact.contacttxt8}</h6>
            <p className='contactp text-secondary ms-3'>{ctx.lang.contact.contacttxt8}<br /> Saturday: 9am-Midday</p>
          </div>
          </div>   
          <hr className='mt-0 hr' />
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
            <div className="d-flex">
          <div className="boxContactIcon" data-aos="fade-in">
          <i className="fa-solid fa-calendar-days"></i>
          </div>
          <div className="boxContactIcon" data-aos="fade-in">
            <h6 className='ms-3 mt-1 contacth6icon'>{ctx.lang.contact.contacttxt10}</h6>
            <p className='contactp text-secondary ms-3'>{ctx.lang.contact.contacttxt11}</p>
          </div>
          </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387548.8383419457!2d-74.26215737598424!3d40.6359396678605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2saz!4v1677739984480!5m2!1sen!2saz"  data-aos="fade-in" width="100%" height={500} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> 
<div className="container mt-5">
  <div className="formTxt">
  <h1 className="formh1" data-aos="fade-in">{ctx.lang.contact.contacttxt12}</h1>
  <p className='text-center text-secondary formp' data-aos="fade-in">{ctx.lang.contact.contacttxt13}</p>
<form className='my-5' ref={form} onSubmit={sendEmail}>
<div className="row">
  <div className="col-md-6">
 <div className="mb-3">
<input type="text" className="form-control inputtext" id="exampleFormControlInput1" placeholder={ctx.lang.contact.contacttxt14}  required  name="user_name" data-aos="zoom-in"/>
</div>

  </div>
  <div className="col-md-6">
  <div className="mb-3">
<input type="email" className="form-control" id="exampleFormControlInput1" placeholder={ctx.lang.contact.contacttxt15}   required  name="user_email" data-aos="zoom-in"/>
</div>

  </div>
  <div className="col-md-12">
  <div className="mb-3">
<input type="number" className="form-control" id="exampleFormControlInput1" placeholder={ctx.lang.contact.contacttxt16}  required  name="user_phone" data-aos="zoom-in"/>
</div>

  </div>
  <div className="col-md-12">
  <div className="form-floating">
<textarea className="form-control" placeholder={ctx.lang.contact.contacttxt17} id="floatingTextarea2" style={{height: 100}} defaultValue={""} required name="message"  data-aos="zoom-in"/>
</div>

<button className="btn mt-3" data-aos="fade-up">{ctx.lang.contact.contacttxt18} <i className="fa-solid fa-arrow-right-long"></i></button>
  </div>
</div>
<ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

</form>

  </div>
</div>
  </section>



 }
  

   </>
  )
}

export default Contact