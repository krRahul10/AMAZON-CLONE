import React from "react";

const Right = () => {
  return (
    <div className="right_buy">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        alt="Amazon_Image"
      />
      <div className="cost_right">
        <p>Your Order is Eligible for Free Delivery</p>
        <br />
        <span style={{ color: "#565959" }}>Select this Option for Checkout</span>
        <h3>
          Subtotal(1 item):<span style={{ fontWeight: "700" }}>40494</span>
        </h3>
        <button className="rightbuy_btn">Process to buy</button>
        <div className="emi">Emi Available</div>
      </div>
    </div>
  );
};

export default Right;
