import { useEffect,useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext'
import { Helmet } from 'react-helmet'
const Team = () => {
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
    <title>{ctx.lang.helmet.team}</title>
  </Helmet>
 <section className="teamSection">
  <div className="d-flex justify-content-center align-o">
    <div className="aboutTextFirst2 mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="aboutTextFirst2 mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.team.teamtxt1}</a></h1></div>
  </div>
</section>
    
    <div className="teamText my-5">
      <div className="container">
  
            <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center flex-wrap ">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/Team_image_01.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 ">
           <div className="ourText2">
           <h6 className="teamh6 mt-5 ms-5">
           {ctx.lang.team.teamtxt2}
            </h6>
            <h3 className='ms-5 ourh3'>{ctx.lang.team.teamtxt3} <br /> {ctx.lang.team.teamtxt4}</h3>
            <br />
            <p className='ms-5 ourP2'>{ctx.lang.team.teamtxt5} <br /> {ctx.lang.team.teamtxt6}</p>
          <p className="ms-5 ourP3">{ctx.lang.team.teamtxt7} <br /> {ctx.lang.team.teamtxt8} <br />{ctx.lang.team.teamtxt9}<br /> {ctx.lang.team.teamtxt10} <br /> {ctx.lang.team.teamtxt11}<br />{ctx.lang.team.teamtxt12}</p>
         <div className="d-flex">
          <div className="signatureImg me-5">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/h3_Andrew.png" alt="" className="img-fluid ms-5" />
          </div>
          <div className="signatureText">
            <h4 className='signatureh4 mt-2 ms-5'>ANDREW CUNNINGHAM <br /> <span className='signaturespan text-secodnary'>{ctx.lang.team.teamtxt13}</span></h4>
          </div>
         </div>
          </div>
           </div>
        </div>
        <h6 className="teamh6 text-center mt-5" data-aos="fade-in">{ctx.lang.team.teamtitle1}</h6>
            <h1 className="teamh1 text-center" data-aos="fade-in">{ctx.lang.team.teamtitle2} <br /> {ctx.lang.team.teamtitle3}</h1>
        <div className="row mt-5 g-3">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
           <div className="teamImg" data-aos="fade-in">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_01.jpg" alt="" className="img-fluid" width="100%" />
            <div className="overlayImg">
      <div className="overlayIcon">
    <div className="d-flex justify-content-center align-items-center">
    <i className="fa-brands fa-facebook" title="Facebook"></i>
    <i className="fa-brands fa-twitter" title='Twitter'></i>
    <i className="fa-brands fa-instagram" title='Instagram'></i>
    </div>
      </div>
            </div>
           </div>
            <h6 className='text-center mt-3 teamNameh6'>John Portman 
            <br /> <span className='teamNamespan text-secondary'>{ctx.lang.team.design}</span></h6>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
           <div className="teamImg" data-aos="fade-in">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_02.jpg" alt="" className="img-fluid" width="100%" />
            <div className="overlayImg">
               <div className="overlayIcon">
    <div className="d-flex justify-content-center align-items-center">
    <i className="fa-brands fa-facebook" title="Facebook"></i>
    <i className="fa-brands fa-twitter" title='Twitter'></i>
    <i className="fa-brands fa-instagram" title='Instagram'></i>
    </div>
      </div>
             </div>
           </div>
            <h6 className='text-center mt-3  teamNameh6 '>Alison Clutcher 
            <br /> <span className='teamNamespan text-secondary'>{ctx.lang.team.photograph}</span></h6>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
           <div className="teamImg" data-aos="fade-in">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_03.jpg" alt="" className="img-fluid" width="100%" />
            <div className="overlayImg">
               <div className="overlayIcon">
    <div className="d-flex justify-content-center align-items-center">
    <i className="fa-brands fa-facebook" title="Facebook"></i>
    <i className="fa-brands fa-twitter" title='Twitter'></i>
    <i className="fa-brands fa-instagram" title='Instagram'></i>
    </div>
      </div>
             </div>
           </div>
            <h6 className='text-center mt-3 teamNameh6 '>Russell Otten
            <br /> <span className='teamNamespan text-secondary'>{ctx.lang.team.meneger}</span></h6>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
           <div className="teamImg" data-aos="fade-in">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_04.jpg" alt="" className="img-fluid" width="100%" />
            <div className="overlayImg">
 <div className="overlayIcon">
    <div className="d-flex justify-content-center align-items-center">
    <i className="fa-brands fa-facebook" title="Facebook"></i>
    <i className="fa-brands fa-twitter" title='Twitter'></i>
    <i className="fa-brands fa-instagram" title='Instagram'></i>
    </div>
      </div>

            
            </div>
           </div>
            <h6 className='text-center mt-3 teamNameh6 '>Julie Crawford
            <br /> <span className='teamNamespan text-secondary'>{ctx.lang.team.architecture}</span></h6>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
           <div className="teamImg" data-aos="fade-in">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/teams05.jpg" alt="" className="img-fluid" width="100%" />
            <div className="overlayImg">
      <div className="overlayIcon">
    <div className="d-flex justify-content-center align-items-center">
    <i className="fa-brands fa-facebook" title="Facebook"></i>
    <i className="fa-brands fa-twitter" title='Twitter'></i>
    <i className="fa-brands fa-instagram" title='Instagram'></i>
    </div>
      </div>
            </div>
           </div>
            <h6 className='text-center mt-3 teamNameh6'>Marcus Otten 
            <br /> <span className='teamNamespan text-secondary'>{ctx.lang.team.design}</span></h6>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
           <div className="teamImg" data-aos="fade-in">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/teams06.jpg" alt="" className="img-fluid" width="100%" />
            <div className="overlayImg">
               <div className="overlayIcon">
    <div className="d-flex justify-content-center align-items-center">
    <i className="fa-brands fa-facebook" title="Facebook"></i>
    <i className="fa-brands fa-twitter" title='Twitter'></i>
    <i className="fa-brands fa-instagram" title='Instagram'></i>
    </div>
      </div>
             </div>
           </div>
            <h6 className='text-center mt-3 teamNameh6'>Lisa Otten 
            <br /> <span className='teamNamespan text-secondary'>{ctx.lang.team.partner}</span></h6>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
           <div className="teamImg" data-aos="fade-in">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/teams07.jpg" alt="" className="img-fluid" width="100%" />
            <div className="overlayImg">
               <div className="overlayIcon">
    <div className="d-flex justify-content-center align-items-center">
    <i className="fa-brands fa-facebook" title="Facebook"></i>
    <i className="fa-brands fa-twitter" title='Twitter'></i>
    <i className="fa-brands fa-instagram" title='Instagram'></i>
    </div>
      </div>
             </div>
           </div>
            <h6 className='text-center mt-3 teamNameh6 '>Jason Pogoloff
            <br /> <span className='teamNamespan text-secondary'>{ctx.lang.team.design}</span></h6>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
           <div className="teamImg" data-aos="fade-in">
            <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/teams08.jpg" alt="" className="img-fluid" width="100%" />
            <div className="overlayImg">
 <div className="overlayIcon">
    <div className="d-flex justify-content-center align-items-center">
    <i className="fa-brands fa-facebook" title="Facebook"></i>
    <i className="fa-brands fa-twitter" title='Twitter'></i>
    <i className="fa-brands fa-instagram" title='Instagram'></i>
    </div>
      </div>

            
            </div>
           </div>
            <h6 className='text-center mt-3 teamNameh6'>Mel Karlson
            <br /> <span className='teamNamespan text-secondary'>{ctx.lang.team.projectmeneger}</span></h6>
          </div>
        </div>
        
      </div>
    </div>
  </>
}
    </>

  )
}

export default Team