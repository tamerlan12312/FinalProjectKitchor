import React,{useContext,useState,useEffect} from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import {connect} from "react-redux"
import LangContext from '../../../components/langContext'
import PulseLoader from "react-spinners/PulseLoader";
import { UserContext } from '../../UserContext';
const DashBoard = (props:any) => {
  // const [users,setUsers] = useContext<any>(UserContext)
  const ctx = useContext(LangContext)
  const [loading,setLoading] = useState(false)
  // const location = useLocation()
  // console.log(location);
  
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
<section className="dashboard">

<section className="yourBlog2">
<div className="container-fluid">
    <div className="row">
        <div className="col-12">
        <div className="d-flex justify-content-center ">
  <div className="yourBlogTextFirst mt-5"><h1 className='text-center'><Link to="/yourblog" className='animate__animated animate__fadeIn'>{ctx.lang.yourblog.dashboard}<br /></Link></h1></div>
</div>
        </div>
    </div>
</div>
</section>
<div className="d-flex justify-content-center my-5">
<div className="kitchorImg "></div>
</div>
<table className="table table-hover" style={{"cursor":"pointer"}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col" className='tableTitle'>{ctx.lang.yourblog.photo}</th>
      <th scope="col" className='tableTitle'>{ctx.lang.yourblog.title}</th>
      <th scope="col" className='tableTitle'>{ctx.lang.yourblog.desc}</th>
      <th scope="col" className='tableTitle'>{ctx.lang.yourblog.edit}</th>
    </tr>
  </thead>
  <tbody>
   {
    props.pvalue.map((fd:any,i:number)=>(
        <tr key={fd.i}>
        <th scope="row" className='tableTitle'>{i+1}</th>
        <td><img src={fd.img} alt="" className="img-fluid" width={70} /></td>
        <td className='tableTitle'>{fd.title}</td>
        <td className='tableTitle'>{fd.desc}</td>
        <td><Link to={`/edit/${fd.id}`}><button className="btn btn-warning">{ctx.lang.yourblog.edit}</button></Link></td>
      </tr>
    ))
   }
  </tbody>
</table>
   <div className="d-flex justify-content-end me-4 "><Link to="/addblog"><button className="addBlogBtn mt-3 mb-4">{ctx.lang.yourblog.add}</button></Link></div>
</section>
{/* <Navigate to="/login"  state={{ prevUrl:location.pathname}}/> */}
  </>
}


{/* {
  users ? <Navigate to="/dashboard" state={{prevUrl:location.pathname}}/> :<Navigate to="/login" state={{prevUrl:location.pathname}}/>
} */}
</>
  )
}

const mapStateToProps=(state:any)=>{
    return {
        pvalue:state
    }
}

export default connect(mapStateToProps)(DashBoard)