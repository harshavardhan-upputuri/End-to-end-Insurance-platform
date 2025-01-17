import Navbar from "./components/Navbar";
import DisplayHome from "./Pages/DisplayHome";
import {BrowserRouter,Routes,Route} from'react-router-dom';
import Products from "./Pages/Products";
import Footer from "./components/Footer";
import SingleItem from "./components/SingleItem";
import CartPage from "./Pages/CartPage";
import Application from "./Pages/Application";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
 
 
function App() {
  return (
    <div className="h-full">
      
      <BrowserRouter>
        <Navbar />
        
        <Routes>
            <Route exact path="/" element={<DisplayHome/>}/>
            <Route exact path='/Products'  element={<Products/>}/>
            <Route exact path='/singleproduct/:id' element={<SingleItem/>}/>
            <Route exact path='/cart' element={<CartPage />}/>
            <Route exact path='/application/:id' element={<Application/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            

            
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
