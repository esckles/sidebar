import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";

const GoalLayout = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="">
      <div
        className={`fixed w-[${toggle ? "200px" : "50px"}] h-screen border-r ${
          toggle ? "bg-slate-100" : " bg-red-100"
        } duration-100 transition-all`}
      >
        <Sider toggle={toggle} setToggle={setToggle} />
      </div>

      <div className="w-full h-[200vh] flex justify-end">
        <div className="w-[calc(100vw-230px)] h-full p-4 border rounded-md m-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GoalLayout;
