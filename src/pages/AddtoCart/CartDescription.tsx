import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import cartData from '../../data/addtocart'
import { useCart } from 'react-use-cart'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../../components/langContext'
import { Helmet } from 'react-helmet'
import { useWishlist } from 'react-use-wishlist';
const CartDescription = () => {
  const [color,setColor] = useState(false)
  const ctx = useContext(LangContext)
    const {url} = useParams()
    const cartDataDetails :any = cartData.find(b=>b.id == url)
    const [isActive,setIsActive] = useState(1)
    const handleActive =(btn: React.SetStateAction<number>)=> setIsActive(btn)
    const {addItem} = useCart()
    const {addWishlistItem} = useWishlist()
    const {removeWishlistItem} = useWishlist()
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },1500)
    },[])

    const wishlistFunc =()=>{
      setColor(!color)
   if (color != true){
    addWishlistItem(cartDataDetails)
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
   }    else {
    removeWishlistItem(cartDataDetails.id)
    toast.error(ctx.lang.toastify.wishlist2, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
   }
  }
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
  <section className="cartDescription">
  <div className="container-fluid">
<div className="row my-4">
<div className="col-12 col-sm-12 col-md-5 col-lg-5 ">
  <div className="bestDetailsImg text-center">
      <img src={cartDataDetails.img} alt="" className="img-fluid animate__animated animate__fadeIn" width="80%" />
  </div>
</div>
<div className="col-12 col-sm-12 col-md-7 col-lg-7 ">
<div className="row">
<div className="d-flex">
<div className="detailsStock animate__animated animate__fadeIn">
  <h6 className="bestdetailsh6 ">{ctx.lang.shop.cartdesc}</h6>
  </div>
</div>
</div>
<h1 className="detailsh1 mt-2 animate__animated animate__fadeIn">{cartDataDetails.title}</h1>
<div className="row">
<div className="col-12 col-sm-12 col-md-12 col-lg-2  mt-2">
<div className="detailsIcon ms-1">
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-regular fa-star"></i>
<span className='text-secondary'>(5)</span>
</div>
</div>
<div className="col-12 col-sm-10 col-md-10   col-lg-6  mt-2">
<span className='text-secondary '>SKU:</span>
<span className='stockSpan'>{cartDataDetails.title3}</span>
</div>
</div>
<hr className="hr" />
<h4 className='detailsPriceh4'>${cartDataDetails.price}</h4>
<p className='detailsP2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quisquam est alias sed cumque perspiciatis quaerat facere odit corrupti accusantium a quis aut fugiat tempore nam expedita optio quasi nobis rerum iste necessitatibus aperiam, consequatur voluptatem? Voluptas aliquid quod enim animi veritatis, sint, eveniet labore ab harum incidunt ipsam beatae, nemo dolor suscipit quis ut? Repudiandae maiores ad quaerat exercitationem?</p>
<hr className="hr mt-4" />
<div className="detailsBox">
<button className='stockBtn'  onClick={()=>{addItem(cartDataDetails)
toast.success(ctx.lang.toastify.addtocart, {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  })
} }>{ctx.lang.shop.bestsellers2}</button>
</div>
<div className="d-flex mt-4 ms-1">



<div className={`${color ? "wishlistactive" : "detailsIconTxt" }`}  onClick={wishlistFunc}>



  
<i className="fa-regular fa-heart" ></i>
<span className="">{ctx.lang.shop.bestsellers3}</span>
</div>
<div className="detailsIconTxt ms-3">
<i className="fa-solid fa-repeat"></i>
<span className='ms-2'>{ctx.lang.shop.bestsellers4}</span>
</div>

</div>
<div className="d-flex mt-4 ms-1">
<div className="detailsIconTxt2">
<span className='ms-2 text-secondary'>{ctx.lang.shop.bestsellers5}:</span>
<span className='ms-2 detailspn2'>Hodies,music</span>
</div>
</div>
<div className="d-flex mt-4 ms-1">
<div className="detailsIconTxt2 ">
<span className='ms-2 text-secondary'>{ctx.lang.shop.bestsellers6}:</span>
<span className='ms-2 detailspn2'>Design,interior</span>
</div>

</div>
   </div>
</div>
</div>


<div className="container-fluid">
<div className="tabsV2container">
  <div className="tabsContainer">
      <div className="btnContainer my-4">
          <button className={`tabs ${isActive === 1 ? "activeTab" : ""}`} onClick={()=>handleActive(1)}>{ctx.lang.shop.bestdesc1}</button>
          <button className={`tabs ${isActive === 2 ? "activeTab" : ""}`} onClick={()=>handleActive(2)}>{ctx.lang.shop.bestdesc2}</button>
          <button className={`tabs ${isActive === 3 ? "activeTab" : ""}`} onClick={()=>handleActive(3)}>{ctx.lang.shop.bestdesc3}</button>
      </div>
      { isActive === 1 && 
       <div className="tabData">
          <div className="tabContent">
           <p className="tabP animate__animated animate__fadeIn">
           Recusandae ratione esse vel sed. Qui et dolores perferendis dolores et et qui. Animi voluptatem aut assumenda magni.
   <br /> <br />
Dolorem ut repudiandae consequatur incidunt nihil. Velit et et et optio. Ratione nemo reprehenderit natus eligendi sed reprehenderit libero quos.
<br /> <br />
Quod amet eos voluptas sequi. Ut unde vitae iusto quia. Expedita qui id dolores fugit excepturi voluptatibus.
<br /> <br />
Repellat optio sint dolorum et suscipit provident odio et. Nihil dolores perferendis placeat molestias blanditiis ut. Vero ut harum itaque ducimus ab et voluptate ut.
           </p>
          </div>
      </div>
      }

      { isActive === 2 &&  <div className="tabData">
          <div className="tabContent" >
 <div className="container-fluid">
 <table className="table table-bordered table-hover animate__animated animate__fadeInUp table2"  style={{"fontSize":"17px"}}>
<thead>
</thead>
<tbody style={{"cursor":"pointer"}}  >
<tr  className='trtable'>
<th scope="row" >{ctx.lang.shop.bestdesc4}</th>
<td>35″L x 24″W x 37-45″H({ctx.lang.shop.bestdesc16})</td>

</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc5}</th>
<td>32.5″L x 18.5″W x 16.5″H</td>

</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc6}</th>
<td>32.5″L x 24″W x 18.5″H</td>

