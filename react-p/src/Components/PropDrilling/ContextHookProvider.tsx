import { useState } from "react"
import { Data } from "./BulbContext"
import Bulb from "./Bulb"
import Switch from "./Switch"

const ContextHookProvider = () => {
  const [toggle,setToggle] = useState<boolean>(false)
  return (
    <Data.Provider value={{toggle,setToggle}}>
      <Bulb></Bulb>
      <Switch></Switch>
    </Data.Provider>
  )
}

export default ContextHookProvider