import React,{useRef,useContext, useState, useEffect} from 'react' ;
import { Link } from 'react-router-dom' ;
import swal from "sweetalert" ;
import {useNavigate,useLocation} from "react-router-dom";
import { UserContext } from '../../UserContext';
import LangContext from '../../../components/langContext' ;
import PulseLoader from "react-spinners/PulseLoader";
interface userType {
    email:string,
    pass:string
}

const userData:userType ={
    email:"admin@gmail.com",
    pass:"admin"
}


const Login = () => {

  
    const [loading,setLoading] = useState(false)
    const ctx = useContext(LangContext)
    const [type,setType] = useState("password")
    const [icon,setIcon] = useState("fa-regular fa-eye")
    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputPassRef = useRef<HTMLInputElement>(null)
    const [users,setUsers] = useContext<any>(UserContext)
    const navigate = useNavigate()
    const formSubmit =(e: { preventDefault: () => void })=>{
        e.preventDefault();
     if(!inputEmailRef.current?.value || !inputPassRef.current?.value){
        swal("Please fill input", "Enter email and password!", "warning");
     } else {
        if( inputEmailRef.current?.value === userData.email && inputPassRef.current?.value === userData.pass){
            swal("Completed successfully", "", "success");
            navigate("/dashboard")
            setUsers(true)
        } 
        else {
            swal("Oops! Email or password is wrong", "Check the correctness of the Email or Password", "error");
        }
     }
        
    }
    const iconChange =()=>{
      if(type == "password" && icon == "fa-regular fa-eye" ){
        setType("text")
        setIcon("fa-regular fa-eye-slash")
      } else {
        setType("password")
        setIcon("fa-regular fa-eye")
      }
      
    }

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
  <section className="login">
  <section className="yourBlog2">
<div className="container-fluid">
    <div className="row">
        <div className="col-12">
        <div className="d-flex justify-content-center ">
  <div className="yourBlogTextFirst mt-5"><h1 className='text-center'><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.login.login}<br /></Link></h1></div>
</div>
        </div>
    </div>
</div>
</section>
  </section>
  <div className="login2">

    <div className="container my-4">
  <div className="row">
 <div className="d-flex align-items-center justify-content-center flex-column">
 <div className="col-12 col-sm-6 col-md-5">



   <form onSubmit={formSubmit}>
   <div className="d-flex justify-content-center mt-5 mb-4">
      <div className="kitchorImg"></div>
    </div>
   <h5 className="text-center logintxt">{ctx.lang.login.logintxt}</h5>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label logintxt">{ctx.lang.login.email} :</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={inputEmailRef} placeholder={ctx.lang.login.email3}/>
    <div id="emailHelp" className="form-text">{ctx.lang.login.email2}</div>
  </div>
  <div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label logintxt">{ctx.lang.login.pass} :</label>
<div className="input-group mb-3">
  <input type={type} className="form-control"  aria-describedby="button-addon2" ref={inputPassRef} placeholder={ctx.lang.login.pass3} />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={iconChange}><i className={icon}></i></button>
</div>
  <div id="emailHelp" className="form-text" >{ctx.lang.login.pass2}</div>
  </div>

  <button type="submit" className="formBtn">{ctx.lang.login.sign}</button>
</form>




    </div>
 </div>
  </div>
 </div>
  </div>

  </>
}
  </>
  )
}

export default Login