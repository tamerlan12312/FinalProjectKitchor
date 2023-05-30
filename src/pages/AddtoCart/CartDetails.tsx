import React,{useState,useEffect,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useCart} from "react-use-cart"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../../components/langContext';
import { Helmet } from 'react-helmet';
const CartDetails = () => {
  const ctx = useContext(LangContext)
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[])
  const {items,isEmpty,removeItem ,updateItemQuantity,totalUniqueItems,emptyCart,cartTotal} = useCart()

if (isEmpty) return <div className="emptyBox">
  <div className="container">
   <div className="row mt-5">
    <div className="col-12">
 <div className="emptyImg">
 <img src="https://www.dvnjewelry.com/images/cart-empty.png" alt="" className="img-fluid animate__animated animate__fadeInUp" />
 </div>
    </div>
    <h5 className="emptyh5 text-center ms-2 my-3 animate__animated animate__fadeInUp">{ctx.lang.shop.cartdetails}</h5>
  <div className="emptyBoxA text-center">
    <Link to="/addtocart" className='animate__animated animate__fadeInUp'>{ctx.lang.shop.cartdetails2} <i className="fa-solid fa-arrow-right-to-bracket ms-2"></i></Link>
  </div>
   </div>
  </div>
</div>;

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
    <title>{ctx.lang.helmet.cartdetails}</title>
  </Helmet>
 <section className="cartDetails">
  <div className="d-flex justify-content-center">
    <div className="cartDetailstxt mt-5"><h1><Link to="/addtocart" className='animate__animated animate__fadeIn'>{ctx.lang.shop.shopTitle}</Link><span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="cartDetailstxt mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.shop.shopTitle2}</a></h1></div>
  </div>
</section>


<section className="cartDetails2">
<div className="container-fluid mt-5">
  <div className="row ">
 
 
<div className="col-12 col-sm-12 col-md-9 ">
<h6 className='cartDetailsh6'>{ctx.lang.shop.shopTitle2}</h6>
  {
    items.map((item:any,i)=>(
<>

  <div className="row ">
    <div className="d-flex justify-content-end">
    <button onClick={() =>{removeItem(item.id) 
  toast.error(ctx.lang.toastify.addtocart3, {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark"
  })}  } style={{"border":"none","backgroundColor":"transparent"}}><i className="fa-regular fa-trash-can" style={{"fontSize":"20px","color":"#da8c17"}}></i>

  </button>
    </div>
    <div className="col-12 col-sm-2  my-2"><img src={item.img} alt="" width="80px" className='detailsImg'/></div>
    <div className="col-12 col-sm-2  my-2">
     <div className="titleBox">
      <h6 className="cartDetailsTitle">{ctx.lang.shop.title}:</h6>
      <p style={{"fontSize":"15px"}} className="cartDetailsP">{item.title}</p>
     </div>
    </div>
    <div className="col-12 col-sm-2  my-2">
    <div className="categoryBox">
      <h6 className="cartDetailsTitle">{ctx.lang.shop.category}:</h6>
      <p style={{"fontSize":"15px"}} className="cartDetailsP">{item.category}</p>
     </div>
    </div>
    <div className="col-12 col-sm-2  my-2">
    <div className="priceBox">
      <h6 className="cartDetailsTitle">{ctx.lang.shop.price}:</h6>
      <p style={{"fontSize":"15px"}} className="cartDetailsP">${(item.price * item.quantity).toFixed(2)}</p>
     </div>
    </div>
    <div className="col-12 col-sm-2  my-2">
    <div className="ratingBox">
      <h6 className="cartDetailsTitle">{ctx.lang.shop.rating}:</h6>
    <div className="iconBoxDetails">
    <i className="fa-solid fa-star" style={{"color":"#FB9B0A","fontSize":"12px"}}></i>
<i className="fa-solid fa-star" style={{"color":"#FB9B0A","fontSize":"12px"}}></i>
<i className="fa-solid fa-star" style={{"color":"#FB9B0A","fontSize":"12px"}}></i>
<i className="fa-solid fa-star" style={{"color":"#FB9B0A","fontSize":"12px"}}></i>
<i className="fa-regular fa-star" style={{"color":"#FB9B0A","fontSize":"12px"}}></i>
    </div>
     </div>
    </div>
    <div className="col-12 col-sm-2  my-2">
    <div className="quantityBox">
      <h6 className="cartDetailsTitle">{ctx.lang.shop.quantity}:</h6>
      <div className="detailsBtnBox d-flex" >
        <button className="btn increment"  onClick={() => updateItemQuantity(item.id,item.quantity -1)} >-</button>
        <span className='mx-1 mt-1 cartDetailsP'>{item.quantity}</span>
        <button className="btn decrement"  onClick={() => updateItemQuantity(item.id,item.quantity +1)} >+</button>
      </div>
     </div>
    </div>
    <hr className="hr my-5" />
  </div>

</>
 
  ))
} 
</div>
<div className="col-12 col-sm-12 col-md-3 bg ">
<div className='detailsCart animate__animated animate__fadeInRight'>
  <h5 className='pt-5 ms-2 cartTotal'>{ctx.lang.shop.carttotal} : {totalUniqueItems}</h5>
  <h5 className='ms-2 cartTotal'>{ctx.lang.shop.cartprice} : ${(cartTotal).toFixed(2)}</h5>
  <h5 className='ms-2 cartTotal'>{ctx.lang.shop.sale} : <span className='text-danger'>25%</span></h5>
  <div className="d-flex pb-3">
  <Link to="/checkout"  style={{"textDecoration":"none","color":"black"}}><button className="btn buyNow ms-2 mt-3" style={{"fontSize":"13px"}} >{ctx.lang.shop.buynow}</button></Link>
    <button className="btn delete ms-4 mt-3" onClick={()=>emptyCart()} style={{"fontSize":"13px"}}>{ctx.lang.shop.delete}</button>
  </div>
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

export default CartDetails