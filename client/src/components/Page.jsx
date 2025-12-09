import React from "react";

const Page = ({ children }) => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center ">
      {children}
    </div>
  );
};

export default Page;
