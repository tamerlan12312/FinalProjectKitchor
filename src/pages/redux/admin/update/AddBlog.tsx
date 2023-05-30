import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BlogForm from '../../../../components/redux/BlogForm'
import { addBlog } from '../../../../actions/blogActions'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../../../../components/langContext'
const AddBlog = (props:any) => {
  const ctx = useContext(LangContext)
  const navigate = useNavigate()
  const {t} = useTranslation()
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
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
 <section className="addBlog">
  <section className="yourBlog2">
<div className="container-fluid">
    <div className="row">
        <div className="col-12">
        <div className="d-flex justify-content-center ">
  <div className="yourBlogTextFirst mt-5"><h1 className='text-center'><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.yourblog.add}<br /></Link></h1></div>
</div>
  </div>
        <div className="col-12">
<h5 className='text-center yourh5 animate__animated animate__fadeIn'>{ctx.lang.yourblog.adddesc}</h5>    
        </div>
    </div>
</div>
</section>
  </section>  
<div className="addBlog2">
<BlogForm onFormSubmit={(fd:any)=>{
 props.dispatch(addBlog(fd)) 
 navigate("/dashboard")

}}/>
</div>
  </>
  }
 
  </>
  )
}

export default connect()(AddBlog)