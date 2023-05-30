import React,{useEffect} from 'react'

import AOS from "aos"
import "aos/dist/aos.css"
interface popup2Type {
    somepop2:boolean
}
const ProjectDetailsPopup2 = ({somepop2}:popup2Type) => {
  useEffect(()=>{
    AOS.init({duration:700})
  },[])
  return (
   <>
    {
        somepop2 === true ?
       <div className="container mt-1" data-aos="fade-in">
        <div className="row">
        <div className="col-12 col-sm-12">
            <div className="popupImgBox">
              <div className="popupImgOverlay">
              <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/product-13-1-300x300.jpg" alt="" className='img-thumbnail'/>
              </div>
             <p className='ms-2 my-3 popupP'>Gorgeous Linen Computer <br /> <span className="popupSpan">$919.59</span></p>
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

export default ProjectDetailsPopup2