import React, { useContext } from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import { useEffect } from "react";

const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);
  console.log("account", account);

  const getDetailsValidUser = async () => {
    const res = await fetch("validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log("data", data);

    if(res.status !== 201){
      console.log("error");
    }else{
      console.log(setAccount(data))
    }

  }

  useEffect(() => {
    getDetailsValidUser();
  }, []);
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlog">
            <NavLink to="/">
              <img src="./amazon3.png" alt="" style={{ width: "8rem" }} />
            </NavLink>
          </div>
          <div className="nav_searchbar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">Signin</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account.carts.length} color="warning">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/buynow">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}

            <p>Cart</p>
          </div>
          {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
