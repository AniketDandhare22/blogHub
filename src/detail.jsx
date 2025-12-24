import React from "react";
import Navbar from "./Navbar.jsx";
import { useTheme } from "./theme/useTheme";
import demo from './assets/upqk2y.png'
import { useNavigate } from "react-router-dom";

function Detail(e) {
    const { dark } = useTheme();
    
    const navigate = useNavigate();
    const CImage="https://images.wallpapersden.com/image/download/high-tech-earth_bGdqZm6UmZqaraWkpJRnamtlrWZpaWU.jpg"
  return (
    <div className={`w-full min-h-screen ${!dark ? "light" : ""} bg-secondaryD light:bg-secondary flex flex-col`}>
      <Navbar e={e} theme={dark} />
        <div className="">
            <button
                className=" m-3
                            flex items-center gap-2
                            bg-primaryD light:bg-secondary
                            border border-white/20
                            px-4 py-2 rounded-lg
                            text-white light:text-black
                            text-sm font-semibold
                            hover:scale-105 hover:shadow-md
                            transition"
                onClick={()=>{navigate("/")}}
                >
                ← Back
                </button>
        </div>
      <div className="w-full flex justify-center">
        
        <div
          className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition m-4 max-w-[1200px] w-full bg-primaryD light:bg-primary`}
        >
          {/* Image */}
          <div className="w-full h-[420px] overflow-hidden">
            <img
              src={CImage}
              alt="blog"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Tag */}
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition">
              technology
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold light:text-txPrimary text-white leading-tight">
              Getting Started with React and TypeScript
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs opacity-70 light:text-txPrimary text-white">
              <span>👤 Sarah Johnson</span>
              <span>• Dec 10, 2025</span>
              <span>• ⏱ 8 min read</span>
            </div>

            {/* Intro */}
            <p className="text-base light:text-txSecondary text-txSecondaryD leading-relaxed">
              React and TypeScript together form a powerful combination for building
              scalable, maintainable, and production-ready applications.
              In this article, we’ll explore how to get started, why it matters,
              and how you can avoid common pitfalls early in your journey.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-white light:text-txPrimary pt-4">
              Why Use TypeScript with React?
            </h2>

            <p className="light:text-txSecondary text-txSecondaryD leading-relaxed">
              TypeScript adds static typing to JavaScript, helping developers catch
              errors early during development rather than at runtime.
              When used with React, it improves component reliability,
              makes refactoring safer, and provides better editor support.
            </p>

            <ul className="list-disc list-inside space-y-2 light:text-txSecondary text-txSecondaryD">
              <li>Better autocomplete and IntelliSense</li>
              <li>Early detection of bugs</li>
              <li>Improved code readability</li>
              <li>Safer refactoring at scale</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-white light:text-txPrimary pt-4">
              Setting Up Your First Project
            </h2>

            <p className="light:text-txSecondary text-txSecondaryD leading-relaxed">
              You can create a React + TypeScript project using modern tooling like
              Vite or Create React App. These tools provide preconfigured setups
              so you can focus on writing code instead of configuration.
            </p>

            <p className="light:text-txSecondary text-txSecondaryD leading-relaxed">
              Once your project is created, you’ll notice that your components
              are written in <code className="px-1 bg-black/20 rounded">.tsx</code>
              files. This allows you to define props, state, and hooks with proper
              type definitions.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-white light:text-txPrimary pt-4">
              Common Mistakes Beginners Make
            </h2>

            <p className="light:text-txSecondary text-txSecondaryD leading-relaxed">
              Many beginners try to over-type everything or fight the compiler.
              Instead, let TypeScript guide you gradually.
            </p>

            <ul className="list-disc list-inside space-y-2 light:text-txSecondary text-txSecondaryD">
              <li>Using <code>any</code> everywhere</li>
              <li>Ignoring TypeScript errors</li>
              <li>Overcomplicating simple components</li>
              <li>Not typing props and API responses</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-2xl font-semibold text-white light:text-txPrimary pt-4">
              Final Thoughts
            </h2>

            <p className="light:text-txSecondary text-txSecondaryD leading-relaxed">
              React with TypeScript might feel overwhelming at first, but once you
              understand the basics, it becomes an invaluable tool for building
              reliable frontend applications. Start small, stay consistent, and
              let the types work for you—not against you.
            </p>

            {/* Actions */}
            <div className="flex gap-3 pt-6">
              <button className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg text-white light:text-black light:bg-secondary bg-secondaryD/70 hover:bg-secondaryD transition">
                ❤️ 245
              </button>
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
