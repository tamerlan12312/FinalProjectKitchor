import React, { useEffect, useState,useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import LangContext from '../components/langContext';

const ComingSoon:React.FC = () => {
  const ctx = useContext(LangContext)
  const[timeOut,setTimeOut] = useState<boolean>(false)
  const [days,setDays] = useState<number>(0)
  const [hours,setHours] = useState<number>(0)
  const [minutes,setMinutes] = useState<number>(0)
  const [seconds,setSeconds] = useState<number>(0)
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    const target = new Date("02/18/2024 20:00:00")
  const interval = setInterval(()=>{
    const now = new Date();
    const difference = target.getTime() - now.getTime()
    const d = Math.floor(difference / (1000 * 60 * 60 * 24))
    setDays(d)

    const h = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ) ;
    setHours(h)
    
    const m = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setMinutes(m)
      
      const s = Math.floor(
        (difference % (1000 * 60)) / 1000 
      )
      setSeconds(s)

      if(d<=0 && h<=0 && m<0 && s<=m){
setTimeOut(true)
      }
  },1000)
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },1500)

  return ()=>clearInterval(interval)

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
    <title>{ctx.lang.helmet.comingsoon}</title>
  </Helmet>
      {
        timeOut ?
        <section className="comingsoon ">
        <div className="coming">
      <div className="container">
        <h1 className='text-center countdowntext'>{ctx.lang.comingsoon.comingtxt8}</h1>
        <h1 className='comingText text-center'>{ctx.lang.comingsoon.comingtxt9}</h1>
        <div className="countBox">
        <Link to="/contact  " className='comingh6 text-center countdowntext2'>{ctx.lang.comingsoon.sign}</Link>
        </div>
        <div className="row mt-3">       
        </div>
      </div>
        </div>
      </section>
        :
<section className="comingsoon ">
  <div className="coming">
<div className="container">
  <h1 >{ctx.lang.comingsoon.comingtitle}</h1>
  <h1 className='comingText'>{ctx.lang.comingsoon.comingtxt1}</h1>
  <h6 className='comingh6'>{ctx.lang.comingsoon.comingtxt2} <span>hello@kitchen.com</span> {ctx.lang.comingsoon.comingtxt3}</h6>
  <div className="row mt-3">
   <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="timer">
      <div className="countDays">
        <h1 className='days'>{days}
        <br />
        <h6 className='text-center counth6'>{ctx.lang.comingsoon.comingtxt4}</h6>
        </h1>
       <div className="count">
        <span>:</span>
       </div>
      <br />
      </div>
    </div>
   </div>
   <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="timer">
      <div className="countDays">
        <h1 className='hours'>{hours}
        <br />
         <h6 className='text-center counth6'>{ctx.lang.comingsoon.comingtxt5}</h6>
        </h1>
       <div className="count">
        <span className='delSpan'>:</span>
       </div>
      </div>
    </div>
   </div>

   <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="timer">
      <div className="countDays">
        <h1 className='minutes text-center'>{minutes}
        <br />
         <h6 className='text-center counth6'>{ctx.lang.comingsoon.comingtxt6}</h6>
        </h1>
       <div className="count">
        <span>:</span>
       </div>
      </div>
    </div>
   </div>

   <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="timer">
      <div className="countDays">
        <h1 className='seconds text-center'>{seconds}
        <br />
        <h6 className='text-center counth6'>{ctx.lang.comingsoon.comingtxt7}</h6>
        </h1>
      </div>
    </div>
   </div>

  </div>
</div>
  </div>
</section>
      }

  </>
}

   </>
  )
}

export default ComingSoon