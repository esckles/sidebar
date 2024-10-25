import React, { FC } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface iProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sider: FC<iProps> = ({ toggle, setToggle }) => {
  return (
    <div>
      <div className="h-full w-full p-4">
        <div className="flex justify-between items-center">
          <p>Sider</p>
          <button
            className="px-4 py-2 bg-blue-950 text-white rounded-md"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <MdArrowForwardIos /> : <MdArrowBackIos />}
          </button>
        </div>

        {toggle && (
          <div className="mt-4 space-y-2">
            <div className="cursor-pointer hover:bg-slate-200 p-2 rounded">
              Display Goals
            </div>
            <div className="cursor-pointer hover:bg-slate-200 p-2 rounded">
              Achieved Goals
            </div>
            <div className="cursor-pointer hover:bg-slate-200 p-2 rounded">
              Box
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sider;
