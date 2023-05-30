import React,{useContext, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {connect} from "react-redux"
import LangContext from '../../components/langContext'
import { Helmet } from 'react-helmet'
import PulseLoader from "react-spinners/PulseLoader";
import { UserContext } from '../UserContext'
const YourBlog = (props:any) => {
    const ctx = useContext(LangContext)
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useContext<any>(UserContext)
    const navigate = useNavigate()
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },1500)
    },[])

    const loginFunc =()=>{
      {
        users ? navigate("/dashboard") : navigate("/login")
      }
    }
  return (
 <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ctx.lang.helmet.yourblog}</title>
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
 <div className="yourBlog">
 <section className="yourBlog2">
<div className="container-fluid">
    <div className="row">
        <div className="col-12">
        <div className="d-flex justify-content-center ">
  <div className="yourBlogTextFirst mt-5"><h1 className='text-center'><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.yourblog.yourblogtitle}<br /></Link></h1></div>
</div>
        </div>
        <div className="col-12">
<h5 className='text-center yourh5 animate__animated animate__fadeIn'>{ctx.lang.yourblog.yourblogtxt1}</h5>
<div className="yourLog text-center animate__animated animate__fadeIn">
    <a onClick={loginFunc} className="youra">{ctx.lang.yourblog.yourblogtxt2} <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
</div>
       
        </div>
    </div>
</div>
</section>
 </div>
<div className="container my-5 ">
    <div className="row g-5">

{
    props.pvalue.map((fd:any)=>(
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 ">
        <div className="gridBox" data-aos="fade-in">
          <div className="gridImg">
          <img src={fd.img} alt="" className="img-fluid" />
          </div>
         <div className="gridBoxText">
        <h5 className="gridh5 mt-3">
       {fd.title}
        </h5>
        <i className="fa-regular fa-calendar-days mt-3"></i>
        <span className=' gridSpan ms-2'> June 24,2022  /</span>
        <span className='gridSpan2 text-secondary ms-2'>By Admin</span>
        <p className='gridP mt-3'>{fd.desc}</p>
        <p className='gridP mt-3'>{ctx.lang.yourblog.yourp}</p>
         <Link to={`/yourblog/${fd.id}`} className='gridA'>{ctx.lang.section10.readmore}</Link>
         </div>
        </div>
        </div>
    ))
}
    </div>
</div>
    </>
}
 
 </>
  )
}

const mapStateToProps =(state:any)=>{
    return {
        pvalue:state
    }
}

export default connect(mapStateToProps)(YourBlog)