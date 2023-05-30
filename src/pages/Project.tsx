import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import projectData from '../data/project'
import AOS from "aos"
import "aos/dist/aos.css"
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext'
import { Helmet } from 'react-helmet'
const Project = () => {
  const ctx = useContext(LangContext)
    const [items,setItems] = useState(projectData)
    const [loading,setLoading] = useState(false)
   
    const filterItem =(changeCategory: string)=>{
const uptadeItems = projectData.filter((oldCategory)=>{
       return oldCategory.category === changeCategory
})
setItems(uptadeItems)
    }

  useEffect(()=>{
    AOS.init({duration:1500})
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
    <title>{ctx.lang.helmet.project}</title>
  </Helmet>
   <section className="projectSection">
  <div className="d-flex justify-content-center align-o">
    <div className="projectTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="projectTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.project.projects}</a></h1></div>
  </div>
</section>

     <div className="projectBox">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
           <div className="projectBoxText">
            <a href='#react' className='projecta ' onClick={()=>setItems(projectData)}>{ctx.lang.project.projectsTitle}</a>
           </div>
           <div className="projectBoxText">
            <a href='#react'  className='projecta' onClick={()=>filterItem("MINIMALIST")}>{ctx.lang.project.projectsTitle2}</a>
           </div>
           <div className="projectBoxText">
            <a href='#react' className='projecta ' onClick={()=>filterItem("MODERN")}>{ctx.lang.project.projectsTitle3}</a>
           </div>
           <div className="projectBoxText">
            <a href='#react' className='projecta ' onClick={()=>filterItem("SMALL SPACE")}>{ctx.lang.project.projectsTitle4}</a>
           </div>
           <div className="projectBoxText">
            <a href='#react' className='projecta ' onClick={()=>filterItem("TOP SELLERS")}>{ctx.lang.project.projectsTitle5}</a>
           </div>
        </div>
        <div className="container mt-5">
            <div className="row g-4">
               {
                items.map((fd,i)=>{
                    return  <div className="col-12 col-sm-6 col-md-6 col-lg-4" >
                <div className="projectImg" data-aos="fade-in">
           <img src={fd.img} alt="" className="img-fluid" />
       
              <div className="overlayProjectBox">
                <div className="overlayText">
                <Link to={`/project/${fd.id}`} className="projecta2">
                {ctx.lang.project.projectTitle[fd.id]}
                {/* title */}
                </Link>
                <div className="d-flex">
                <h6 className="projecth6 ">{ctx.lang.project.projectTitle2[fd.id]} <span className='ms-2'>/</span></h6>
                <h6 className="projecth6 ms-2 me-2"> {ctx.lang.project.projectTitle3[fd.id]} <span className='ms-2'>/</span></h6>
                <h6 className="projecth6"> {ctx.lang.project.projectTitle4[fd.id]}</h6>
                </div>
                </div>
              </div>
               
                
                </div>
                </div>
                })
               }
            </div>
        </div>
     </div>
  </>
 }

    </>
  )
}

export default Project