import Home from './home.jsx'
import SignUp from "./signUp.jsx";
import Error from "./error.jsx";
import { useState } from "react";
import {  Routes, Route } from "react-router-dom";
import Detail from './detail.jsx';
import Settings from './Settings.jsx';
import Create from './CreatePost.jsx';
import Price from './Pricing.jsx';
function App() {
  const [credits,setCredits] =useState('Free');
  const [token,setToken] =useState(0);
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("auth") === "true"
  );

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
  };

  return (
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} logout={logout} credits={credits} token={token} />} />
        <Route path="/auth" element={<SignUp login={login} />} />
        <Route path="*" element={<Error />}/>
        <Route path="/detail/:id" element={<Detail isAuth={isAuth} logout={logout} credits={credits} token={token}/>}/>
        <Route path="/settings" element={<Settings isAuth={isAuth} logout={logout} credits={credits} token={token}/>} />
        <Route path="/createPost" element={<Create isAuth={isAuth} logout={logout} credits={credits} token={token} setToken={setToken} setCredits={setCredits} />} />
        <Route path="/price" element={<Price isAuth={isAuth} logout={logout} credits={credits} setCredits={setCredits} token={token} setToken={setToken}/>} />
      </Routes>
  );
}

export default App;
