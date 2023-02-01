import { MainContext ,useContext} from "../context"
import ThemeSwitcher from "./ThemeSwitcher"
export default function Footer() {
    const {setLogoText} = useContext(MainContext)

    const switchLogoText = () =>{
        setLogoText('murad.az')
    }
    return (
      <div>Footer component <br/>
        <ThemeSwitcher  />
        <button onClick={switchLogoText}>Switch logo text</button>
      </div>
    )
  }
  