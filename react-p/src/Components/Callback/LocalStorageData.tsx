
import { useState, type ChangeEvent } from "react"

const LocalStorageData = () => {
  const [data,setData] = useState(()=>{
    const value = localStorage.getItem('data')
    return value ?  JSON.parse(value) : ""
  })

  const [toggle,setToggle] = useState<boolean>(false)

  function handleChange(e:ChangeEvent<HTMLInputElement>){
    const val = e.target.value
    localStorage.setItem('data',JSON.stringify(val))
  }

  return (
    <div>
      <h1>
      {
        toggle ? <h1>{data}</h1> : <h1></h1>
      }
      </h1>
      <input type="text" placeholder="Enter The Data" onChange={handleChange} />    
      <button onClick={()=>setToggle((prev)=>!prev)} > Toogle Text</button>
      
    </div>
  )
}

export default LocalStorageData