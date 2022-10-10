import React, { useContext, useState } from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Rightheader from "./Rightheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);
  const { products } = useSelector((state) => state.getproductsdata);
  const [dropen, setDropen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [listopen, setListopen] = useState(true);
  const [text, setText] = useState("");
  const history = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    // console.log("data", data);

    if (res.status !== 201) {
      console.log("error");
    } else {
      setAccount(data);
    }
  };

  const handleOpen = () => {
    setDropen(true);
  };

  const handleDrclose = () => {
    setDropen(false);
  };

  const logoutUser = async () => {
    const res1 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data1 = await res1.json();
    console.log("data1", data1);

    if (res1.status !== 201) {
      console.log("error");
    } else {
      toast.success("User Logout Successfully 😃!", {
        position: "top-center",
      });
      setAccount(false);
      history("/");
    }
  };

  const getText = (item) => {
    setText(item);
    setListopen(false);
  };

  useEffect(() => {
    getDetailsValidUser();
  }, []);
  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handleOpen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer open={dropen} onClose={handleDrclose}>
            <Rightheader logClose={handleDrclose} logoutuser={logoutUser} />
          </Drawer>
          <div className="navlog">
            <NavLink to="/">
              <img src="./amazon3.png" alt="" style={{ width: "8rem" }} />
            </NavLink>
          </div>
          <div className="nav_searchbar">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Your Products"
              onChange={(e) => getText(e.target.value)}
            />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>

            {/*  Search Filter */}

            {text && (
              <List className="extrasearch" hidden={listopen}>
                {products
                  .filter((product) =>
                    product.title.longTitle
                      .toLowerCase()
                      .includes(text.toLowerCase())
                  )
                  .map((product) => (
                    <ListItem>
                      <NavLink
                        to={`/getproductsone/${product.id}`}
                        onClick={() => setListopen(true)}
                      >
                        {product.title.longTitle}
                      </NavLink>
                    </ListItem>
                  ))}
              </List>
            )}
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
            <ToastContainer />
            <p>Cart</p>
          </div>
          {account ? (
            <Avatar
              className="avtar2"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {account.fname[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              className="avtar"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            ></Avatar>
          )}
          {/* <Button>Dashboard</Button> */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {account ? (
              <MenuItem
                onClick={() => {
                  handleClose();
                  logoutUser();
                }}
              >
                <LogoutIcon style={{ fontSize: "20px", marginRight: "3px" }} />{" "}
                Logout
              </MenuItem>
            ) : (
              ""
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
