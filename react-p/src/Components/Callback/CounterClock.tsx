import { useRef, useState } from "react"

const CounterClock = () => {
  const [time,setTime] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> |null>(null)
  const start = ()=>{
    if (intervalRef.current) return;

    intervalRef.current = setInterval(()=>{
      setTime((prev)=>prev+1)
    },1000)
      
  }

  const stop = ()=>{
    clearInterval(intervalRef.current!)
    intervalRef.current = null
    setTime(0)
  }

  return (
    <div>
      {time}
      <button onClick={start} >Start</button>
      <button onClick={stop} >End</button>
    </div>
  )
}

export default CounterClock
