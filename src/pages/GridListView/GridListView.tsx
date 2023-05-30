import React, { useState,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import GridView from './GridView'
import ListView from './ListView'
import { useTranslation } from 'react-i18next'
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../../components/langContext'
import { Helmet } from 'react-helmet'

const GridListView = () => {
const ctx = useContext(LangContext)
const [view,setView] = useState(false)
const[grid,setGrid] = useState(false)
const[grid2,setGrid2] = useState(false)
const [list,setList] = useState(false)
const [list2,setList2] = useState(false)
const [loading,setLoading] = useState(false)


  const {t} = useTranslation()

  const gridColor =()=>{
    setView(true)
    setGrid( grid ? true : false)
    
  }
  const gridColor2 =()=>{
    setView(true)
    setGrid2( grid2 ? true : false)
   
  }


  const listColor =()=>{
    setView(false)
    setList( list ? true : false)
 
  }
  const listColor2 =()=>{
    setView(false)
    setList( list2 ? false : true)

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
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ctx.lang.helmet.blog}</title>
  </Helmet>
<section className="blogSection">
  <div className="d-flex justify-content-center align-o">
    <div className="blogTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="blogTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.blog.blogTitle}</a></h1></div>
  </div>
</section>


 {
  view === true ?
  <div className="container my-5" >
  <div className="d-flex justify-content-end">
    <div className="gridIcon mb-3">

    <i className={`fa-solid fa-grip-vertical me-2 ${grid ? "black2" : "orange2" } `} title="Grid View" onClick={gridColor}></i>
    </div>
    <div className="gridIcon">
    <i className={`fa-solid fa-list ${list ? "black" : "orange" }`} title='List View'onClick={listColor}></i>
    </div>
  </div>
<GridView />
</div>
:

  <div className="container my-5">
      <div className="d-flex justify-content-end">
    <div className="gridIcon mb-3">
    <i className={`fa-solid fa-grip-vertical me-2 ${grid2 ? "orange2" : "black2" }  `} title="Grid View" onClick={gridColor2}></i>
    </div>
    <div className="gridIcon">
    <i className={`fa-solid fa-list ${list2 ? "orange" : "black" }`} title='List View'onClick={listColor2}></i>
    </div>
  </div>
  <ListView/>

  </div>
 }


  </>
}
 
    </>
  )
}

export default GridListView