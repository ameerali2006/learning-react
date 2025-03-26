import React, {useRef,useState} from 'react'

const Home = () => {
    const ref=useRef(null)
    const [count,setCount]=useState(0)

    const handleColor=()=>{
        const colors=["red", "blue", "green", "purple", "orange"]
        ref.current.style.color=colors[count%colors.length]
        setCount(count+1)
    }
  return (
    <div>
      <h1 ref={ref}>hello, Ameer Ali</h1>
      <button onClick={handleColor}>change color</button>

    </div>
  )
}

export default Home
