import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthRoute from "./components/AuthRoute";
import NotFound from './pages/NotFound'
import Home from "./pages/Home";
import PasswordReset from "./pages/PasswordReset";
import NavBar from "./components/NavBar";
import CreateBlog from "./pages/CreateBlog";
import MyBlogs from "./pages/MyBlogs";
import FeaturedBlogs from "./pages/FeaturedBlogs";
import LatestBlogs from "./pages/LatestBlogs";
import BlogPage from "./pages/BlogPage";
import UpdateBlog from "./pages/UpdateBlog";

const App = () => {
  return (
    <>
      <div
        className=""
        style={{ minHeight: "100vh" }}>
        
        <div style={{width: '100vw'}}>
          <NavBar />
          <Routes>
            <Route element={<AuthRoute />}>
              
              <Route path="/createblog" element={<CreateBlog />} />
              <Route path="/myblogs" element={<MyBlogs />} />
              <Route path='/updateblog/:id' element={<UpdateBlog />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route exact path='/blog/:id' element={<BlogPage />} />
            <Route path="/latestblogs" element={<LatestBlogs />} />
            <Route path="/featuredblogs" element={<FeaturedBlogs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="*" element={ <NotFound />}/>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
