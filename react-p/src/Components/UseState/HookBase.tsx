import { useState } from "react"

const HookBase = () => {

  const [count,setCount] = useState(()=>{
    const intialValue = Math.floor(Math.random()*(100-50));
    return intialValue
  })


  function Increment(){
    setCount((prev)=>prev+1)
  }
  function Decrement(){
    setCount((prev)=>prev-1)
  }

  return (
    <div>
      {count}
      <div onClick={Increment}>+</div>  
      <div onClick={Decrement}>-</div>  
    </div>
  )
}

export default HookBase
