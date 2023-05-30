import React, { useEffect,useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert" ;
import AOS from "aos"
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../../components/langContext';
import { Helmet } from 'react-helmet';
import { UserContext } from '../UserContext';
const Checkout = () => {
    const [users,setUsers] = useContext<any>(UserContext)
    const ctx = useContext(LangContext)
    const [loading,setLoading] = useState(false)
    const {items,isEmpty ,totalUniqueItems,cartTotal} = useCart()
    useEffect(()=>{
        AOS.init({duration:1000})
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1500)
    },[])
 const orderFunc =()=>{
   { users ?    swal("Product received successfully", "", "success") :    swal("Please Sign in", "", "info"); }
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
    <title>{ctx.lang.helmet.checkout}</title>
  </Helmet>
  <section className="checkoutSection">
  <div className="d-flex justify-content-center">
    <div className="cartDetailstxt mt-5"><h1 className='animate__animated animate__fadeIn'>{ctx.lang.shop.checkoutTitle}</h1></div>
   
  </div>
</section>



<div className="checkout2">
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-8 col-md-12 col-lg-8">
                <div className="checkoutBox">
                    <h5 className='mt-5 ms-2'>{ctx.lang.shop.checkouttxt1} </h5>
                    <form  >
                    <div className="mb-3">
  <input type="text" className="form-control my-4" id="exampleFormControlInput1" placeholder={ctx.lang.shop.checkouttxt2}  />
  <input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder={ctx.lang.shop.checkouttxt3} />
 
<div>
  <input className="form-control mb-4" list="datalistOptions" id="exampleDataList" placeholder={ctx.lang.shop.checkouttxt4}/>
  <datalist id="datalistOptions">
    <option value="San Francisco">
    </option><option value="New York">
    </option><option value="Seattle">
    </option><option value="Los Angeles">
    </option><option value="Chicago">
    </option></datalist>
</div>
<input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder={ctx.lang.shop.checkouttxt5} data-aos="fade-in" />
<input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder={ctx.lang.shop.checkouttxt6} data-aos="fade-in"/>
<input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder={ctx.lang.shop.checkouttxt7} data-aos="fade-in" />
<input type="text" className="form-control  mb-4" id="exampleFormControlInput1" placeholder={ctx.lang.shop.checkouttxt8} data-aos="fade-in" />
<input type="number" className="form-control  mb-4" id="exampleFormControlInput1" placeholder={ctx.lang.shop.checkouttxt9} data-aos="fade-in" />
<input type="email" className="form-control  mb-4" id="exampleFormControlInput1" placeholder={ctx.lang.shop.checkouttxt10} data-aos="fade-in" />
<div className="d-flex">
<input type="checkbox" name="" id="" />
 <span className='ms-3 checkSpan'>{ctx.lang.shop.checkouttxt11}</span>
</div>
<br />
<div className="d-flex">
<input type="checkbox" name="" id="" />
 <span className='ms-3 checkSpan'>{ctx.lang.shop.checkouttxt12}</span>
</div>
<input type="text" className="form-control  my-4" id="exampleFormControlInput1" placeholder={ctx.lang.shop.checkouttxt13} />
</div>

                    </form>
                </div>
            </div>



            <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-5">
                <div className="checkOutDetails mt-5 animate__animated animate__fadeIn" >
                <div>
                <h5 className='mt-3 ms-2 checkOutDetailsh5'>{ctx.lang.shop.checkouttxt14}</h5>
                </div>
            <div className="row g-3">
            {
                items.map((item)=>(
                    <div className="col-12 ">
                    <div className="row">
                        <div className="col-2"><img src={item.img} alt="" className="img-fluid ms-2 mt-2" width="50px" /></div>
                        <div className="col-5 itemtext">{item.title} <span className='itemtext' > <br />
                        QTY:
                        {item.quantity}</span></div>
                 
                        <div className="col-4 itemtext2"style={{"fontSize":"18px","fontWeight":"bold"}}>${item.price}</div>
                    </div>
                    <hr className="hr me-2 ms-2" />   
                    </div>
                ))
            }
            </div>
            <div className="d-flex justify-content-between ">
            <h5 className='mt-3 ms-2 itemtext'>{ctx.lang.shop.checkouttxt15} :</h5>
            <h5 className='mt-3 me-3 itemtext'>{totalUniqueItems}</h5>
            </div>
            <hr className="hr me-2 ms-2" />
            <div className="d-flex justify-content-between ">
            <h5 className='mt-3 ms-2 itemtext'>{ctx.lang.shop.checkouttxt16} :</h5>
            <h5 className='mt-3 me-3 itemtext' >${(cartTotal).toFixed(2)}</h5>
            </div>
            <div className="checkOutDetails m-3">
       <div className="row">
        <div className="col-12 ms-2 mt-2">
        <input type="checkbox" name="" id="checkbox" />
       <span className='ms-2 itemtext'><strong>{ctx.lang.shop.checkouttxt17}</strong>
       <br />
       {ctx.lang.shop.checkouttxt18}
       </span>
        </div>
        <div className="col-12 ms-2 mt-3">
        <input type="checkbox" name="" id="checkbox" />
       <span className='ms-2 itemtext'><strong>{ctx.lang.shop.checkouttxt19}</strong></span>
        </div>
        <div className="col-12 ms-2 mt-3">
        <input type="checkbox" name="" id="checkbox" />
       <span className='ms-2 itemtext'><strong>{ctx.lang.shop.checkouttxt20}</strong></span>
        </div>
        <div className="col-12 ms-2 mt-3 mb-3">
        <input type="checkbox" name="" id="checkbox" />
       <span className='ms-2  itemtext'><strong>PayPal</strong></span>
        </div>
       </div>
            </div>
      <div className="placeOrder text-center" onClick={orderFunc}>
      <a href="#react">{ctx.lang.shop.checkouttxt21}</a>
      </div>
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

export default Checkout