</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc7}</th>
<td>24</td>

</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc8}</th>
<td colSpan={2}>{ctx.lang.shop.bestdesc17}</td>
</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc9}</th>
<td colSpan={2}>40 LBS</td>
</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc10}</th>
<td colSpan={2}>20 LBS</td>
</tr>
<tr className='trtable' >
<th scope="row" >{ctx.lang.shop.bestdesc11}</th>
<td colSpan={2} >24″</td>
</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc12}</th>
<td colSpan={2}>37-45″</td>
</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc13}</th>
<td colSpan={2}>12″ {ctx.lang.shop.bestdesc18}</td>
</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc14}</th>
<td colSpan={2}>21.5″</td>
</tr>
<tr className='trtable'>
<th scope="row">{ctx.lang.shop.bestdesc15}</th>
<td colSpan={2}>25″</td>
</tr>
</tbody>
</table>
 </div>

          </div>
      </div>
      }
      
      { isActive === 3 &&    <div className="tabData">
          <div className="tabContent">
        <div className="container-fluid">
          <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-12  my-3">
                <div className="d-flex" data-aos="fade-in">
                <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g" alt="" className="img-fluid" style={{"borderRadius":"50%"}} />
            <div className="comentIcon ms-2">
            <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <br />
                <h6 className='comenth6  mt-1'>L.Androws<span className='ms-1 text-secondary'>June 6,2022</span></h6>
           
            </div>
           
                </div>
                <div className="row">
                  <div className="col-12 mt-1 "><p className="comentP mt-2" data-aos="fade-in">
                  "{ctx.lang.shop.bestp1}"</p></div>
              </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-12  my-3">
                <div className="d-flex" data-aos="fade-in">
                <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g" alt="" className="img-fluid" style={{"borderRadius":"50%"}} />
            <div className="comentIcon ms-2">
            <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <br />
                <h6 className='comenth6  mt-1'>Kenneth R. Myers <span className='ms-1 text-secondary'>June 6,2022</span></h6>
           
            </div>
           
                </div>
                <div className="row">
                  <div className="col-12 mt-1 "><p className="comentP mt-2" data-aos="fade-in">
                  " {ctx.lang.shop.bestp2} "</p></div>
              </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-12  my-3">
                <div className="d-flex" data-aos="fade-in">
                <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g" alt="" className="img-fluid" style={{"borderRadius":"50%"}} />
            <div className="comentIcon ms-2">
            <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <br />
                <h6 className='comenth6  mt-1'>Mike Addington <span className='ms-1 text-secondary'>June 6,2022</span></h6>
           
            </div>
           
                </div>
                <div className="row">
                  <div className="col-12 mt-1 "><p className="comentP mt-2" data-aos="fade-in">
                  " {ctx.lang.shop.bestp3} "</p></div>
              </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-12  my-3">
                <div className="d-flex" data-aos="fade-in">
                <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g" alt="" className="img-fluid" style={{"borderRadius":"50%"}} />
            <div className="comentIcon ms-2">
            <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <br />
                <h6 className='comenth6  mt-1'>Ervin Arlington  <span className='ms-1 text-secondary'>June 6,2022</span></h6>
           
            </div>
           
                </div>
                <div className="row">
                  <div className="col-12 mt-1 "><p className="comentP mt-2" data-aos="fade-in">
                  "{ctx.lang.shop.bestp4} "</p></div>
              </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12  my-3">
                <div className="d-flex" data-aos="fade-in">
                <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g" alt="" className="img-fluid" style={{"borderRadius":"50%"}} />
            <div className="comentIcon ms-2">
            <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <br />
                <h6 className='comenth6 1'>Patrick M. Newman  <span className='ms-1 text-secondary'>June 6,2022</span></h6>
           
            </div>
           
                </div>
                <div className="row">
                  <div className="col-12 mt-1 "><p className="comentP mt-2" data-aos="fade-in">
                  " {ctx.lang.shop.bestp5} "</p></div>
              </div>
              </div>
          </div>
        </div>
          </div>
      </div>
      }
  </div>
</div>
</div>
</section>


</>
}
</>
  )
}

export default CartDescription