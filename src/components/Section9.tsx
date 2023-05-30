import React, { useContext } from 'react'
import CountUp from 'react-countup';
import LangContext from './langContext';


const Section9 = () => {
    const ctx = useContext(LangContext)
  return (
    <section className="section9 mt-5">
<div className="container">
    <div className="row">
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
       <div className="boxCountUp1">

        <h3 className='counth3 text-center'>
  <CountUp start={0} end={25} duration={4} delay={0}/>
          +
        </h3>
    
        <h4 className='counth4 text-center'>{ctx.lang.section9.countup}</h4>
       </div>

        </div>

        
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="boxCountUp1">
    
        <h3 className='counth3 text-center'>
     <CountUp start={0} end={93} duration={4} delay={0}/>
          +
        </h3>

        <h4 className='counth4 text-center'>{ctx.lang.section9.countup1}</h4>
       </div>

        </div>
    
        
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

        <div className="boxCountUp1">
   
        <h3 className='counth3 text-center'>
     <CountUp start={0} end={48} duration={3} delay={0}/>
          +
        </h3>
 
        <h4 className='counth4 text-center'>{ctx.lang.section9.countup2}</h4>
       </div>
        </div>
        
        
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

        <div className="boxCountUp1">

        <h3 className='counth3 text-center'>
      <CountUp start={0} end={68} duration={2} delay={0}/>
          +
        </h3>

        <h4 className='counth4 text-center'>{ctx.lang.section9.countup3}</h4>
       </div>
        </div>
        <hr  className='mt-5 hr'/>
    </div>
</div>
    </section>
  )
}

export default Section9