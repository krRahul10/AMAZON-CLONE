import React, { useContext, useState } from "react";
import "./rightheader.css";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Rightheader = ({ logClose, logoutuser }) => {
  const { account, setAccount } = useContext(LoginContext);

  return (
    <>
      <div className="rightheader">
        <div className="right_nav">
          {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
          {account ? <h3>Hello ! {account.fname.toUpperCase()}</h3> : ""}
        </div>
        <div className="nav_btn" onClick={() => logClose()}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Shop By Category</NavLink>
          <Divider style={{ width: "100%", marginLeft: "-20px" }} />
          <NavLink to="/">Today's Deal</NavLink>
          {account ? (
            <NavLink to="/buynow">Your Order's</NavLink>
          ) : (
            <NavLink to="/login">Your Order's</NavLink>
          )}
          <Divider style={{ width: "100%", marginLeft: "-20px" }} />
          <div className="flag">
            <NavLink to="/">Setting</NavLink>
            <img src="./india.png" style={{width:"35px", marginLeft:"10px"}} alt="" />
          </div>
          {account ? (
            <div className="flag">
              <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
              <h3
                style={{ cursor: "pointer", fontWeight: 500 }}
                onClick={() => logoutuser()}
              >
                Logout
              </h3>
            </div>
          ) : (
            <NavLink to="/login">SignIn</NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Rightheader;
