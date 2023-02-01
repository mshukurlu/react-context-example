import { MainContext,useContext } from "../context"
import { useEffect, useState } from "react"
export default function Header() {
    const [logoText,setLogoText] = useState("shukurlu.net")
    const {theme,appendMethods} = useContext(MainContext) 
    useEffect(()=>{
        appendMethods({setLogoText})
    },[])

  return (
    <div>
        <h3>{logoText}</h3>
        Current theme = {theme}</div>
  )
}
