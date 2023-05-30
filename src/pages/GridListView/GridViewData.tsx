import React, { useEffect,useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import LangContext from '../../components/langContext' ;
interface gridPropsType {
  img:any,
  gridTitle:string,
  id:any
}

const GridViewData = ({img,gridTitle,id}:gridPropsType) => {
  const ctx = useContext(LangContext)
  const{t}=useTranslation<string>()
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
  <>

<div className="col-12 col-sm-6 col-md-4 col-lg-4 ">
  <div className="gridBox" data-aos="fade-in">
    <div className="gridImg">
    <img src={img} alt="" className="img-fluid" />
    </div>
   <div className="gridBoxText">
  <h5 className="gridh5 mt-3">
 {gridTitle}
  </h5>
  <i className="fa-regular fa-calendar-days mt-3"></i>
  <span className=' gridSpan ms-2'> {ctx.lang.blog.june} 24,2022  /</span>
  <span className='gridSpan2 text-secondary ms-2'>By Admin</span>
  <p className='gridP mt-3'>{ctx.lang.blog.blogp}</p>
   <Link to={`/bloggrid/${id}`}className='gridA'>{ctx.lang.blog.readmore}</Link>
   </div>
  </div>
  </div>


  
  </>
  )
}

export default GridViewData