import React, { useContext } from "react";
import { LoginContext } from "../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ deleteData, get }) => {
  const { account, setAccount } = useContext(LoginContext);

  const removedata = async () => {
    try {
      const res = await fetch(`/remove/${deleteData}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      // console.log("data from delete", data);

      if (res.status === 400 || !data) {
        console.log("error");
      } else {
        console.log("User");
        setAccount(data)
        toast.warn("Item Remove From Cart Successfully!", {
          position: "top-center",
        });
        get();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add_remove_select">
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{ cursor: "pointer" }} onClick={() => removedata(deleteData)}>
        Delete
      </p>
      <p className="forremovedeia">save or Late</p>
      <span></span>
      <p className="forremovedeia">See more like This</p>
      <ToastContainer/>
    </div>
  );
};

export default Option;
