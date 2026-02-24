import { createContext, type Dispatch, type SetStateAction } from "react"

interface Bulb{
  toggle:boolean
  setToggle:Dispatch<SetStateAction<boolean>>
}

export const Data = createContext<Bulb>({
  toggle:false,
  setToggle() {},
})