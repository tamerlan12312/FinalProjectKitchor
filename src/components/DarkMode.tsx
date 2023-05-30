import React, { useEffect } from 'react'

const DarkMode = ({color,setColor,icon,setIcon}:any) => {
   useEffect (()=>{
      if(color != "bg-white" && icon === null ){
           setColor("bg-dark")
           setIcon("☀")
        
         } 
     
        
   },[])
   const switchMode =()=>{
      setColor(color  == "bg-white" ? "bg-dark" : "bg-white")
      color ==="bg-white" ? setIcon('☀') : setIcon('🌚')
   }
   
  return (
 <>
 <button style={{"border":"none","backgroundColor":"transparent"}} className="mx-1 darkModeBtn" onClick={switchMode}>{icon}</button>
 </>
  )
}

export default DarkMode