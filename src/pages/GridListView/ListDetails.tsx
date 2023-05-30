import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import gridData from '../../data/gridviewdata'
import { useTranslation } from 'react-i18next'
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../../components/langContext'
import { Helmet } from 'react-helmet'
const ListDetails = () => {
  const ctx = useContext(LangContext)
    const {url} = useParams()
    const detailsitem:any = gridData.find(p=>p.id == url)
    const {t} = useTranslation()
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },1500);
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
  {/* <section className="listDetailsSection ">
   <div className="blogBox">
          <div className="container">
          <div className="blogBox2">
          <Link to="/">{ctx.lang.virtualtours.home}</Link>
          </div>
          <a href="#react" className='listdetailsa'>{ctx.lang.blog[detailsitem.id]}</a>
          </div>
        </div>
   </section> */}
   <div className="listDetailsSection">

   <section className="blogSection">
  <div className="d-flex justify-content-center align-o">
    <div className="blogTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn listA'>{ctx.lang.virtualtours.home}</Link>        <span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="blogTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn listA'>{ctx.lang.blog.blogtxt}</a></h1></div>
  </div>
</section>
   </div>

   
   <section className="listDetailsText">
<div className="container">
  <div className="row">
    <div className="col-lg-12">
   <div className="listBoxText mt-5">
   <h3 className="listDetailsh3 text-center">{ctx.lang.blog[detailsitem.id]}</h3>
   <div className="d-flex justify-content-center">
   <i className="fa-solid fa-calendar-days mt-1 me-2"></i>
   <span className='listdetailsspan text-secondary'>{ctx.lang.blog.june} 24,2022</span>
   <span className='listdetailsspan text-secondary ms-4'> By Admin</span>
   </div>
   </div>
    </div>
<div className="col-12 col-sm-12 col-md-12 col-lg-9">
<div className="listBoxText2">
<img src={detailsitem.img} alt="" className="img-fluid mt-5" width="100%" />
<div className="row">
  <div className="col-12 col-sm-12 col-md-10 ">
<div className="listText3 mt-3">
<p className='listText3p'>{ctx.lang.blog[detailsitem.id]}</p>
<div className="d-flex ms-1">
   <i className="fa-solid fa-calendar-days mt-1 me-2"></i>
   <span className='listdetailsspan text-secondary'>{ctx.lang.blog.june} 24,2022</span>
   <span className='listdetailsspan text-secondary ms-4'> By Admin</span>
   </div>
</div>
  <p className='listText3p2 my-4'>{ctx.lang.blog.blogdesc1}</p>
  <p className='ms-4 listText3p3'>“ {ctx.lang.blog.blogdesc2}"</p>
  <p className='listText3p2 my-4'>{ctx.lang.blog.blogdesc3}</p>
  <h3 className="listTexth3">{ctx.lang.blog.blogdesc4}</h3>
  <p className='listText3p2 my-4'>{ctx.lang.blog.blogdesc5}</p>
  <div className="row g-3">
    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
      <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/demo-content01.jpg" alt="" className="img-fluid" width="100%" />
    </div>
    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
      <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/demo-content02.jpg" alt="" className="img-fluid" width="100%" />
    </div>
  </div>
  <p className='listText3p2 my-4'>{ctx.lang.blog.blogdesc6}</p>
  <div className="row">
   <div className="d-flex  mb-3">
    <a href="react" className='me-2 tagA2'>{ctx.lang.blog.bloga1},</a>
    <a href="react" className='me-2 tagA2'>{ctx.lang.blog.bloga2},</a>
    <a href="react" className='tagA2'>{ctx.lang.blog.bloga3}</a>
   </div>
  </div>
   <hr className="hr" />
   <h3 className="listTexth3 my-4">3 {ctx.lang.blog.comments}</h3>
