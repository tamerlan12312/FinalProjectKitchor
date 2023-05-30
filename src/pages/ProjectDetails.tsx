import React, { useState,useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'
import projectData from '../data/project'
import { Link } from 'react-router-dom'
import ProjectDetailsPopup from './ProjectDetailsPopup'
import ProjectDetailsPopup2 from './ProjectDetailsPopup2'
import AOS from "aos"
import "aos/dist/aos.css"
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext'
const ProjectDetails = () => {
  const ctx = useContext(LangContext)
  const {url} = useParams()
  const projectItems:any = projectData.find(q=>q.id == url)
  const [popup,setPopup] = useState("close")
  const [popup2,setPopup2] = useState(false)
  const [icon,setIcon] = useState(<i className="fa-solid fa-plus"></i>)
  const [icon2,setIcon2] = useState(<i className="fa-solid fa-plus"></i>)
  const [loading,setLoading] = useState(false)

  const open =()=>{
    switch (popup) {
      case "close":
         setPopup("open")  ;
         if(icon == <i className="fa-solid fa-plus"></i>){
             setIcon(<i className="fa-solid fa-minus"></i>)
         } else { 
           setIcon(<i className="fa-solid fa-minus"></i>)
         }
         return ;
         case "open" :
           setPopup("close") ;
           if(icon == <i className="fa-solid fa-minus"></i>){
            setIcon(<i className="fa-solid fa-plus"></i>)
        } else { 
          setIcon(<i className="fa-solid fa-plus"></i>)
        }
          
        return ;
        default :
        setPopup("close")
    }
  }

 const open2 =()=>{
  if(popup2 === false || icon2 === <i className="fa-solid fa-plus"></i>){
    setPopup2(true)
    setIcon2(<i className="fa-solid fa-minus"></i>)
  } else {
    setPopup2(false)
    setIcon2(<i className="fa-solid fa-plus"></i>)
  }
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
 <section className="projectDetails">
 <section className="projectSection">
  <div className="d-flex justify-content-center align-o">
    <div className="projectTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="projectTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.project.projectdetails.projectdetailstxt}</a></h1></div>
  </div>
</section>
      <div className="container-fluid mt-5 my-5">
        <h4 className='text-center mb-5 projecth4'>
        {ctx.lang.project.projectdetails.projectdetails25}</h4>
    <div className="row">
      <div className="col-12" data-aos="fade-in">
<div className="popupImg ">
<img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/project04.jpg" alt="" className="img-fluid"  width="100%"/>
<div className="popupBox">
<div className="popupIconBox" >

  <i  onClick={()=>open()}>{icon}</i>

</div>
<ProjectDetailsPopup somepop={popup} />
</div>
<div className="popupBox2">

<div className="popupIconBox2">
<i  onClick={open2}>{icon2}</i>
</div>
<ProjectDetailsPopup2 somepop2 = {popup2}/>
</div>
</div>
      </div>
    </div>
   </div>
   
    <div className="container ">
    <h4 className='projectDetailsh4'> {ctx.lang.project.projectTitle[projectItems.id]}</h4>
        <div className="d-flex ">
          <div className="projecth3 ">{ctx.lang.project.projectdetails.Homepage}</div>
          <span className='ms-2 me-2 projectSpan text-secondary' >/</span>
          <div className="projecth3 ms-1 me-1 ">{ctx.lang.project.projectdetails.projectName}</div>
          <span className='me-2 ms-1  projectSpan text-secondary'>/</span>
          <div className="projecth3 ">{ctx.lang.project.projectTitle[projectItems.id]}</div>
        </div>
      <div className="row g-3 my-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="projectDetailsImg" data-aos="fade-in">
       <img src={projectItems.imgDetails["imgDetailsImg1"]} alt="" className='img-fluid' />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="projectDetailsImg" data-aos="fade-in">
       <img src={projectItems.imgDetails["imgDetailsImg2"]} alt="" className='img-fluid' />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="projectDetailsImg" data-aos="fade-in">
       <img src={projectItems.imgDetails["imgDetailsImg3"]} alt="" className='img-fluid' />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="projectDetailsImg" data-aos="fade-in">
       <img src={projectItems.imgDetails["imgDetailsImg4"]} alt="" className='img-fluid' />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="projectDetailsImg" data-aos="fade-in">
       <img src={projectItems.imgDetails["imgDetailsImg5"]} alt="" className='img-fluid' />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="projectDetailsImg" data-aos="fade-in">
       <img src={projectItems.imgDetails["imgDetailsImg6"]} alt="" className='img-fluid' />
          </div>
        </div>
        
      </div>
    <div className="row g-3 my-3">
   
      <div className="col-12 col-sm-9 col-md-9 col-lg-9 ">
        <div className="projectTextBox" data-aos="fade-in">
          <p className='ms-1 projectTextP' >{ctx.lang.project.projectdetails.projectdesc}</p>
      <div className="projectTextPbox" data-aos="fade-in">
      <p className='ms-2 projectTextP'> "{ctx.lang.project.projectdetails.projectdesc2} "</p>
      </div>
        </div>
        <div className="row mt-5">
        <hr className="hr" /> 
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 "data-aos="fade-in">
        <div className="projectTextBox3">
          <h5 className="projecth5" >
          The Challenger
          </h5>
          <p className='projectP'>Excepteur sint occaecat cupidatat non proident, <br /> sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.</p>
      <p className='projectP2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 "data-aos="fade-in">
      <div className="projectTextBox3">
          <h5 className="projecth5">
          {ctx.lang.project.projectdetails.result}
          </h5>
      <p className='projectP2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <p className='projectP2'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt</p>
        </div>
      </div>
        </div>
      </div>
      <div className="col-12 col-sm-3 col-md-3 col-lg-3 " data-aos="fade-in">
        <div className="projectTextBox2">
       <h6 className='projectTexth4 ms-3'> {ctx.lang.project.projectdetails.date} : <span className='text-secondary'>{ctx.lang.project.projectdetails.june} 10,2022</span></h6>
       <h6 className='projectTexth4 ms-3'> Layout  <span className='text-secondary'> 3 {ctx.lang.project.projectdetails.layout}</span></h6>
       <h6 className='projectTexth4 ms-3'> {ctx.lang.project.projectdetails.design} :<span className='text-secondary'> #1548</span></h6>
       <h6 className='projectTexth4 ms-3'> {ctx.lang.project.projectdetails.created} :<span className='text-secondary'>  john portman</span></h6>
    <div className="d-flex flex-wrap">
      <div className="projectTextIcon">
        <h6 className='ms-3 projectH62'>{ctx.lang.project.projectdetails.share}:</h6>
      </div>
      <div className="projectTextIcon">
      <i className="fa-brands fa-facebook-f ms-2 " title='Share on Facebook'></i>
      <i className="fa-brands fa-linkedin-in ms-2"title='Share on LinkedIn'></i>
      <i className="fa-brands fa-pinterest-p ms-2"title='Share on Pinterest'></i>
      <i className="fa-brands fa-twitter ms-2"title='Share on Twitter'></i>
      <i className="fa-solid fa-envelope ms-2"title='Email to a friend'></i>
      </div>
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

export default ProjectDetails