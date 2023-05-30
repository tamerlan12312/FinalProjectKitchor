import React,{useState,useEffect,useContext} from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext';
const NotFoundPage = () => {
  const ctx = useContext(LangContext)
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
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ctx.lang.helmet.notfound}</title>
  </Helmet>
    <section className="notFoundPage">
    <div className="d-flex justify-content-center">
      <div className="notfoundtext mt-5"><h1 className='animate__animated animate__fadeIn'>404</h1></div>
    </div>
            <h4 className='text-center ourh4 animate__animated animate__fadeIn'>{ctx.lang.notfoundpage.notfoundtxt1} :(</h4>
             <h6 className='text-center ourh6 animate__animated animate__fadeIn'>{ctx.lang.notfoundpage.notfoundtxt2} <br /> {ctx.lang.notfoundpage.notfoundtxt3}</h6>    
        <div className="notFoundBox text-center">   
            <Link to="/" className='link animate__animated animate__fadeIn'>{ctx.lang.notfoundpage.notfoundtxt4} <i className="fa-solid fa-right-to-bracket ms-2"></i></Link>
        </div>
  </section>
  </>
  }
 
  </>
)
}

export default NotFoundPage