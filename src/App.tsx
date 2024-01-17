import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./client/pages/AppLayout";
import Home from "./client/pages/Home";
import Contact from "./client/pages/Contact";
import Register from "./client/pages/Register";
import Blog from "./client/pages/Blog";
import About from "./client/pages/About";
import Login from "./client/pages/Login";
import Download from "./client/pages/Download";
import PageNotFound from "./shared/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/download" element={<Download />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="admin" element={<AdminMain />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
