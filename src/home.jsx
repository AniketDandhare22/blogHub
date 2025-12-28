import { useState  } from "react";
import Card from './card'
import Vcard from './VideoCard'
import { FiMenu } from "react-icons/fi";
import SideBar from './Sidebar'
import { useTheme } from "./theme/useTheme";
import Navbar from "./Navbar";
import posts from "./data/post.json";

function Home(e) {
    const [collapsed, setCollapsed] = useState(false);
    const { dark} = useTheme();
    const [query ,setQuery] =useState('');
    const [query2 ,setQuery2] =useState('');
    const filterPost = posts.filter((post) => {
      const text = query.toLowerCase();
      if(query2==="All Posts"){setQuery2('');}
      return (
        post.title?.toLowerCase().includes(text) ||
        post.description?.toLowerCase().includes(text) ||
        post.category?.toLowerCase().includes(text)
      );
    });
    const filterPost2 = filterPost.filter((post) => {
      const text2 = query2.toLowerCase();
      if(query2==="All Posts"){setQuery2('');}
      return(post.category?.toLowerCase().includes(text2));
      
    });
  return (
    <div className={`h-screen w-full flex flex-col bg-primaryD light:bg-primary text-white light:text-txPrimary ${!dark?"light":""}`}>
      {/* Navbar */}
      <Navbar e={e} setQuery={setQuery}/>

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

                <div className={`${collapsed ? "opacity-0 pointer-events-none " : "opacity-100"} transition-opacity`}>
                  <SideBar theme={dark} task={setQuery2} />
                </div>
              </div>
  

            {/* blog content */}
            <div className={`w-full flex flex-wrap justify-center h-screen custom-scroll ${dark?"bg-secondaryD":"bg-secondary"} overflow-y-auto overflow-x-hidden`}>
              <div className="w-full max-w-[850px] m-10 flex justify-between">
                <div className="h-20">
                  <h1 className={`text-4xl mb-2 light:text-primaryD text-primary light:hover:text-logo2 hover:text-logo`}>
                    Latest Blog Posts
                  </h1>
                  <p className={`light:text-secondaryD text-secondary`}>
                    Discover stories, thinking, and expertise from writers on any topic.
                  </p>
                </div>
                <div className={`px-4 py-2 rounded-lg h-10lg:h-10 md: h-15 justify-center items-center flex light:text-txSecondary text-txSecondaryD bg-primaryD light:bg-white font-bold border-2 border-transparent hover:border-logo light:hover:border-logo2`}>
                  {filterPost2.length} posts
                </div>
              </div>
              <div className="w-full h-full justify-center flex flex-wrap">

              {filterPost2.length === 0 && (
                <p className="text-center wrap-break-word max-w-200 h-fit text-sm opacity-70  rounded-lg bg-primaryD light:bg-primary p-2 px-4 ">
                  No posts found for "{query}"
                </p>
              )}

              {filterPost2.map((post) =>
                post.type === "video" ? (
                  <Vcard key={post.id} data={post} theme={dark} />
                ) : (
                  <Card key={post.id} data={post} theme={dark}  />
                )
              )}
              </div>

            </div>


            {/* Recent Posts */}
                  {/* Recent Posts */}
                <div className="md:w-[30%] lg:w-[25%] p-5 border-l bg-triaryD border-txSecondary light:border-gray-300 light:bg-primary md:block hidden">

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white light:text-txPrimary mb-4 text-center">
                    Recent
                  </h3>

                  {/* Logged OUT state */}
                  {!e.isAuth && (
                    <div className="h-[60vh] flex items-center justify-center text-center px-4">
                      <p className="text-sm text-txSecondaryD light:text-txSecondary opacity-80">
                        No recent activity yet.  
                        <br />
                        <span className="text-xs">
                          Login to see your reading history.
                        </span>
                      </p>
                    </div>
                  )}

                  {/* Logged IN state */}
                  {e.isAuth && (
                    <div className="space-y-4">

                      <div className="flex gap-3 p-3 rounded-xl bg-primaryD/60 light:bg-secondary hover:bg-primaryD/80 transition cursor-pointer">
                        <img
                          src="https://picsum.photos/80/80?random=1"
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-white light:text-txPrimary line-clamp-2">
                            Understanding React Context API
                          </h4>
                          <p className="text-xs text-txSecondaryD light:text-txSecondary line-clamp-2">
                            Learn how Context API helps manage global state.
                          </p>
                          <span className="text-[11px] opacity-70">
                            Dec 18, 2025
                          </span>
                        </div>
                      </div>

                      {/* more cards */}
                    </div>
                  )}

                </div>


            
        </div>  
    </div>
  );
}

export default Home;