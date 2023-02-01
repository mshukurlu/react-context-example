 
import { MainContext,useContext } from "../context"
export default function ThemeSwitcher() {
    const {theme,setTheme} = useContext(MainContext)
    const switchTheme = () => {
        setTheme(theme==='light' ? 'dark' : 'light')
}

  return (
    <button onClick={switchTheme}>Switch theme</button>
  )
}
