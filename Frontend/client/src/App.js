import "./App.css";
import Navbar from "./Components/header/Navbar";
import Newnav from "./Components/newnavbaar/Newnav";
import Maincomp from "./Components/home/Maincomp";
import Footer from "./Components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Signin from "./Components/signup_sign/Signin";
import Signup from "./Components/signup_sign/Signup";
import Cart from "./Components/cart/Cart";
import Buynow from "./Components/buynow/Buynow";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {data ? (
        <>
          <Navbar />
          <Newnav />
          <Routes>
            <Route path="/" element={<Maincomp />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            <Route path="/buynow" element={<Buynow />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress color="success" />
          <h2>Loading ...</h2>
        </div>
      )}
    </div>
  );
}

export default App;
