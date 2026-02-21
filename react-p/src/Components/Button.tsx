import type { ReactNode } from "react"

type ButtonVarientsTypes = "sm" | "md" | "lg"
type ButtonVarients = "primary" | "secondary" 

const Button = ({children,size,varients,disabled}:{
  children:ReactNode
  size:ButtonVarientsTypes
  varients:ButtonVarients
  disabled:boolean
}) => {
  
  type ButtonSize = Record<ButtonVarientsTypes,string>
  type ButtonVarient = Record<ButtonVarients,string>
  
  const colors:ButtonSize = {
    "sm":"w-20 h-5 px-5 py-5 border-2  rounded-md flex justify-center items-center ",
    "md":"w-30 h-7 px-5 py-5 border-2 rounded-md flex justify-center items-center ",
    "lg":"w-40 h-10 px-5 py-5 border-2 rounded-md flex justify-center items-center ",
  }

  const varient:ButtonVarient = {
    "primary":" bg-black text-white",
    "secondary":" text-black ",
  }

  return (
    <button className={` ${colors[size]} ${varient[varients]}`} disabled={disabled} >
      {children}
    </button>
  )
}

export default Button

