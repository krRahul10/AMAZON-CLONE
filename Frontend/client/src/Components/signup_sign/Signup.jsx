import React, { useState } from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""

  });

  console.log(udata);

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
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
                  name="name"
                  value={udata.name}
                  onChange={adddata}
                  id="name"
                />
              </div>
              <div className="form_data">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={udata.email}
                  onChange={adddata}
                  id="email"
                />
              </div>
              <div className="form_data">
                <label>Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  value={udata.mobile}
                  onChange={adddata}
                  id="mobile"
                />
              </div>
              <div className="form_data">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={udata.password}
                  onChange={adddata}
                  id="password"
                />
              </div>

              <div className="form_data">
                <label>Password</label>
                <input
                  type="password"
                  name="cpassword"
                  value={udata.cpassword}
                  onChange={adddata}
                  id="password"
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;