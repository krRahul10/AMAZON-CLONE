import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import "./cart.css";
const Cart = () => {
  const { id } = useParams("");
  const history = useNavigate()
  const { account, setAccount} = useContext(LoginContext)
  // console.log("account", account);
  const [individualdata, setIndividualdata] = useState([]);

  const getIndividualData = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);

    if (!data || data.status === 422) {
      // console.log("No Data Available");
    } else {
      // console.log("GetData")
      setIndividualdata(data);
    }
  };

  useEffect(() => {
    getIndividualData();
  }, [id]);

  // add to cart function 

  const addToCart = async (id) => {
    const checkres = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        individualdata,
      }),
      credentials: "include",
    });

    const data1 = await checkres.json();
    console.log("frontend Data in cart", data1);

    if (checkres.status === 401 || !data1) {
      alert("user Invalid");
      console.log("User Invalid");
    } else {
      alert("Item added to cart successfully !");
      // console.log("Data added to cart successfully");
      setAccount(data1)
      history("/buynow")
    }
  };
  return (
    <div className="cart_section">
      {individualdata && Object.keys(individualdata).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={individualdata.url} alt="profileImage" />
            <div className="cart_btn">
              <button
                className="cart_btn1"
                onClick={() => addToCart(individualdata.id)}
              >
                Add to Cart
              </button>
              <button className="cart_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{individualdata.title.shortTitle}</h3>
            <h4>{individualdata.title.longTitle}</h4>
            <Divider />
            <p className="mrp">M.R.P. : ₹{individualdata.price.mrp}.00</p>
            <p>
              Deal Of the Day:{" "}
              <span style={{ color: "#B12704" }}>
                ₹{individualdata.price.cost}.00
              </span>
            </p>
            <p>
              You save : :{" "}
              <span style={{ color: "#B12704" }}>
                ₹{individualdata.price.mrp - individualdata.price.cost}.00 (
                {individualdata.price.discount})
              </span>
            </p>
            <div className="discount_box">
              <h5>
                Discount:{" "}
                <span style={{ color: "#111" }}>{individualdata.discount}</span>
              </h5>
              <h4>
                Free Delivery :{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Oct 2 - 10
                </span>
                Details
              </h4>
              <p>
                Fastest Delivery{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Tomorrow 11 AM
                </span>
              </p>
            </div>
            <p className="description">
              About the Item :
              <span
                style={{
                  color: "#565959",
                  fontWeight: "500",
                  fontSize: "14",
                  letterSpacing: "0.04px",
                }}
              >
                {individualdata.description}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
