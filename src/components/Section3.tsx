import React, {useContext } from 'react'
import data from '../data/section3';
import Section3Data from './Section3Data';
import LangContext from './langContext';

const Section3 = () => {
    const ctx = useContext(LangContext)

  return (
  <>
<div className="section3bgimg">
  <div className="container-fluid mt-3">
    <div className="row g-3">
      {
        data.map((fd,i)=>(
          <Section3Data 
          image={fd.img}
          key={i}
          title={ctx.lang.section3.countryname[fd.id]}
          title2={ctx.lang.section3.readmore[fd.id]}
          title3={ctx.lang.section3.desc[fd.id]}
          />

        ))
      }

    </div>
  </div>
</div>

  </>
  )
}

export default Section3