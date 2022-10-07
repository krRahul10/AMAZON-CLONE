import React, { useState } from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  console.log(userData);

  const addData = (e) => {
    const { name, value } = e.target;

    setUserData(() => {
      return {
        ...userData,
        [name]: value,
      };
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { fname, email, password, mobile, cpassword } = userData;

    if (fname === "") {
      toast.warn("Please fill your name", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.warn("Please fill your email", {
        position: "top-center",
      });
    } else if (mobile === "") {
      toast.warn("Please fill your mobile number", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.warn("Please fill your password", {
        position: "top-center",
      });
    } else if (cpassword === "") {
      toast.warn("please fill your confirm password", {
        position: "top-center",
      });
    } else if (password.length < 4) {
      toast.warn("password length must be more than 4", {
        position: "top-center",
      });
    } else if (cpassword.length < 4) {
      toast.warn("Confirm password length must be more than 4", {
        position: "top-center",
      });
    } else {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fname, email, password, mobile, cpassword }),
      });
      const data = await res.json();
      // console.log("data from signup", data);

      if (data.status === 422 || !data) {
        // alert("Data is Not Present");
        toast.warn("Invalid Details", {
          position: "top-center",
        });
      } else {
        // alert("Data add successfully")
        toast.success("data added successfully", {
          position: "top-center",
        });

        setUserData({
          ...userData,
          fname: "",
          email: "",
          mobile: "",
          password: "",
          cpassword: "",
        });
      }
    }
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./amazon1" alt="" />
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-Up</h1>
              <div className="form_data">
                <label>Your Name</label>
                <input
                  type="text"
                  name="fname"
                  value={userData.fname}
                  onChange={addData}
                  id="name"
                />
              </div>
              <div className="form_data">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={userData.email}
                  onChange={addData}
                  id="email"
                />
              </div>
              <div className="form_data">
                <label>Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  value={userData.mobile}
                  onChange={addData}
                  id="mobile"
                />
              </div>
              <div className="form_data">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={addData}
                  id="password"
                />
              </div>

              <div className="form_data">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  value={userData.cpassword}
                  onChange={addData}
                  id="cpassword"
                />
              </div>
              <button className="signin_btn" onClick={sendData}>
                Continue
              </button>
            </form>
            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Signup;
