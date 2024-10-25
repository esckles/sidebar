import { useEffect, useRef } from "react";

const logos = [
  {
    name: "Vercel",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
    blackFilter: true,
  },
  {
    name: "Nextjs",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg",
    blackFilter: true,
  },
  {
    name: "Prime",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
  },
  {
    name: "Trustpilot",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
  },
  {
    name: "Webflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
  },
  {
    name: "Airbnb",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
  },
  {
    name: "Tina",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
  },
  {
    name: "Stackoverflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg",
  },
  {
    name: "Mistral",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
  },
];

const AnimatedLogoCloud = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement: any = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId: any;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5; // Reduced speed for smoother animation
      if (scrollPosition >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollElement.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="w-full py-12 overflow-hidden  dark:bg-gray-900">
      <div className="mx-auto w-full px-4 md:px-8">
        <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
          Trusted by Industry Leaders
        </h2>
        <div className="relative">
          <div
            className="flex gap-12 py-4"
            ref={scrollRef}
            style={{
              width: `${logos.length * 200}px`,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40">
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className={`h-12 w-auto object-contain ${
                    logo.blackFilter ? "brightness-0" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
