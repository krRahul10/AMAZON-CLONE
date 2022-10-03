import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });

  console.log(logdata)

  const adddata = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
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
                  onChange={adddata}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form_data">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={adddata}
                  value={logdata.password}
                  placeholder="At least 6 char"
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
            <div className="create_accountinfo">
              <p>New to Amazon?</p>
              <NavLink to="/register">
                <button>Create your Amazon Account</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
