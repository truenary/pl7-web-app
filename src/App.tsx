import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./client/pages/AppLayout";
import Home from "./client/pages/Home";
import Contact from "./client/pages/Contact";
// import Register from "./client/pages/Register";
import Blog from "./client/pages/Blog";
import About from "./client/pages/About";
import Download from "./client/pages/Download";
import PageNotFound from "./shared/PageNotFound";
import Dashboard from "./admin/pages/Dashboard";
import Driver from "./admin/pages/Driver";

import Admin_Layout from "./admin/pages/Admin_Layout";
import Onlinedriver from "./admin/pages/Onlinedriver";
import Passengers from "./admin/pages/Passengers";
import Rating from "./admin/pages/Rating";
import Ride from "./admin/pages/Ride";
import { Toaster } from "react-hot-toast";
import Login from "./client/pages/Login";
import Logout from "./admin/pages/Logout";
import { RepositoryProvider } from "./provider/RepositoryProvider";
import DriverInfo from "./admin/pages/DriverInfoPage";
import RidesHistory from "./admin/components/RidesHistory/RidesHistory";
import { RideInfo } from "./admin/components/Rides/RideInfo";
import FormWithNumber from "./client/components/register/FormWithNumber";
import OtpForm from "./client/components/register/OtpForm";
import UserRegisterform from "./client/components/register/UserRegisterForm";

function App() {
  return (
    <>
      <RepositoryProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="registerPhone" element={<FormWithNumber />} />
              <Route path="checkOtp" element={<OtpForm />} />
              <Route path="register" element={<UserRegisterform />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="download" element={<Download />} />
            </Route>
            <Route path="/admin/*" element={<Admin_Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="onlinedriver" element={<Onlinedriver />} />
              <Route path="drivers" element={<Driver />} />
              <Route path="driverInfo" element={<DriverInfo />} />
              <Route path="passengers" element={<Passengers />} />
              <Route path="ratings" element={<Rating />} />
              <Route path="rides" element={<Ride />} />
              <Route path="rideInfo" element={<RideInfo />} />
              <Route path="rideshistory" element={<RidesHistory />} />
               <Route path="Blog" element={<BlogAdmin />} />
              <Route path="logout" element={<Logout />} />
            </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
          <Toaster
            position="top-center"
            gutter={12}
            toastOptions={{
              success: {
                duration: 4000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                padding: "16px 24px",
                maxWidth: "500px",
                backgroundColor: "blue-100",
              },
            }}
            containerStyle={{ margin: "8px" }}
          />
       
      </RepositoryProvider>
    </>
  );
}

export default App;
