import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";
import { useTheme } from "./theme/useTheme";
import { useState,useEffect } from "react";
function Pricing(e) {
    const {dark} =useTheme();
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        // Update the angle continuously
        const interval = setInterval(() => {
        setAngle(prev =>(prev + 3) % 360); // increase 2 degrees per tick
        }, 50); // 50ms → smooth movement
        return () => clearInterval(interval);
    }, []);
  return (
    <div className={`${dark?"":"light"} lg:h-screen md:h-screen h-fit bg-primaryD light:bg-secondary text-white light:text-primaryD light:text-primaryD `}>
        <Navbar e={e} credits={e.credits} token={e.token}/>
      <div className="max-w-[1300px] h-[85%] px-10 pt-5 mt-10 rounded-2xl mx-auto text-center light:bg-primary bg-secondaryD">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-3">Simple Pricing</h1>
        <p className="text-gray-400 light:text-txSecondary mb-14">
          Choose the plan that fits your needs
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Free Plan */}
          <div className="rounded-2xl border border-white/10 bg-primaryD light:bg-black/10 shadow-2xl p-8 backdrop-blur">
            <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold rounded-full bg-secondaryD light:bg-primary">
                Free
              </span>
            <h2 className="text-2xl font-semibold mb-2">Free</h2>
            <p className="text-4xl font-bold mb-6">$0 (Free)</p>

            <ul className="space-y-4 text-gray-300 light:text-txSecondary mb-8 text-left">
              <li className="flex items-center gap-3">
                <AiOutlineCheck className="text-green-400 text-lg" />
                Create & read posts
              </li>
              <li className="flex items-center gap-3">
                <AiOutlineCheck className="text-green-400 text-lg" />
                Basic editor
              </li>
              <li className="flex items-center gap-3">
                <AiOutlineCheck className="text-green-400 text-lg" />
                Image upload
              </li>
              <li className="flex items-center gap-3">
                <AiOutlineClose className="text-red-400 text-lg" />
                Ads included
              </li>
              <li className="flex items-center gap-3">
                <AiOutlineClose className="text-red-400 text-lg" />
                AI generation
              </li>
            </ul>

            <button className="active:scale-97 w-full py-3 rounded-xl border border-white/10 font-bold hover:bg-secondaryD transition bg-secondaryD/50 light:bg-logo2/50 light:hover:bg-logo2/70" onClick={()=>{e.setCredits("Free")}}>
              Get Started
            </button>
          </div>

          {/* Plus Plan */}
          <div className="relative rounded-2xl p-[2px]">
            {/* Animated Gradient Border */}
            <div
              className="absolute inset-0 rounded-2xl scale-101 blur-[8px]"
              style={{
                background:`conic-gradient(
                      from ${angle}deg,
                      skyblue,
                      cyan,
                      #22D3EE,
                      transparent
                    )`,
              }}
            ></div>

            {/* Inner Card */}
            <div className="relative rounded-2xl bg-primaryD light:bg-white backdrop-blur p-8">
              {/* Badge */}
              <span className="
                inline-block mb-3 px-4 py-1 text-xs font-semibold rounded-full
                bg-cyan-500/20 text-cyan-300
                light:bg-cyan-100 light:text-cyan-700
              ">
                Popular
              </span>

              {/* Title */}
              <h2 className="text-2xl font-semibold mb-2">Plus</h2>

              {/* Price */}
              <p className="text-4xl font-bold mb-6">$9.99 / month</p>

              {/* Features */}
              <ul className="space-y-4 text-gray-300 light:text-txSecondary mb-8 text-left">
                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  Everything in Free
                </li>

                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  99 AI credits / month
                </li>

                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  AI text generation (1 credit)
                </li>

                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  AI image generation (2 credits)
                </li>

                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  Ad-free experience
                </li>
              </ul>

              {/* Button */}
              <button
                className="
                  active:scale-95 w-full py-3 rounded-xl font-semibold
                  bg-gradient-to-r from-blue-600 to-cyan-600
                  hover:from-cyan-600 hover:to-cyan-300
                  text-white transition
                "
                onClick={() =>
                  {   e.setCredits("Plus");
                      e.setToken(prev=>prev+99);
                  }}
              >
                Upgrade to Plus
              </button>
            </div>
          </div>


          {/* Pro Plan */}
            <div className="relative rounded-2xl p-[2px]">
              {/* Animated Gradient Border */}
              <div
              className="absolute inset-0 rounded-2xl scale-101 blur-[8px]"
              style={{
              background: `${dark?`conic-gradient(from ${angle}deg,orange, #FF6900,transparent)`:`conic-gradient(from ${angle}deg,violet, #8639D3,transparent)`}`,
              }}
          ></div>
            {/* Inner Card */}
            <div className="relative rounded-2xl bg-primaryD light:bg-white  backdrop-blur p-8">
              <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold rounded-full bg-logo light:bg-logo2">
                BEST VALUE
              </span>

              <h2 className="text-2xl font-semibold mb-2">Pro</h2>
              <p className="text-4xl font-bold mb-6">$39.99 /year</p>

              <ul className="space-y-4 text-gray-300 light:text-txSecondary mb-8 text-left">
                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  Everything in Free
                </li>
                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  Ad-free experience
                </li>
                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  AI text generation
                </li>
                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  AI image generation
                </li>
                <li className="flex items-center gap-3">
                  <AiOutlineCheck className="text-green-400 text-lg" />
                  Priority features
                </li>
              </ul>
            
                  {/* Button */}
                  <button className=" active:scale-97 relative z-10 w-full border border-white/10 py-3 rounded-xl light:bg-logo2/50 bg-triaryD text-logo hover:text-white light:hover:text-primaryD  hover:bg-logo  light:text-black  light:hover:bg-logo2 transition font-semibold "
                          onClick={()=>{e.setCredits("Pro")}}
                  >
                      Upgrade to Pro
                  </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
