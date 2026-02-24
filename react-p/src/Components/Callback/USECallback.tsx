import { useEffect, useRef, useState } from "react"

const usePrev = () => {

  const useP = (value:number)=>{
    const ref = useRef(0)
    useEffect(()=>{
      ref.current = value
    },[value])

    return ref.current
  }
  

  const [count,setCount] = useState<number>(0);
  const prev = useP(count)
  return (
    <div>
      <h1>The Current Value is {count} and The Prev Value is {prev}</h1>
      <button onClick={()=>{
        setCount((prev)=>prev+1)
      }}>Increment</button>
    </div>
  )
}

export default usePrev
