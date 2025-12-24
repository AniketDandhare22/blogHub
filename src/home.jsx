
import { useState  } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import Search from './component/search'
import Card from './card'
import Vcard from './VideoCard'
import { FiMenu } from "react-icons/fi";
import SideBar from './Sidebar'
import Btn from './component/Btn'
import ProgressBar from "./component/progessbarTop";
import AuthIcon from './component/Authbtn'
import { useTheme } from "./theme/useTheme";

function Home(e) {
    const [collapsed, setCollapsed] = useState(false);
    const [logoutTrigger, setLogoutTrigger] = useState(false);
    const handleLogout = () => {
      setLogoutTrigger(true); 
    };
    const { dark, toggleTheme } = useTheme();

  return (
    <div className={`h-screen w-full flex flex-col bg-primaryD light:bg-primary text-white light:text-txPrimary ${!dark?"light":""}`}>
      {/* Navbar */}
      <ProgressBar trigger={logoutTrigger} onComplete={() => {
          e.logout(); 
          setLogoutTrigger(false); // reset trigger
        }}  theme={dark} />
      <div className="w-full h-15 border-b light:border-gray-300 border-txSecondary p-1 flex flex-row justify-between items-center">
        <div className="w-[30%] h-full items-center flex flex-row px-2">
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

            <div className="  font-bold text-2xl pt-1 h-full items-center flex"> Blog<span className={`text-white ${dark?"bg-logo":"bg-logo2"} px-2 rounded-lg`}>Hub</span></div>
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
            {!e.isAuth?(<Btn theme={dark}/>):(<AuthIcon theme={dark}/>)}
            <button className={`p-1 px-2 rounded-4xl active:scale-95 ${dark?"bg-btncolorD/60 hover:bg-btncolorD text-white":"bg-btncolor/70 hover:bg-btncolor text-gray-950"} `}
              onClick={handleLogout}
            ><HiDotsHorizontal size={22} /></button>
        </div>
      </div>


      {/* Content */}
        <div className=" w-full  flex flex-row overflow-hidden"> 

            {/* Sidebar */}
              <div
                className={`
                  relative h-full overflow z-20
                  transition-all duration-300 ease-in-out
                  ${collapsed ? "w-[2%] min-w-[32px]" : "md:w-[30%] lg:w-[25%]"}
                  border-r border-txSecondaryD/70 light:border-gray-300
                `}
              >
                <button
                  onClick={() => setCollapsed(!collapsed)}
                  className={`
                    absolute top-1/8 -translate-y-1/4 -right-4 z-50
                    w-8 h-8 rounded-full flex items-center justify-center shadow-md
                    border light:border-txSecondaryD/50 border-white/30
                    ${dark
                      ? "bg-btncolorD text-white hover:bg-btncolorD/90"
                      : "bg-white text-gray-800 hover:bg-gray-100"}
                  `}
                ><FiMenu
                  size={20}
                  className={`transition-transform ${collapsed ? "rotate-90" : ""}`}
                />

                </button>

                <div className={`${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"} transition-opacity`}>
                  <SideBar theme={dark} />
                </div>
              </div>
  

            {/* blog content */}
            <div className={`w-full flex flex-wrap justify-center h-full custom-scroll ${dark?"bg-secondaryD":"bg-secondary"} overflow-y-auto overflow-x-hidden`}>
              <div className="w-full max-w-[850px] m-10 flex items-center justify-between">
                <div>
                  <h1 className={`text-4xl mb-2 light:text-primaryD text-primary light:hover:text-logo2 hover:text-logo`}>
                    Latest Blog Posts
                  </h1>
                  <p className={`light:text-secondaryD text-secondary`}>
                    Discover stories, thinking, and expertise from writers on any topic.
                  </p>
                </div>
                <div className={`px-4 py-2 rounded-lg light:text-txSecondary text-txSecondaryD bg-primaryD light:bg-white font-bold`}>
                  2 posts
                </div>
              </div>
              <Card theme={dark}/>
              <Vcard theme={dark}/>
              <Card theme={dark}/>
              <Card theme={dark}/>
            </div>


            {/* recent */}
            <div className="md:w-[30%] lg:w-[25%] p-5 border-l bg-triaryD border-txSecondary light:border-gray-300 light:bg-primary md:block lg:block hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas laborum, recusandae est dolor commodi rem placeat tempore officia. Tempore ex aspernatur dolore blanditiis illum error quaerat libero accusantium dolorum, culpa possimus deserunt eveniet vero sapiente fugiat, iste ipsa. Accusantium voluptate officiis illo fugiat adipisci odio consectetur fugit neque labore commodi, architecto laborum facilis libero, illum molestiae et! Amet quibusdam asperiores cumque excepturi ullam ratione officiis? Nostrum, unde magnam officia dicta ad nesciunt enim impedit pariatur, incidunt minus explicabo sed! Maiores alias ex expedita et facilis in magni molestias dolore eos molestiae, rerum dicta qui fugit laudantium culpa ipsum modi?
            </div>

            
        </div>  
    </div>
  );
}

export default Home;