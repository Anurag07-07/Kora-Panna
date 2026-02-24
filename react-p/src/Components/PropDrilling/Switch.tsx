import { useContext } from 'react'
import { Data } from './BulbContext'

const Switch = () => {
  const {toggle,setToggle}  = useContext(Data)

  
  function ChangeHandler(){
    setToggle(!toggle)
  }

  return (
    <div>
      <button onClick={ChangeHandler}>Switch</button>
    </div>
  )
}

export default Switch
