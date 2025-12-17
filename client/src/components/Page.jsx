import React from "react";

const Page = ({ children }) => {
  return (
    <div className="page-container flex-grow-1 position-relative">
      <main className="container d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
        {children}
      </main>
    </div>
  );
};

export default Page;
