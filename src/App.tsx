import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./client/pages/AppLayout";
import Home from "./client/pages/Home";
import Contact from "./client/pages/Contact";
import Register from "./client/pages/Register";
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Logout from "./admin/pages/Logout";
import { RepositoryProvider } from "./provider/RepositoryProvider";
import DriverInfo from "./admin/pages/DriverInfo";
import PassengerInfo from "./admin/pages/PassengerInfo";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <RepositoryProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Router>
            <Routes>
              <Route path="/*" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="register" element={<Register />} />
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="download" element={<Download />} />
              </Route>
              <Route path="/admin/*" element={<Admin_Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="onlinedriver" element={<Onlinedriver />} />
                <Route path="drivers" element={<Driver />} />
                <Route path="drivers/:id" element={<DriverInfo />} />
                <Route path="passengers" element={<Passengers />} />
                <Route path="passengers/:id" element={<PassengerInfo />} />
                <Route path="ratings" element={<Rating />} />
                <Route path="rides" element={<Ride />} />
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
        </QueryClientProvider>
      </RepositoryProvider>
    </>
  );
}

export default App;
