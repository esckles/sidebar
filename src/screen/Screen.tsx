/* eslint-disable @typescript-eslint/no-explicit-any */
import pic from "../assets/Pic/WhatsApp Image 2024-10-24 at 21.36.25_afb48d77.jpg";
import AnimatedLogoCloud from "../layout/LogoBar";
import SliderScreen from "./Slider";
import pic2 from "../assets/Pic/IMG-20241023-WA0005.jpg";
import pic3 from "../assets/Pic/IMG-20241023-WA0006.jpg";
import pic4 from "../assets/Pic/IMG-20241023-WA0006.jpg";
import pi1 from "../assets/WhatsApp Image 2024-10-23 at 19.33.47_5d838c30.jpg";
import pi2 from "../assets/Pic/IMG-20241023-WA0001.jpg";
import pi3 from "../assets/Screenshot 2024-10-24 204619.png";
import pi4 from "../assets/Pic/IMG-20241023-WA0003.jpg";
import A from "../assets/Screenshot 2024-10-24 195931.png";
import B from "../assets/Screenshot 2024-10-24 195633.png";
import C from "../assets/Screenshot 2024-10-24 195639.png";
import E from "../assets/Screenshot 2024-10-24 195652.png";
import D from "../assets/Screenshot 2024-10-24 195644.png";

const Screen = () => {
  const data = [
    {
      id: 1,
      title: "Stock video",
      title2: "6.8M+",
      img: pic,
    },
    {
      id: 2,
      title: "Sound Effect",
      title2: "120,000+",
      img: pic2,
    },
    {
      id: 3,
      title: "Stock Photo",
      title2: "11.2+",
      img: pic3,
    },
    {
      id: 4,
      title: "Royalty-Free Music",
      title2: "210,000+",
      img: pic4,
    },
  ];

  const data2 = [
    {
      id: 1,
      title3: "Stock video",
      title4: "6.8M+",
      img1: pi1,
    },
    {
      id: 2,
      title3: "Sound Effect",
      title4: "120,000+",
      img1: pi2,
    },
    {
      id: 3,
      title3: "Stock Photo",
      title4: "11.2+",
      img1: pi3,
    },
    {
      id: 4,
      title3: "Royalty-Free Music",
      title4: "210,000+",
      img1: pi4,
    },
  ];
  const logos = [A, B, C, D, E];

  return (
    <div>
      <SliderScreen />

      <AnimatedLogoCloud />

      <div className="mt-10 flex flex-col gap-[40px] ">
        <div className="flex  border gap-9 justify-center items-center ">
          {data?.map((el) => (
            <div className="w-[340px] h-[420px] border border-[gray] rounded-[25px] flex justify-end flex-col  ">
              <div className="text-[30px] font-semibold pl-6">{el.title}</div>
              <div className="text-[20px] pl-6">{el.title2}</div>

              <img
                src={el.img}
                alt={el.title}
                className="w-[290px] h-[300px] rounded-[20px] ml-5 mb-7"
              />
            </div>
          ))}
        </div>
        <div className="flex  border gap-9 justify-center items-center ">
          {data2?.map((el) => (
            <div className="w-[340px] h-[420px] border border-[gray] rounded-[25px] flex justify-end flex-col  ">
              <div className="text-[30px] font-semibold pl-6">{el.title3}</div>
              <div className="text-[20px] pl-6">{el.title4}</div>

              <img
                src={el.img1}
                alt={el.title3}
                className="w-[290px] h-[300px] rounded-[20px] ml-5 mb-7"
              />
            </div>
          ))}
        </div>
        <div className="w-[100%] h-[40vh] flex justify-center items-center flex-col">
          <div className="text-[40px] font-semibold">Trusted by top brands</div>
          <div className="flex gap-5">
            {logos.map((el) => (
              <img src={el} alt="" className="w-[155px] h-[70px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
