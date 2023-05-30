import React, { useState,useContext } from 'react'
import swal from "sweetalert" ;
import LangContext from '../langContext';

const BlogForm = ({onFormSubmit,editblog}:any) => {
  const ctx = useContext(LangContext)
  const [formImg,setFormImg] = useState(editblog     ? editblog.img : "") 
  const [formTitle,setFormTitle] = useState(editblog ? editblog.title : "")
  const [formDesc,setFormDesc] = useState(editblog   ? editblog.desc : "")


  const formSubmit =(e: { preventDefault: () => void })=>{
    e.preventDefault();
    if(!formImg || !formTitle || !formDesc){
      swal("Please fill input","Please include image, title and information !", "info");
    } else (
      onFormSubmit({
        img:formImg,
        title:formTitle,
        desc:formDesc,
      })
    )
    
  }
  return (
 <>
 
<section className="blogForm">
<div className="container">
  <div className="row">
 <div className="d-flex align-items-center justify-content-center flex-column">
 <div className="col-12 col-sm-6 col-md-5">


   <form onSubmit={formSubmit}>
    <div className="d-flex justify-content-center mt-5 mb-4">
      <div className="kitchorImg"></div>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label blogFormlbl"> {ctx.lang.yourblog.photo} (url):</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e:any)=>{setFormImg(e.target.value)}} value={formImg} />
    <div id="emailHelp" className="form-text">{ctx.lang.yourblog.dontforget1}.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label blogFormlbl">{ctx.lang.yourblog.title}:</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e:any)=>{setFormTitle(e.target.value)}}  value={formTitle}/>
    <div id="emailHelp" className="form-text">{ctx.lang.yourblog.dontforget2}.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label blogFormlbl">{ctx.lang.yourblog.desc}:</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e:any)=>{setFormDesc(e.target.value)}}  value={formDesc} maxLength={50}/>
    <div id="emailHelp" className="form-text">{ctx.lang.yourblog.dontforget3}.</div>
  </div>
  <div className="d-flex justify-content-center">
  <button type="submit" className="formBtn mb-5">{ctx.lang.yourblog.publish}</button>
  </div>
</form>

    </div>
 </div>
  </div>
 </div>
</section>
 
 </>
  )
}

export default BlogForm