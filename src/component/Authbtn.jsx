import { useNavigate } from "react-router-dom"
import icon from '../assets/upqk2y.png'

// FiEdit → pencil/edit icon
// FiPlusCircle → plus inside a circle

function AuthBtn(elem){
    const navigate = useNavigate();
    return (
        <div className="flex flex-row ml-5 ">
            <button className={`group px-5 p-1 w-25 flex justify-center items-center active:scale-95 font-bold text-md rounded-lg mx-1 
                    ${elem.theme
                    ? "bg-btncolorD/70 hover:bg-btncolorD text-white hover:border-logo hover:border"
                    : "bg-gray-100 hover:bg-gray-200 hover:border-logo2 hover:border"
                    } hidden md:block lg:block`}
                onClick={() => navigate("/")}
                >
                <p className="flex items-center gap-2">
                    Post 
                    <span className="text-2xl font-extrabold transition-transform -mt-1 duration-300 transform group-hover:rotate-45">
                    +
                    </span>
                </p>
            </button>

            <button
                    className={` active:scale-95 w-10 h-10 font-bold text-md rounded-full mx-5 ${elem.theme?"bg-btncolorD/70 hover:bg-btncolorD text-white hover:border-logo hover:border":"bg-gray-100 hover:bg-gray-200 hover:border-logo2 hover:border "} hidden md:block lg:block`}
                    onClick={() => navigate("/")}
                    >
                    <img src={icon} className="h-full w-full rounded-full object-cover" />
            </button>   
        </div>
    )
}

export default AuthBtn;