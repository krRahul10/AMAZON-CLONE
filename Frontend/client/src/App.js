import "./App.css";
import Navbar from "./Components/header/Navbar";
import Newnav from "./Components/newnavbaar/Newnav";
import Maincomp from "./Components/home/Maincomp";
import Footer from "./Components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Signin from "./Components/signup_sign/Signin";
import Signup from "./Components/signup_sign/Signup";
import Cart from './Components/cart/Cart'
import Buynow from "./Components/buynow/Buynow";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Navbar />
      <Newnav />
      <Routes>
       <Route path="/" element={<Maincomp/>}/>
       <Route path="/login" element={<Signin/>}/>
       <Route path="/register" element={<Signup/>}/>
       <Route path="/getproductsone/:id" element={<Cart/>}/>
       <Route path="/buynow" element={<Buynow/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
