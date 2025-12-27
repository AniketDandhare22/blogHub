import Home from './home.jsx'
import SignUp from "./signUp.jsx";
import Error from "./error.jsx";
import { useState } from "react";
import {  Routes, Route } from "react-router-dom";
import Detail from './detail.jsx';
import Settings from './Settings.jsx';
import Create from './CreatePost.jsx';

function App() {

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
        <Route path="/" element={<Home isAuth={isAuth} logout={logout} />} />
        <Route path="/auth" element={<SignUp login={login} />} />
        <Route path="*" element={<Error />}/>
        <Route path="/detail/:id" element={<Detail isAuth={isAuth} logout={logout}  />}/>
        <Route path="/settings" element={<Settings isAuth={isAuth} logout={logout}/>} />
        <Route path="/createPost" element={<Create isAuth={isAuth} logout={logout}/>} />

      </Routes>
  );
}

export default App;
