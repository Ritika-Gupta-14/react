import { Header, Footer } from "./components/index";
import { useEffect, useState } from "react";
import "./App.css";
import config from "./conf/config";
import { useDispatch } from "react-redux";
import authService from "./supabase/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getUserInfo()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(setLoading(false));
  }, []);
  if (loading) <div>Loading.....</div>;
  else {
    return (
      <>
        <div className="bg-gray-900 w-screen text-blue-300 min-h-screen text-2xl font-bold flex justify-between items-center flex-wrap ">
          <div className="w-full block text-center  ">
            <Header />
            <Outlet/>
           <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
