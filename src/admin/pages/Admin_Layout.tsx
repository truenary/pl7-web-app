import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import NavBar from "../components/layout/NavBar";
import { useEffect } from "react";

export default function Admin_Layout() {

  const navigate = useNavigate();

   useEffect(() => {
  
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken ) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <div className="h-screen overflow-hidden">
        <NavBar />
        <main className="flex">
          <Sidebar />
          <div className="pt-0 px-4  bg-blue-50 mt-0 mx-auto flex-1 flex-col max-h-screen overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
