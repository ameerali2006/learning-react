import React,{useState,useEffect} from 'react'

const Resisehook = () => {
    const [size,resize]= useState({width:window.innerWidth,height:window.innerHeight})

    useEffect(()=>{
        const hadlesize=()=>{
            resize({width:window.innerWidth,height:window.innerHeight})
        }
        window.addEventListener('resize',hadlesize)
        return ()=>window.removeEventListener('resize',hadlesize)
    },[])
    console.log(size)
  return size
}

export default Resisehook
