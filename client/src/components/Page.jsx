import React from "react";

const Page = ({ children }) => {
  return (
    <div className="page-container flex-grow-1 position-relative">
      <main className="container d-flex flex-column justify-content-center align-items-center ">
        {children}
      </main>
    </div>
  );
};

export default Page;
