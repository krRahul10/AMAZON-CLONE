import { Divider } from "@mui/material";
import React from "react";
import "./buynow.css";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";
const Buynow = () => {
  return <div className="buynow_section">
    <div className="buynow_container">
        <div className="left_buy">
            <h1>Shopping Cart</h1>
            <p>Selection All</p>
            <span className="leftbuyprice">Price</span>
            <Divider/>
            <div className="item_container">
                <img src="" alt="item_Image" />
                <div className="item_details">
                    <h3>Moshyd</h3>
                    <h3>smart</h3>
                    <h3 className="diffrentprice">73564</h3>
                    <p className="unusuall">Usually</p>
                    <p>Elible</p>
                    <img src="" alt="fullfilled" />
                    <Option/>
                </div>
                <h3 className="item_price">$645</h3>
            </div>
            <Divider/>
            <Subtotal/>
        </div>
        <Right/>
    </div>
  </div>;
};

export default Buynow;
