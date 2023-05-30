import React,{useContext} from 'react'
import ListViewData from './ListViewData'
import gridData from "../../data/gridviewdata"
import LangContext from '../../components/langContext'
const ListView = () => {
  const ctx =useContext(LangContext)
  return (
   <>
   
  <div className="row g-3">
  {
    gridData.map((fd,i)=>{
      return <ListViewData 
      imgList={fd.img}
      key={i}
      listTitle={ctx.lang.blog[fd.id]}
      id={fd.id}
      />
    })
   }
  </div>
   
   </>
  )
}

export default ListView