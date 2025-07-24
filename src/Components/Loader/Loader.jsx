import React from "react";
import Spinner from "../../Assets/Spinner.svg";
export const Loader = () => {
  return (
    <div className="fixed inset-0 min-h-screen min-w-screen flex justify-center items-center">
      <div className="">
        <img src={Spinner} className="bg-transparent" alt="" />
      </div>
    </div>
  );
};
