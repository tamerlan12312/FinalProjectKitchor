import React,{useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
interface popupType {
    somepop : string
}
const ProjectDetailsPopup = ({somepop}:popupType) => {
  useEffect(()=>{
    AOS.init({duration:700})
  },[])
  return (
    <>
    {
        somepop === "open" 
        ?
        <div className="container mt-1" data-aos="fade-in">
        <div className="row">
           <div className="col-12 col-sm-12">
            <div className="popupImgBox">
              <div className="popupImgOverlay">

               <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/product-10-1-300x300.jpg" alt="" className='img-thumbnail'/>
              </div>
             <p className='ms-2 my-3 popupP'>Practical Bronze Bottle <br /> <span className="popupSpan">$691.35</span></p>
            
            </div>
           </div>
        </div>
      
       </div> 
        :
          ""
    }
    </>
  )
}

export default ProjectDetailsPopup