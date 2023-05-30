import React,{useState,useContext, useEffect} from 'react'
import DarkMode from './DarkMode'
import ScrollToTop from "react-scroll-to-top";
import {Helmet} from "react-helmet";
import { Link, NavLink } from 'react-router-dom';
import {useCart} from "react-use-cart" ;
import { UserContext } from '../pages/UserContext';
import LangContext from './langContext';
import { useWishlist } from 'react-use-wishlist';

function Header(): JSX.Element {
  const[mode,setMode] = useState<any>(localStorage.getItem('mode'))
   const [icon2,setIcon2] = useState<any>(localStorage.getItem('icon2'))
  const ctx = useContext(LangContext)
  const [icon, setIcon] = useState(false);
  const iconChange = () => {
    setIcon(!icon);
  };

useEffect(()=>{
 
  if(localStorage.getItem('mode')===null ){
    localStorage.setItem('mode',mode)
     document.body.className = mode
   localStorage.setItem("icon2",icon2)
    } else {
      localStorage.setItem('mode',mode)
       document.body.className = mode
       localStorage.setItem("icon2",icon2)



    }
   
     
    
},[mode])

const { totalUniqueItems} = useCart()
const { totalWishlistItems} = useWishlist()
const [users,setUsers] = useContext<any>(UserContext)
return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ctx.lang.helmet.homepage}</title>
      </Helmet>
      <header>
        <nav className='navbar navbar-expand-md fixed-top '>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            </Link>
            <button className="navbar-toggler" onClick={iconChange} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span> {icon ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars-staggered"></i>}</span>

            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link active2" aria-current="page" to="/">{ctx.lang.header.home}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/virtualtours">{ctx.lang.header.virtualtours}</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/project">{ctx.lang.header.project}</Link>
                </li>

                <li className="nav-item">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle clas" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {ctx.lang.header.pages}
                    </a>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="/about">{ctx.lang.header.about}</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/service">{ctx.lang.header.service}</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/team">{ctx.lang.header.team}</NavLink></li>
                      <li><NavLink className="dropdown-item" to="*">{ctx.lang.header.notfoundpage}</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/faqs">{ctx.lang.header.faqs}</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/ourpricing">{ctx.lang.header.pricing}</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/comingsoon">{ctx.lang.header.comingsoon}</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/yourblog">{ctx.lang.header.yourblog}</NavLink></li>
                     
                    </ul>
                  </li>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addtocart">{ctx.lang.header.shop}</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blog">{ctx.lang.header.blog}</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">{ctx.lang.header.contact}</Link>
                </li>
              </ul>
              <div className="d-flex" role="search">
              {users ? <span className='mt-1 me-2 spanedit' style={{"fontStyle":"italic","color":"orange","fontWeight":"bold"}}>Tamerlan</span> : <span></span>} 
              <Link to="/login">  {users ? <><i className="fa-solid fa-door-open me-2 mt-1" style={{ "cursor": "pointer", "fontSize": "20px" }} onClick={()=>setUsers(false)}></i></>: <><i className="fa-regular fa-circle-user user2  mt-1" title="Login" style={{ "cursor": "pointer", "fontSize": "23px" }}></i></>} </Link>
             
                <DarkMode 
                color={mode}
                setColor={setMode}
                icon={icon2}
                setIcon={setIcon2}
                 />
               
                <div className="boxIcon">
                  <Link to="/cartdetails"><i className='fa-solid fa-cart-arrow-down  mt-1 me-3' title='Cart' style={{ "cursor": "pointer", "fontSize": "20px" }}> </i></Link>
                <Link to="/wishlist"><i className='fa-regular fa-heart  mt-1 me-3' title='Cart' style={{ "cursor": "pointer", "fontSize": "20px"}}> </i></Link>
                  <div className="boxTotal">{ totalUniqueItems}</div>
                  <div className="boxTotal2">{ totalWishlistItems}</div>
                </div>
              </div>
              <button onClick={ctx.changeLang} className="btn langBtn btn-outline-warning">{ctx.selectedLanguage}</button>


            </div>
          </div>
        </nav>
      </header>

      <ScrollToTop smooth className='scrolToTop'  top={115}  component={<i className="fa-solid fa-angle-up"></i>} />
    </> 
  );
}

export default Header