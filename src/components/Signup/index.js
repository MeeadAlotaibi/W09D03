import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../reducers/sign";
import axios, { Axios } from "axios";

const Signup = () => {
  const dispatch = useDispatch(); ///
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL; // جبته من ملف دوت إنف


  ///////////////////////////////////////////////////////////////

  const Signup = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/signup`, {
        email,
        password,
      });
      const data = {
        /// نخزن
        role: res.data.result.role.role, //// مافهمت هذي ؟
        token: res.data.token,
      };
      dispatch(login(data)); // اللي فهمته انه هي اللي بتعمل التغيير وترسلها للرديوسر بس استاذ محمد يقول لا ،، مين يعرف؟ الله اللي بيعرف
    } catch (err) {
      console.log(err);
    }
  };

  ///////////////////////////////////////////////////////////////

  return (
    <>
      {!state.sign.token ? (
        <>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          {/* اجعل الانبوت ياخذ القيم اللي دخلتها في بوكس الانبوت*/}
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={Signup}> Sign Up</button>{" "}
          {/* لما يضغط على البوتن ،، استدعي دالة الساين اب */}
        </>
      ) : (
        <>
          <Link to="/Tasks">
            <button>Tasks</button>
          </Link>
        </>
      )}
    </>
  );
};
export default Signup;
