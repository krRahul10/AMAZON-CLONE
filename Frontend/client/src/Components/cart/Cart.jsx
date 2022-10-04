import { Divider } from "@mui/material";
import React from "react";
import "./cart.css";
const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="" alt="" srcset="" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>kshs</h4>
          <Divider />
          <p className="mrp">8263</p>
          <p>
            Deal Of the Day: <span style={{ color: "#B12704" }}>72673</span>
          </p>
          <p>
            You save : : <span style={{ color: "#B12704" }}>72673</span>
          </p>
          <div className="discount_box">
            <h5>
              Discount: <span style={{ color: "#111" }}>Extra 10% off</span>
            </h5>
            <h4>
              Free Delivery :{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>Oct 2-10</span>
              Details
            </h4>
            <p>
              Fastest Delivery{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">About the Item :
            <span style={{ color:"#565959", fontWeight:"500",fontSize:"14",letterSpacing:"0.04px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              eveniet tempore ipsam repudiandae voluptatem. Provident
              repudiandae aspernatur adipisci quia modi pariatur odit quo
              quibusdam soluta veniam, id fuga, obcaecati assumenda.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
