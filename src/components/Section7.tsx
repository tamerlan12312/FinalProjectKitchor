import React,{useContext} from 'react'
import Section7Data from './Section7Data'
import project from '../data/section7'
import LangContext from './langContext'

const Section7:React.FC = () => {
    const ctx = useContext(LangContext)
    
  return (
   <>
 <section className="section7">
 <div className="container mt-5">
    <h5 className='text-center sec7h5'>{ctx.lang.section7.projecttxt}</h5>
    <h1 className='text-center sec7h1'>{ctx.lang.section7.projecttxt1}</h1>
    <h5 className='text-center mt-4 sec7h5-1'>{ctx.lang.section7.projecttxt2} <br /> {ctx.lang.section7.projecttxt3}</h5>
    <div className="row g-3 mt-4">
        {
            project.map((fd,i)=>{
                return <Section7Data 
                image={fd.img}
                key={i}
                title={ctx.lang.section7.section7data[fd.id]}
                title1={ctx.lang.section7.section7data2[fd.id]}
                />
            })
        }
  
    </div>
  </div>
 </section>
   </>
  )
}

export default Section7