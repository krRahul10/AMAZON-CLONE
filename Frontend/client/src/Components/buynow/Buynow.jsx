import { Divider } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./buynow.css";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";
const Buynow = () => {
  const [cartdata, setCartData] = useState("");
  console.log("cartdata.carts", cartdata);

  const getDataBuy = async () => {
    const res = await fetch("/cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (res.status !== 201) {
      console.log("error");
    } else {
      setCartData(data.carts);
    }
  };

  useEffect(() => {
    getDataBuy();
  }, []);
  return (
    <>
      {cartdata.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Selection All</p>
              <span className="leftbuyprice">Price</span>
              <Divider />
              {cartdata.map((elem, index) => {
                return (
                  <>
                    <div className="item_container">
                      <img src={elem.url} alt="item_Image" />
                      <div className="item_details">
                        <h3>{elem.title.longTitle}</h3>
                        <h3>{elem.title.shortTitle}</h3>
                        <h3 className="diffrentprice">₹{elem.price.cost}.00</h3>
                        <p className="unusuall">
                          Usually dispatched in 8 days.
                        </p>
                        <p>Eligible for FREE Shipping</p>
                        <img
                          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                          alt="logo"
                        />
                        <Option deleteData={elem.id} get={getDataBuy} />
                      </div>
                      <h3 className="item_price">₹{elem.price.cost}.00</h3>
                    </div>
                  </>
                );
              })}
              <Divider />
              <Subtotal item={cartdata} />
            </div>
            <Right item={cartdata} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Buynow;
