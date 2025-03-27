import React,{useContext,useRef,useEffect} from 'react'
import { newContext } from './ColorContext'
const ColorComponent = () => {
    console.log('ColorComponent')
    const {color,setcolor}=useContext(newContext)
    const inputRef=useRef(null)
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.style.backgroundColor=color
        }
    },[color])
  return (
    <>
    <input type="color" onChange={(e)=>setcolor(e.target.value)}  />
    <div ref={inputRef} style={{width:'1000px',height:'1000px'}}>
      
    </div>
    </>
  )
}

export default ColorComponent
