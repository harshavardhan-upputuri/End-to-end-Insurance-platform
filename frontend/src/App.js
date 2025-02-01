import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import DisplayHome from "./Pages/DisplayHome";
import Products from "./Pages/Products";
import Footer from "./components/Footer";
import SingleItem from "./components/SingleItem";
import CartPage from "./Pages/CartPage";
import Application from "./Pages/Application";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CurrentUser from "./Pages/GetCurrentUser.js"

function Layout({ children }) {
  const location = useLocation();
  const hideNavFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="h-full">
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<DisplayHome />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/singleproduct/:id" element={<SingleItem />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/application/:id" element={<Application />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/currentuser" element={<CurrentUser />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

