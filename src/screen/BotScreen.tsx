/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { iChat } from "../utils/interfaces";
import { fetchLLMModel } from "../API/APICall";
import { FaRobot, FaSpinner } from "react-icons/fa";
import { MdClose, MdPerson, MdRefresh } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import me from "../assets/WIN_20240622_14_37_13_Pro.jpg";

const BotScreen = () => {
  const messagesEndRef: any = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [toggle, setToggle] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [text, setText] = useState<string>("");
  const [data, setData] = useState<Array<iChat | []>>(
    JSON.parse(localStorage.getItem("chat")!) || []
  );

  const handleSubmit = async (e: any) => {
    scrollToBottom();
    setLoading(true);
    e.preventDefault();

    const chat: iChat = {
      id: Math.random().toString(36).substr(2, 9),
      message: text,
      user: "user",
      createdAt: new Date(),
    };

    localStorage.setItem("chat", JSON.stringify([...data, chat]));

    fetchLLMModel(text)
      .then((res: any) => {
        if (res.status === 200) {
          let botChat = {
            id: Math.random().toString(36).substr(2, 9),
            message: res?.data?.msg,
            user: "bot",
            createdAt: new Date(),
          };

          let result = JSON.parse(localStorage.getItem("chat")!);
          localStorage.setItem("chat", JSON.stringify([...result, botChat]));
          setData([...result, botChat]);
          setLoading(false);
          setText("");
        }
      })
      .finally(() => {
        setLoading(false);
        setText("");
      });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  return (
    <div>
      <div className="fixed right-2 bottom-0 m-2 ">
        {!toggle ? (
          <div className="rounded-full p-2 text-[35px] bg-stone-100 cursor-pointer">
            <div className=" mb-[2px] ml-[1px]">
              <FaRobot onClick={() => setToggle(!toggle)} />
            </div>
          </div>
        ) : (
          <div className=" sm:w-[450px] md:w-[450px] lg:w-[450px] bg-white  h-[600px] border rounded-md overflow-hidden flex flex-col">
            <div className="h-[60px] bg-neutral-950 w-full text-white flex justify-end items-center px-2 text-[30px] gap-4 ">
              <MdRefresh
                className="cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("chat");
                  window.location.reload();
                }}
              />

              <MdClose
                className="cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            </div>

            <div className="h-[495px] overflow-auto p-2 rounded-md">
              <div className="text-[12px]">
                {JSON.parse(localStorage.getItem("chat")!)?.map(
                  (props: iChat) => (
                    <div key={props?.id}>
                      {props.user === "user" ? (
                        <div className="flex my-2 p-2 text-white rounded-[100px] justify-end gap-4  items-center ">
                          <div className="flex pl-4 bg-blue-500 w-[200px]  justify-center items-center h-[50px] rounded-[18px]">
                            <div>{props?.message}</div>
                          </div>{" "}
                          <div className="flex justify-center items-center mb-2">
                            <img
                              src={me}
                              alt=""
                              className="w-[30px] h-[30px] rounded-[360px]"
                            />
                            <span>You</span>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-md font-[300] italic flex flex-col mb-2 p-2 bg-[#1F2C34] text-white">
                          <div className="flex items-center mb-2">
                            <FaRobot className="text-[30px] mr-[5px]" />
                            <span>Data2Bots</span>
                          </div>
                          <div>
                            <div>{props?.message}</div>
                          </div>{" "}
                        </div>
                      )}
                    </div>
                  )
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="flex-1" />

            <form
              onSubmit={handleSubmit}
              className="m-2 border rounded-md h-[45px] flex items-center"
            >
              {loading ? (
                <div className="pl-2 flex gap-2 items-center w-full">
                  {" "}
                  <FaSpinner className="animate-spin" /> Loading...{" "}
                  <div className="flex-1" />
                </div>
              ) : (
                <input
                  placeholder="want to know more about Data2Bots?"
                  className="h-[96%] w-[90%] outline-none bg-transparent pl-2"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              )}
              <IoSendSharp className="text-[30px] text-slate-400" />
              <button
                type="submit"
                className="hidden w-[150px] text-[12px] text-white bg-blue-500 rounded-md cursor-pointer"
                onClick={() => {}}
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BotScreen;
