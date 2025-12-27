import { ThemeData } from "./theme/ThemeContext";
import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaUpload } from "react-icons/fa";

function Create(e) {
  const { dark } = useContext(ThemeData);
  const navigate = useNavigate();

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
          className={`${dark ? "" : "light"} min-h-screen text-white light:text-primaryD bg-secondaryD light:bg-secondary`}
        >
          <Navbar e={e} />

         
          <div className="max-w-[1100px] flex flex-col mx-auto px-6 py-8 bg-primaryD light:bg-black/7 mt-10 rounded-xl ">

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
                className="w-full text-lg mb-4 px-4 py-2 rounded-md bg-secondaryD light:bg-primary  h-100 resize-none focus:outline-none focus:ring-2 focus:ring-logo light:focus:ring-logo2"
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
