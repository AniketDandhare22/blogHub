import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { useTheme } from "./theme/useTheme";
import demo from './assets/upqk2y.png';
import posts from "./data/post.json"; // import your JSON array

function Detail(e) {
  const { dark } = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) return <p>Post not found</p>;

  return (
    <div className={`w-full min-h-screen ${!dark ? "light" : ""} bg-secondaryD light:bg-secondary flex flex-col`}>
      <Navbar e={e} credits={e.credits} />

      <button
        className="m-3 w-25 flex items-center gap-2 bg-primaryD light:bg-secondary border border-white/20 px-4 py-2 rounded-lg text-white light:text-black text-sm font-semibold hover:scale-105 hover:shadow-md transition"
        onClick={() => navigate("/")}
      >
        ← Back
      </button>

      <div className="w-full flex justify-center">
        <div className={`rounded-t-2xl overflow-hidden shadow-sm hover:shadow-lg transition m-4 max-w-[1200px] w-full bg-primaryD light:bg-primary`}>
          {/* Post Image */}
          {post.type === "blog" && post.image && (
            <div className="w-full h-[420px] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Video */}
          {post.type === "video" && post.video && (
            <div className="w-full h-[700px] overflow-hidden">
              <video controls className="w-full h-full object-cover rounded-t-lg">
                <source src={post.video} type="video/mp4" />
              </video>
            </div>
          )}

          {/* Content */}
          <div className="p-6 space-y-6">
            {post.type === "blog"  && (
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition">
              {post.category.toLowerCase()}
            </span>
          )}

            <h1 className="text-3xl font-bold light:text-txPrimary text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 text-xs opacity-70 light:text-txPrimary text-white">
              <span>👤 {post.author}</span>
              <span>• {post.date}</span>
              {post.readTime && <span>• ⏱ {post.readTime}</span>}
            </div>

            <p className="text-base light:text-txSecondary text-txSecondaryD leading-relaxed">
              {post.description}
            </p>

            {/* Render sections if blog has details */}
            {post.details?.sections?.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-semibold text-white light:text-txPrimary pt-4">
                  {section.title}
                </h2>
                <p className="light:text-txSecondary text-txSecondaryD leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Actions */}
            <div className="flex gap-3 pt-6">
              {post.likes && (
                <button className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg text-white light:text-black light:bg-secondary bg-secondaryD/70 hover:bg-secondaryD transition">
                  ❤️ {post.likes}
                </button>
              )}
              <button className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg text-white light:text-black light:bg-secondary bg-secondaryD/70 hover:bg-secondaryD transition">
                🔗 Share
              </button>
            </div>
            {/* Author Info */}
                <div className="mt-12 pt-8 border-t border-white/10 light:border-black/10">
                <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <img
                    src={demo}
                    alt="author"
                    className="w-16 h-16 rounded-full object-cover"
                    />

                    {/* Info */}
                    <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-white light:text-txPrimary">
                        Wraith God
                    </h4>

                    <p className="text-sm light:text-txSecondary text-txSecondaryD">
                        Frontend Engineer & Technical Writer
                    </p>

                    <p className="text-sm light:text-txSecondary text-txSecondaryD leading-relaxed max-w-xl">
                        Sarah writes about modern frontend development, React architecture,
                        and UI engineering. She focuses on building scalable,
                        developer-friendly applications and sharing real-world insights
                        from production projects.
                    </p>

                    
                    
                    </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
