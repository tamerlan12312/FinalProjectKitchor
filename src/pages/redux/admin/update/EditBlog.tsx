import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BlogForm from '../../../../components/redux/BlogForm'
import { editBlog, removeBlog } from '.././../../../actions/blogActions'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../../../../components/langContext'
const EditBlog = (props:any) => {
  const ctx = useContext(LangContext)
  const navigate = useNavigate()
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
   <section className="editBlog">
    <section className="yourBlog2">
<div className="container-fluid">
    <div className="row">
        <div className="col-12">
        <div className="d-flex justify-content-center ">
  <div className="yourBlogTextFirst mt-5"><h1 className='text-center'><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.yourblog.edit2}<br /></Link></h1></div>
</div>
        </div>
        <div className="col-12">
<h5 className='text-center yourh5 animate__animated animate__fadeIn'>{ctx.lang.yourblog.editdesc}.</h5>

       
        </div>
    </div>
</div>
</section>
    </section>

    <div className="editBlog2">
    <BlogForm editblog={props.pvalue}
     onFormSubmit={(update:any)=>{
      props.dispatch(editBlog(props.pvalue.id,update))
      navigate('/dashboard')
    }}
    />
 
   </div>
   <div className="d-flex justify-content-center mb-5" style={{"marginLeft":"auto","marginTop":"-30px"}}>
   <button className='removeBtn' onClick={()=>{
         props.dispatch(removeBlog({id:props.pvalue.id}))
         navigate('/dashboard')
    }}>{ctx.lang.delete.deletetxt}</button>
    </div>
    </>
    }
 
    </>
  )
}

const MapStateToProps=(state:any)=>{

  
  const link = window.location.pathname;
  const mainpath = link.slice(6,99);

  return {
    pvalue:state.find((b:any)=>b.id === mainpath)
  }
}

export default connect(MapStateToProps)(EditBlog)