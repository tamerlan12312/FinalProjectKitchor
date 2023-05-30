import React, { useEffect } from 'react'
interface propsType {
    image:any,
    title:string,
    title1:string
}

const Section7Data = ({image,title,title1}:propsType) => {

  return (
    <>
         <div className="col-12 col-sm-6 col-md-4 col-lg-4">
           <div className="projectImg" >
            <img src={image} alt="" className='img-fluid' />
            <div className="projectImgOverlay">
               <div className="projectOverlayText">
                <h6 className='text-center'>{title}</h6>
              <p className='text-center'>{title1}</p>
               </div>
            </div>
           </div>
        </div>
    </>
  )
}

export default Section7Data