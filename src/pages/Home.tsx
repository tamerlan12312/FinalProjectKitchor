import React,{useState,useEffect} from 'react'
import Section1 from '../components/Section1'
import Section10 from '../components/Section10'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'
import Section8 from '../components/Section8'
import Section9 from '../components/Section9'
import PulseLoader from "react-spinners/PulseLoader";
const Home = () => {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1500)
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

<Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Section10/>
</>
   }
 
   </>
  )
}

export default Home