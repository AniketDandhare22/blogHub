import { ThemeData } from "./theme/ThemeContext";
import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import { MdSmartToy } from "react-icons/md";
 // AI icon
function Create(e) {
  const { dark } = useContext(ThemeData);
  const navigate = useNavigate();
  const [angle, setAngle] = useState(0);

    useEffect(() => {
        // Update the angle continuously
        const interval = setInterval(() => {
        setAngle(prev => (prev + 4) % 360); // increase 2 degrees per tick
        }, 30); 
        return () => clearInterval(interval);
    }, []);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Post");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!e.isAuth) {
      alert("First LogIn/SignIn for posting!");
      navigate("/auth");
    }
  }, [e.isAuth, navigate]);

  const handlePost = () => {
    // Logic for posting the content
    console.log({ title, category, content, file });
    alert("Post submitted!");
  };

  return (
    <>
      {e.isAuth && (
        <div
          className={`${dark ? "" : "light"} min-h-screen h-screen text-white light:text-primaryD bg-secondaryD light:bg-secondary overflow-hidden`}
        >
          <Navbar e={e} />

          <div className="flex flex-row max-w-6xl gap-5 justify-center mx-auto my-5 h-10 w-full ">
            <div className="relative w-100 group">
                  {/* Gradient Glow */}
                  <div
                      className="absolute inset-0 rounded-xl blur-[5px] scale-102 group-hover:block hidden"
                      style={{
                      background: `conic-gradient(from ${angle}deg, #4286F5, #109D58, #FBBC04 ,#DC4437 ,transparent ,transparent)`,
                      }}
                  ></div>

                  {/* Button */}
                <button
                    className="group active:scale-97 relative h-full z-10 w-full rounded-xl
                              bg-triaryD text-white light:hover:text-primaryD hover:bg-primaryD
                              light:bg-gray-200 light:text-primaryD light:hover:bg-gray-100
                              transition font-semibold flex items-center justify-center overflow-hidden gap-2"
                    onClick={() => navigate('/price')}
                  >
                    {/* Icon */}
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 30 30"
                      >
                        <defs>
                          <linearGradient id="starGradient" gradientTransform="rotate(60)">
                            <stop offset="40%" stopColor="#3B82F6" />   
                            <stop offset="100%" stopColor="#EC4899" /> 
                          </linearGradient>
                        </defs>

                        <path
                          fill="url(#starGradient)"
                          d="M14.217,19.707l-1.112,2.547c-0.427,0.979-1.782,0.979-2.21,0l-1.112-2.547c-0.99-2.267-2.771-4.071-4.993-5.057
                            L1.73,13.292c-0.973-0.432-0.973-1.848,0-2.28l2.965-1.316
                            C6.974,8.684,8.787,6.813,9.76,4.47l1.126-2.714
                            c0.418-1.007,1.81-1.007,2.228,0L14.24,4.47
                            c0.973,2.344,2.786,4.215,5.065,5.226l2.965,1.316
                            c0.973,0.432,0.973,1.848,0,2.28l-3.061,1.359
                            C16.988,15.637,15.206,17.441,14.217,19.707z"
                        />
                      </svg>

                    </span>

                    {/* Text */}
                    <span
                      className="group-hover:bg-linear-to-r from-blue-500 via-red-500 to-green-500
                                bg-size-[300%_100%] bg-clip-text text-transparent
                                bg-white light:bg-primaryD font-bold
                                transition-all duration-200 hover:animate-gradient-move"
                    >
                      Text Helper AI
                    </span>
                  </button>

            </div> 
            <div className="relative w-100 group">
                  {/* Gradient Glow */}
                  <div
                      className="absolute inset-0 rounded-xl blur-[5px] scale-102 group-hover:block hidden"
                      style={{
                      background: `conic-gradient(from ${angle}deg, #4286F5, #109D58, #FBBC04 ,#DC4437 ,transparent ,transparent)`,
                      }}
                  ></div>

                  {/* Button */}
                <button
                    className="group active:scale-97 relative h-full z-10 w-full rounded-xl
                              bg-triaryD text-white light:hover:text-primaryD hover:bg-primaryD
                              light:bg-gray-200 light:text-primaryD light:hover:bg-gray-100
                              transition font-semibold flex items-center justify-center overflow-hidden gap-2"
                    onClick={() => navigate('/price')}
                  >
                    {/* Icon */}
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 30 30"
                      >
                        <defs>
                          <linearGradient id="starGradient" gradientTransform="rotate(60)">
                            <stop offset="40%" stopColor="#3B82F6" />   
                            <stop offset="100%" stopColor="#EC4899" /> 
                          </linearGradient>
                        </defs>

                        <path
                          fill="url(#starGradient)"
                          d="M14.217,19.707l-1.112,2.547c-0.427,0.979-1.782,0.979-2.21,0l-1.112-2.547c-0.99-2.267-2.771-4.071-4.993-5.057
                            L1.73,13.292c-0.973-0.432-0.973-1.848,0-2.28l2.965-1.316
                            C6.974,8.684,8.787,6.813,9.76,4.47l1.126-2.714
                            c0.418-1.007,1.81-1.007,2.228,0L14.24,4.47
                            c0.973,2.344,2.786,4.215,5.065,5.226l2.965,1.316
                            c0.973,0.432,0.973,1.848,0,2.28l-3.061,1.359
                            C16.988,15.637,15.206,17.441,14.217,19.707z"
                        />
                      </svg>

                    </span>

                    {/* Text */}
                    <span
                      className="group-hover:bg-linear-to-r from-blue-500 via-red-500 to-green-500
                                bg-size-[300%_100%] bg-clip-text text-transparent
                                bg-white light:bg-primaryD font-bold
                                transition-all duration-200 hover:animate-gradient-move"
                    >
                      Image Generator
                    </span>
                  </button>
            </div> 
          </div>         
          <div className="max-w-6xl w-full h-fit mx-auto flex flex-col px-6 py-8 bg-primaryD light:bg-black/7  rounded-xl ">

            {/* Title Input */}
            <div className="w-full flex flex-row gap-2">
                {/* Category Selector */}
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-[20%] mb-4 px-4 font-semibold py-2 rounded-md bg-secondaryD light:bg-primary  focus:outline-none focus:ring-2 focus:ring-logo light:focus:ring-logo2"
                >
                <option value="Techonlogy">Techonlogy</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Education">Education</option>
                <option value="Video">Video</option>
                </select>

                <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-[80%] mb-4 px-4 font-bold py-2 rounded-md bg-secondaryD light:bg-primary focus:outline-none focus:ring-2 focus:ring-logo light:focus:ring-logo2"
                />
            </div>

            {/* Content Input - hidden for Video */}
            {category !== "Video" && (
              <textarea
                placeholder="Write your content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full text-lg mb-4 px-4 py-2 rounded-md bg-secondaryD light:bg-primary  h-120 resize-none focus:outline-none focus:ring-2 focus:ring-logo light:focus:ring-logo2"
              />
            )}

            {/* File Upload */}
            <div className="bg-secondaryD light:bg-primary mb-5 h-20 w-full flex-row flex justify-center items-center rounded-xl border-2 border-transparent hover:border-logo light:hover:border-logo2">
                <FaUpload className="text-xl mb-2 mx-2" />
                <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="mb-4  text-xl "
                accept={category === "Video" ? "video/*" : "image/*"}
                />
                
            </div>

            {/* Post Button */}
            <button
              onClick={handlePost}
              className="px-6 py-2 bg-logo/70 light:bg-logo2/70 hover:bg-logo light:hover:bg-logo2 rounded-md"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Create;
