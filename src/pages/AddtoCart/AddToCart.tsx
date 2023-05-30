import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import productsData from '../../data/products'
import cartData from '../../data/addtocart'
import  {useCart} from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos"
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../../components/langContext'
import { Helmet } from 'react-helmet'
const AddToCart = () => {
  const ctx = useContext(LangContext)
    const [visible,setVisible] = useState(3)
    const [data,setData]= useState(cartData)
    const [search,setSearch]= useState("")
    const [loading,setLoading] = useState(false)
    const func =()=>{
        setVisible(fd => fd +=6)
    }
    const func2 =()=>{
    const sorted = [...data].sort((a,b)=>{
        return a.price - b.price
    })
      setData(sorted)
    }
    const func3 =()=>{
    const sorted = [...data].sort((a,b)=>{
        return b.price - a.price
    })
      setData(sorted)
    }

    const filterCart =(cartCategory:string)=>{
          const updateItems = cartData.filter((oldCategory)=>{
            return oldCategory.category == cartCategory
          })
          setData(updateItems)
    }


    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist()
    const {removeWishlistItem} = useWishlist()
    useEffect(()=>{
      AOS.init({duration:2000})
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
    <title>{ctx.lang.helmet.shop}</title>
  </Helmet>
   <section className="cartSection">
  <div className="d-flex justify-content-center align-o">
    <div className="cartTextFirst mt-5"><h1><Link to="/" className='animate__animated animate__fadeIn'>{ctx.lang.virtualtours.home}</Link><span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="cartTextFirst mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.shop.shopTitle}</a></h1></div>
  </div>
  
</section>
<div>
</div>

<section className="cartSection2">
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
        <div className="productBox">
    
             <h4 className="carth4 mb-3">{ctx.lang.shop.shoptxt1}</h4>
             <hr className="hr" />
         <div className="row g-3">
         {
            productsData.map((fd,i)=>(
                <div className="col-4 col-sm-4">
                <div className="shopImg">    
                <div className="shopImg2">
                <img src={fd.img} alt="" className="img-fluid" title={`${fd.title}`}  />
                </div>
                <Link to={`${fd.id}`} className="shoph6"><h6 className="mt-2">{fd.title}</h6></Link>
                <span className='shopSpan'>${fd.price}</span>
                </div>
                </div>
            ))
        }
        <hr className="hr" />
        <h4 className="carth4">{ctx.lang.shop.shoptxt2}</h4>
                <hr className="hr" />
           <div className="row">

        <div className="col-6 col-sm-12 col-md-12 "> <h5 className="shoph5  " onClick={()=>setData(cartData)}>{ctx.lang.shop.shoptxt3}</h5></div>
        <div className="col-4 col-sm-12 col-md-12"> <h5 className="shoph5  " onClick={()=>filterCart("Accessories")}>{ctx.lang.shop.shopctg1} (4)</h5> </div>
        <div className="col-6 col-sm-12 col-md-12 mt-1 " onClick={()=>filterCart("Clothing")}> <h5 className="shoph5 " >{ctx.lang.shop.shopctg2} (4)</h5> </div>
        <div className="col-6 col-sm-12 col-md-12 mt-1 " onClick={()=>filterCart("Hodies")}> <h5 className="shoph5 ">{ctx.lang.shop.shopctg3} (5) </h5> </div>
        <div className="col-6 col-sm-12 col-md-12  mt-1 "> <h5 className="shoph5 " onClick={()=>filterCart("Music")}>{ctx.lang.shop.shopctg4} (3)</h5> </div>
        <div className="col-6 col-sm-12 col-md-12 mt-1  "> <h5 className="shoph5 " onClick={()=>filterCart("Uncategorized")}>{ctx.lang.shop.shopctg5} (2)</h5> </div>


           </div>
             <hr className="hr" />
         </div>
         <h4 className="carth4">{ctx.lang.shop.shoptag}</h4>
        <div className="d-flex flex-wrap shopAbox">
            <a href="#react" className='shopA' title="Architechture">{ctx.lang.shop.shoptag1}</a>
            <a href="#react" className='shopA' title="Interior">{ctx.lang.shop.shoptag2}</a>
            <a href="#react" className='shopA' title="Design">{ctx.lang.shop.shoptag3}</a>
            <a href="#react" className='shopA' title="Furniture">{ctx.lang.shop.shoptag4}</a>
            <a href="#react" className='shopA' title="ecoration">{ctx.lang.shop.shoptag5}</a>
            <a href="#react" className='shopA' title="Construction">{ctx.lang.shop.shoptag6}</a>
        </div>
        </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-9  ">
       <div className="row g-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6  ">
            <form>
         <div className="input-group">
  <input type="text" className="form-control" placeholder={ctx.lang.shop.search} onChange={(e)=>setSearch(e.target.value)}/>
  <span className="input-group-text "><i className="fa-solid fa-magnifying-glass"></i></span>
</div>


            </form>
   
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
        <div className="d-flex justify-content-end flex-wrap ">
     <span style={{"fontFamily":"sans-serif","fontSize":"13px"}} className="sortSpan mt-2">{ctx.lang.shop.sort1}</span>
     <i className="fa-solid fa-arrow-up-9-1 ms-2 me-2  mt-2" onClick={func2} style={{"fontSize":"25px","color":"orange","cursor":"pointer"}}></i>
     <span style={{"fontFamily":"sans-serif","fontSize":"13px"}} className="sortSpan  mt-2">{ctx.lang.shop.sort2}</span>
     <i className="fa-solid fa-arrow-down-9-1 ms-2 mt-2 me-2" onClick={func3} style={{"fontSize":"25px","color":"orange","cursor":"pointer"}}></i>
 </div>
        </div>
       </div>
       <div className="row mt-3 g-3">
      
 
   {
    data.
    filter((fd,i)=>{
      if(search == ""){
        return fd ;
      } else if (fd.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
         return fd ;
      }  
    }).slice(0,visible).
    map((fd,i)=>(
          <div className="col-6 col-sm-12 col-md-6 col-lg-4 ">
          <div className="cartBox animate__animated animate__fadeIn" key={i}>
              <div className="cartImg">
              <img src={fd.img} alt="" className="img-fluid" width="100%" />
              <div className="cartOverlay">
                <div className="icoxBoxCart">
                <i className="fa-regular fa-heart" title="Add to wishlist" onClick={()=>{
  addWishlistItem(fd) 
  toast.success(ctx.lang.toastify.wishlist, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    })
    }}></i>
                </div>
                <div className="icoxBoxCart">
                <Link to={`/cartdesc/${fd.id}`} style={{"textDecoration":"none"}}><i className="fa-regular fa-eye" title="Quick view"></i></Link>
                </div>
                <div className="icoxBoxCart">
                <i className="fa-solid fa-repeat" title="Compare"></i>
                </div>
              </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
            <div className="cartIcon my-3">
            <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
              </div>
              <h5 className='text-center carth5'>{fd.title}</h5>
              <h5 className='text-center my-3 priceh5'>${fd.price}  <span className='text-secondary' style={{"fontSize":"16px"}}><del>{fd.price2}</del></span></h5>
             <div className="cartBox2 text-center mt-4 mb-5">


<button onClick={()=>{
  addItem(fd) 
  toast.success(ctx.lang.toastify.addtocart, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    })}} className="cartBox2a">{ctx.lang.shop.addtocart}</button>

              </div>       
          </div>
      </div>
    ))   
}

       </div>
      <div className="d-flex justify-content-center align-items-center">
      <button onClick={func} className="cartButton my-3" >{ctx.lang.shop.more} <i className="fa-solid fa-arrow-down-long ms-2 animate__animated animate__shakeY animate__slower animate__repeat-e"></i></button>

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

export default AddToCart