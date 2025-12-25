import { useState  } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Search from './component/search'
import Btn from './component/Btn'
import ProgressBar from "./component/progessbarTop";
import AuthIcon from './component/Authbtn'
import { useTheme } from "./theme/useTheme";
import Profile from './component/profileDropdown'
import { useNavigate } from "react-router-dom";

function Navbar({e}){
    const [logoutTrigger, setLogoutTrigger] = useState(false);
    const navigate =useNavigate();
    const handleLogout = () => {
      setLogoutTrigger(true); 
    };
    const { dark, toggleTheme } = useTheme();
    return(
        <>
            <ProgressBar trigger={logoutTrigger} onComplete={() => {
                e.logout(); 
                setLogoutTrigger(false); // reset trigger
                }}  theme={dark} />
            <div className="w-full h-15 border-b light:border-gray-300 border-txSecondary p-1 flex flex-row justify-between items-center bg-primaryD light:bg-primary">
                <div className="w-auto h-full items-center flex flex-row px-2 cursor-grab" onClick={()=>navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48">
                    <path 
                        fill={dark ? "#FF6900" : "#8639D3"} 
                        d="M37,42H11c-2.761,0-5-2.239-5-5V11c0-2.761,2.239-5,5-5h26c2.761,0,5,2.239,5,5v26 C42,39.761,39.761,42,37,42z"
                    />
                    <path 
                        fill="#fff" 
                        d="M33.5,22h-1c-0.828,0-1.5-0.672-1.5-1.5V20c0-3.866-3.134-7-7-7h-4c-3.866,0-7,3.134-7,7v8 c0,3.866,3.134,7,7,7h8c3.866,0,7-3.134,7-7v-4.5C35,22.672,34.328,22,33.5,22z M20,19h5c0.553,0,1,0.448,1,1s-0.447,1-1,1h-5 c-0.553,0-1-0.448-1-1S19.447,19,20,19z M28,29h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S28.553,29,28,29z"
                    />
                    </svg>

                    <div className="  font-bold text-2xl pt-1 h-full items-center flex text-white light:text-black"> Blog<span className={`text-white ${dark?"bg-logo":"bg-logo2"} px-2 rounded-lg`}>Hub</span></div>
                </div>
                <div className="w-full flex h-full justify-center ">
                <Search theme={dark}/>
                </div>
                <div className="items-center flex px-3 w-[30%] justify-end">
                    <button
                    onClick={() => toggleTheme()}
                    className={`p-2 rounded-full transition active:scale-95 ${dark?"bg-btncolorD/60 hover:bg-btncolorD":"bg-btncolor/70 hover:bg-btncolor"}`}
                    >
                    {dark ? (
                        <FiSun className="text-yellow-100" size={22} />
                    ) : (
                        <FiMoon className="text-triaryD" size={22} />
                    )}
                    </button>
                    {!e.isAuth?(<Btn theme={dark}/>):(<AuthIcon theme={dark} user={{ username: "JohnDoe", email: "john@example.com" }} onLogout={handleLogout}/>)}<Profile
                    user={{ username: "JohnDoe", email: "john@example.com" }}
                    onLogout={handleLogout}
                    />
                </div>
            </div>
      </>
    )
}
export default Navbar