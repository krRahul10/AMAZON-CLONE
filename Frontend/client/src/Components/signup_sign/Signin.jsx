import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [logdata, setLogdata] = useState({
    email: "",
    password: "",
  });

  // console.log(logdata);

  const addData = (e) => {
    const { name, value } = e.target;

    setLogdata(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = logdata;

    if (email === "") {
      toast.warn("Please fill your email", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.warn("Please fill your password", {
        position: "top-center",
      });
    } else {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      // console.log("data from signin", data);

      if (res.status === 400 || !data) {
    
        toast.warn("Invalid Details", {
          position: "top-center",
        });
      } else {
        // alert("Data add successfully")
        console.log("data from login ", data);
        toast.success("User LoggedIn successfully", {
          position: "top-center",
        });

        setLogdata({ ...logdata, email: "", password: "" });
      }
    }
  };

  return (
    <div>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./amazon1" alt="" />
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={logdata.email}
                  onChange={addData}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form_data">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={addData}
                  value={logdata.password}
                  placeholder="At least 6 char"
                />
              </div>
              <button className="signin_btn" onClick={sendData}>
                Continue
              </button>
            </form>
            <div className="create_accountinfo">
              <p>New to Amazon?</p>
              <NavLink to="/register">
                <button>Create your Amazon Account</button>
              </NavLink>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </section>
    </div>
  );
};

export default Signin;
