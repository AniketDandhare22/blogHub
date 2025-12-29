import {
  HiMoon,
  HiSun,
  HiLogout,
  HiTrash,
  HiUser,
  HiKey
} from "react-icons/hi";
import UImage from './assets/upqk2y.png'
import { useContext } from "react";
import { ThemeData } from "./theme/ThemeContext";
import Navbar from "./Navbar";
import Pimage from "./assets/profile.avif"

function Settings(e) {
  const { dark, toggleTheme } = useContext(ThemeData);

  const user = {
    username: "SoulReaper",
    email: "soulreaper@email.com",
    joined: "January 2024",
    avatar: UImage,
  };
  const IMg =e.isAuth? user.avatar: Pimage;
  console.log(e)
  return (
    <div
      className={`${dark ? "" : "light"} min-h-screen
      text-white light:text-primaryD
      bg-secondaryD light:bg-secondary
      `}
    >
      <Navbar e={e} credits={e.credits} token={e.token}/>

      <div className="max-w-[1100px]  mx-auto px-6 py-8 overflow-hidden">

        {/* Page Title */}
        <h1 className="text-3xl font-semibold mb-8">Account Settings</h1>

        {/* PROFILE HEADER */}
        <div
          className="flex items-center gap-6 p-6 rounded-2xl
          bg-primaryD light:bg-white shadow-lg"
        >
          <img
            src={IMg}
            className="w-28 h-28 rounded-full
            border-2 border-btncolor object-cover"
          />

          <div className="flex flex-col gap-1 p-2">
            <h2 className="text-xl font-semibold">{e.isAuth?user.username:"Guest! Welcome"}</h2>
            <p className="text-sm opacity-70">{e.isAuth?user.email:"Login for better Experience"}</p>
            <p className="text-xs opacity-50">
              Member since {e.isAuth?user.joined:"We Welcome you to this Dynamic Blogging Site"}
            </p>
          </div>
        </div>

        {/* ACCOUNT SECTION */}
        <Section title="Account" >
          <SettingItem icon={<HiUser />} label="Edit Profile" />
          <SettingItem icon={<HiKey />} label="Change Password" />
          <SettingItem
            icon={<HiTrash />}
            label="Delete Account"
            danger
          />
        </Section>

        {/* APPEARANCE */}
        <Section title="Appearance">
          <button
            onClick={toggleTheme}
            className="setting-row"
          >
            <span className="flex items-center gap-3">
              {dark ? <HiMoon /> : <HiSun />}
              Theme
            </span>
            <span className="text-sm opacity-70">
              {dark ? "Dark" : "Light"}
            </span>
          </button>
        </Section>

        {/* SECURITY */}
        <Section title="Security">
          <button
            className="setting-row text-red-400 hover:bg-red-500/10"
            onClick={()=>{
                e.logout();
            }}
          >
            <HiLogout />
            Logout
          </button>
        </Section>

      </div>
    </div>
  );
}

/* ---------------- Small Reusable Components ---------------- */

const Section = ({ title, children }) => (
  <div
    className="mt-8 rounded-2xl p-5
    bg-primaryD/80 light:bg-white shadow-lg"
  >
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="flex flex-col divide-y
      divide-txSecondaryD/40 gap-y-2 light:divide-gray-200">
      {children}
    </div>
  </div>
);

const SettingItem = ({ icon, label, danger }) => (
  <button
    className={`setting-row ${
      danger
        ? "text-red-400 hover:bg-red-500/10"
        : ""
    }`}
  >
    <span className="flex items-center gap-3">
      {icon}
      {label}
    </span>
  </button>
);

export default Settings;
