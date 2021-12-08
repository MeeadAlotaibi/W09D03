import React from "react";
import { Link } from "react-router-dom";

///////////////////////////////////////////////////////////////

const Pages = () => {
  return (
    <>
      <Link to="/Signin">
        <button>Sign in</button>
      </Link>
      <Link to="/Signup">
        <button>Sign up</button>
      </Link>
    </>
  );
};

export default Pages;
