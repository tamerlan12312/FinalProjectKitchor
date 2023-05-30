import React,{useEffect,useContext} from 'react'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css" ;
import LangContext from '../../components/langContext' ;
interface listPropsType {
    imgList:any,
    listTitle:string,
    id:any,
 
   
}


const ListViewData = ({imgList,listTitle,id}:listPropsType) => {
  const ctx = useContext(LangContext)
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
   <>
   <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-2 ">
 
 <div className="listBox" data-aos="fade-in">
    <div className="listImg"><img src={imgList} alt="" className="img-fluid" /></div>
 </div>
 
   </div>
   <div className="col-12 col-sm-12 col-md-6 col-lg-8 ">
 
 <div className="listBox" data-aos="fade-in">
    <div className="listText">
    <h5 className="listh5 mt-3">
   {listTitle}
    </h5>
    <i className="fa-regular fa-calendar-days mt-3"></i>
  <span className=' gridSpan ms-2'>{ctx.lang.blog.june} 24,2022  /</span>
  <span className='gridSpan2 text-secondary'> By Admin</span>
  <p className='gridP mt-3'>{ctx.lang.blog.blogp}</p>
   <Link to={`/bloglist/${id}`} className='gridA'>{ctx.lang.blog.readmore}</Link>
    </div>
 </div>
   </div>
 <hr className="hr" />

   </>
  )
}

export default ListViewData