<div className="row my-4">
  <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
  <div className="d-flex mt-2">
  <div className="commentImg">
      <img src="https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g" alt="" className="img-fluid" style={{"borderRadius":"50%"}} />
    </div>
    <div className="commentText ms-2">
     <span className="commentSpan text-secondary" style={{"fontSize":"small"}} >{ctx.lang.blog.june} 4,2022</span>
   <br />
    <h5 className='commenth6'>Felix Design</h5>
    <br />
    </div>
  </div>
    <p className='commentp '>" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "</p>
    <i className="fa-solid fa-reply-all"></i>
    <span className='reply ms-2'>{ctx.lang.blog.reply}</span>
  <div className="row ms-3">
  <div className="col-12 col-sm-12 col-md-6 col-lg-12 ">
  <hr className="hr" />
  <div className="d-flex mt-2">
  <div className="commentImg">
      <img src="https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g" alt="" className="img-fluid" style={{"borderRadius":"50%"}} />
    </div>
    <div className="commentText ms-2">
     <span className="commentSpan text-secondary" style={{"fontSize":"small"}} >{ctx.lang.blog.june} 4,2022</span>
   <br />
    <h5 className='commenth6'>Mike Newton</h5>
    <br />
    </div>
  </div>
    <p className='commentp '>" Cras maximus ultricies volutpat. Praesent ut enim non enim vulputate fringilla. "</p>
    <i className="fa-solid fa-reply-all"></i>
    <span className='reply ms-2'>{ctx.lang.blog.reply}</span>
  
  </div>
  </div>
  <hr className="hr" />
  </div>
   <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
  <div className="d-flex mt-2">
  <div className="commentImg">
      <img src="https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g" alt="" className="img-fluid" style={{"borderRadius":"50%"}} />
    </div>
    <div className="commentText ms-2">
     <span className="commentSpan text-secondary" style={{"fontSize":"small"}} >{ctx.lang.blog.june} 4,2022</span>
   <br />
    <h5 className='commenth6'>John Snow</h5>
    <br />
    </div>
  </div>
    <p className='commentp '>" Cras maximus ultricies volutpat. Praesent ut enim non enim vulputate fringilla. "</p>
    <i className="fa-solid fa-reply-all"></i>
    <span className='reply ms-2'>{ctx.lang.blog.reply}</span>
  </div>
</div>
  </div>
</div>
</div>
  
</div>



<div className="col-12 col-sm-3 col-md-3 col-lg-3">
  <div className="listImgBox">
    <div className="listImg1">
      <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/bg_banner_block.jpg" alt="" className="img mt-5" width="125%" />
    <div className="listImg2">
      <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/logo-block.png" alt="" />
    <h5 className='listImgText ms-1'>{ctx.lang.blog.contact}</h5>
    <h6 className="listImgTexth6">
    +1 800 13 456 789
    </h6>
    <a href="#react" className='listImgA ms-1'> {ctx.lang.blog.started} </a>
    </div>
    </div>
  </div>
  <div className="row mt-4 mb-3">
   
    <h4 className="tagsh4">{ctx.lang.blog.tag}</h4>
    <hr className="hr ms-3"  id='hr2'/>
 <div className="d-flex">
  <div className="listTag">
    <a href="" className="listTagA">{ctx.lang.blog.tag1}</a>
  </div>
  <div className="listTag">
    <a href="" className="listTagA">{ctx.lang.blog.tag2}</a>
  </div>
  <div className="listTag">
    <a href="" className="listTagA">{ctx.lang.blog.tag3}</a>
  </div>
 </div>
    
  </div>
  <div className="row ">
 <div className="d-flex">
  <div className="listTag">
    <a href="" className="listTagA">{ctx.lang.blog.tag4}</a>
  </div>
  <div className="listTag">
    <a href="" className="listTagA"> {ctx.lang.blog.tag5}</a>
  </div>
 </div>
  </div>
  <div className="row mt-3 ">
 <div className="d-flex">
  <div className="listTag">
    <a href="" className="listTagA"> {ctx.lang.blog.tag6}</a>
  </div>
 </div>
  </div>
</div>
  </div>
    <form className='my-2'>
     <h2 className="formh2">
   {ctx.lang.blog.formtxt}
     </h2>
     <p className='formp my-3'>
     {ctx.lang.blog.formtxt1} <span className='formspan'>*</span>
     </p>
    </form>
</div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 ">
        <div className="mb-3">
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={ctx.lang.contact.contacttxt14}/>
</div>

        </div>
        <div className="col-12 col-sm-12 col-md-4 ">
      <div className="mb-3">
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder={ctx.lang.contact.contacttxt15}/>
</div>

        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 my-3">
      <div className="form-floating">
  <textarea className="form-control" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
  <label htmlFor="floatingTextarea2">{ctx.lang.blog.comments}</label>
</div>


        <div className="mb-3 form-check mt-4">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" htmlFor="exampleCheck1">{ctx.lang.blog.formtxt2}</label>
</div>
        
        <div className="formAbox mt-5 mb-3">
        <a href="#react" className='formA '>{ctx.lang.blog.formtxt3} <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
        </div>

      </div>
    </div>
   </section>
  </>
}

 </>
  )
}

export default ListDetails