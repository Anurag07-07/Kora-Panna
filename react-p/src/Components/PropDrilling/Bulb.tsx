import  { useContext } from 'react'
import { Data } from './BulbContext'

const Bulb = () => {
  
  const {toggle} = useContext(Data)
  console.log(toggle);
  return (
    <div>
      Bulb {toggle ? "ON" : "Off"}
    </div>
  )
}

export default Bulb
