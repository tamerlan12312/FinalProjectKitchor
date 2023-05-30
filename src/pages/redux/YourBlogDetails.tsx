import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LangContext from '../../components/langContext'

const YourBlogDetails = (props:any) => {
    const {id} = useParams()
    const detailsItem = props.pvalue.find((p:any)=>p.id == id)
    const {t} = useTranslation()
    const ctx = useContext(LangContext)
  return (
   <>
  <div className="yourBlogDetails">
  <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-12 col-sm-12 col-lg-6  text-center">
      <img src={detailsItem.img} className="img-fluid" alt="Bootstrap Themes" width="100%" loading="lazy" />
    </div>
    <div className=" col-sm-12 col-lg-6">
      <h1 className="display-5 text-body-emphasis lh-1 mb-3 descp">{detailsItem.title}</h1>
      <p className="lead">{detailsItem.desc}</p>
      <p className="lead">{ctx.lang.blog.blogdesc3}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <Link to="/yourblog">  <button type="button" className="btn2 btn-lg px-4 me-md-2">RETURN TO YOUR BLOG <i className="fa-solid fa-right-from-bracket ms-2"></i></button></Link>
      </div>
    </div>
  </div>
</div>
  </div>

   
   </>
  )
}

const mapStateToProps=(state:any)=>{
      return {
        pvalue:state
      }
}

export default connect(mapStateToProps)(YourBlogDetails)