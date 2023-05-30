import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist'
import LangContext from '../components/langContext';
import {toast } from 'react-toastify';
const Wishlist = () => {
    const ctx = useContext(LangContext)
    const {addItem} = useCart()
    const {items,isWishlistEmpty,removeWishlistItem} = useWishlist()
    if (isWishlistEmpty) return <div className="emptyBox">
    <div className="container">
     <div className="row mt-5">
      <div className="col-12">
   <div className="emptyImg">
   <img src="https://www.dvnjewelry.com/images/cart-empty.png" alt="" className="img-fluid animate__animated animate__fadeInUp" />
   </div>
      </div>
      <h5 className="emptyh5 text-center ms-2 my-3 animate__animated animate__fadeInUp">{ctx.lang.wishlist.wishlisttitle}</h5>
    <div className="emptyBoxA text-center">
      <Link to="/addtocart" className='animate__animated animate__fadeInUp ms-3'>{ctx.lang.shop.cartdetails2} <i className="fa-solid fa-arrow-right-to-bracket ms-2"></i></Link>
    </div>
     </div>
    </div>
  </div>;;
  return (
   <>
   
   <section className="wishlist mt-5">
   <section className="cartDetails">
  <div className="d-flex justify-content-center">
    <div className="cartDetailstxt mt-5"><h1><Link to="/addtocart" className='animate__animated animate__fadeIn'>{ctx.lang.shop.shopTitle}</Link><span className='ms-3 animate__animated animate__fadeIn'>/</span></h1></div>
    <div className="cartDetailstxt mt-5"><h1><a href="#react" className='animate__animated animate__fadeIn'>{ctx.lang.wishlist.wishlisttxt}</a></h1></div>
  </div>
</section>

    <div className="container">
        <div className="row">
        <div className="col-12 col-sm-12 col-md-12 ">
<h6 className='cartDetailsh6 mt-5 mb-4'>{ctx.lang.wishlist.wishlisttxt}</h6>
  {
    items.map((item:any,i)=>(
<>

  <div className="row ">
    <div className="d-flex justify-content-end">
    <button style={{"border":"none","backgroundColor":"transparent"}} onClick={()=>{removeWishlistItem(item.id)
     toast.error(ctx.lang.toastify.addtocart3, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      })
    }}><i className="fa-regular fa-trash-can" style={{"fontSize":"20px","color":"#da8c17"}}></i>

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
      <p style={{"fontSize":"15px"}} className="cartDetailsP">${item.price}</p>
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
    <div className="addToCart">
        <a href="#react" onClick={()=>{
  addItem(item) 
  toast.success(ctx.lang.toastify.addtocart, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    })}}>{ctx.lang.shop.addtocart}</a>
     </div>
    </div>
    <hr className="hr my-5" />
  </div>

</>
 
  ))
} 
</div>
        </div>
    </div>
   </section>
   
   </>
  )
}

export default Wishlist