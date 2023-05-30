import React,{useContext} from 'react'
import GridViewData from './GridViewData'
import gridData from "../../data/gridviewdata"
import LangContext from '../../components/langContext'

const GridView = () => {
  const ctx = useContext(LangContext)
  return (
   <>
<div className="row g-4">

    {
      gridData.map((fd,i)=>{
        return <GridViewData
         img={fd.img}
         key={i}
         gridTitle={ctx.lang.blog[fd.id]}
         id={fd.id}
         />
      })
    }
  
</div>
   
   </>
  )
}

export default GridView