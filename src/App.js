import Navbar from "./components/Navbar";
import DisplayHome from "./components/DisplayHome";
import {BrowserRouter,Routes,Route} from'react-router-dom';
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full">
      
      <BrowserRouter>
        <Navbar />
        
        <Routes>
            <Route exact path="/" element={<DisplayHome/>}/>
            <Route exact path='/Products'  element={<Products/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
