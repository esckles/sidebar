/* eslint-disable @typescript-eslint/no-explicit-any */
import useEmblaCarousel from "embla-carousel-react";
import autoPlay from "embla-carousel-autoplay";
import pic from "../assets/vid/banner.compressed-c1ef8a6a1d9615fd7a88.avif";
import m from "../assets/Pic/Screenshot 2024-10-24 204919.png";

const SliderScreen = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    autoPlay({ delay: 4000 }),
  ]);

  return (
    <div className="embla flex gap-5 mt-10">
      <div className=" w-[70%] h-[50vh] ">
        <div
          className="embla__viewport  h-[130%] mt-5 mx-auto  p-4 rounded-md  "
          ref={emblaRef}
        >
          <div className="embla__container h-full  bg-gradient-to-r from-transparent">
            {Array.from({ length: 10 }).map((el: any, i: number) => (
              <div
                key={`${i}${el}`}
                className="embla__slide  rounded-md mx-1 h-full flex justify-center items-center  bg-gradient-to-r from-transparent via-white to-transparent"
              >
                <div className="w-[100%] h-[100%] ">
                  <div
                    style={{
                      backgroundImage: `url(${pic})`,
                      height: "75%",
                      width: "95%",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      marginLeft: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <p className="text-[70px] font-extrabold text-white pl-5  w-[70%] flex flex-col font-sans">
                      <p className="text-[#6CC832]"> Unlimited assets</p>
                      for the creatively <br /> obsessed
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[25%] h-[350px] mt-8 rounded-[20px] border border-[gray] justify-center items-center flex bg-white">
        <img src={m} alt="" className="w-[99%] h-[96%] rounded-md" />
      </div>
    </div>
  );
};

export default SliderScreen;
