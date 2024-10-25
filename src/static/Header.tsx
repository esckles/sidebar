import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";
import E from "../assets/vid/Screenshot 2024-10-23 202832.png";

const Header = () => {
  const fir = [E];
  const sec = [
    {
      id: 1,
      searchborder: "",
    },
  ];

  const right = [
    {
      id: 1,
      title: "License",
    },

    {
      id: 2,
      title: "Pricing",
    },
    {
      id: 3,
      title: (
        <button className="w-[300px] h-[60px] text-[20px] rounded-md bg-[#6CC832] font-bold text-black">
          Get unlimited downloads
        </button>
      ),
    },
    {
      id: 4,
      title: "Sign in",
    },
  ];
  return (
    <div>
      <div className="bg-[#191919] w-full h-[100px] text-white flex justify-center items-center fixed z-10 ">
        <div className="w-[95%] h-[100%] flex justify-center items-center">
          <div className="w-[60%] h-[100%] flex justify-center items-center gap-4">
            <div>
              {fir.map((el) => (
                <img src={el} alt="" className="w-[200px] h-[60px]" />
              ))}
            </div>

            <div>
              {sec.map((el) => (
                <div className="w-[650px] h-[60px]  hover:border-[3px] rounded-[100px] bg-stone-700 flex gap-3 justify-start pl-5 items-center transition-all">
                  {el.searchborder}
                  <div className="font-semibold text-[16px]">All items</div>
                  <MdKeyboardArrowDown size={20} className="cursor-pointer" />
                  <div className="h-[37px] bg-slate-400 w-[1px] " />
                  <MdSearch size={35} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent font-semibold text-[17px] outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[40%] h-[100%] flex justify-center gap-6 ">
            {right.map((el) => (
              <div
                className="flex
               justify-center items-center text-[18px] font-normal cursor-pointer"
              >
                {el.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-700 w-full h-[60px] text-white ">Layer 2</div>
    </div>
  );
};

export default Header;
