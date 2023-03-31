import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h2>Nothing to see here!</h2>
      <div>
        <Link to="/">Go to the home page</Link>
      </div>
    </>
  );
};

export default PageNotFound;
