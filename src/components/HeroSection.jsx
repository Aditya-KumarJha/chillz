import { useTheme, themes } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <main className="px-4 py-10 font-poppins text-white md:p-16 overflow-hidden bg-gradient-to-br">
      <div className="container mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-[60%_40%]">
        <div className="order-1 lg:order-2 relative flex items-center justify-center p-2 sm:p-4 -mt-2 sm:-mt-[4vh] lg:-mt-[8vh]">
          <div className="relative mx-auto w-4/5 sm:w-2/3 lg:w-full max-w-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={theme.image}
                src={theme.image}
                alt={`A delicious ${theme.name} ice cream cone.`}
                className="h-auto w-full object-contain"
                draggable="false"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="order-2 lg:order-1 flex flex-col gap-4 p-2 sm:p-4 lg:px-12 lg:py-4 text-center lg:text-left">
          <h1 className="font-pacifico text-3xl sm:text-4xl lg:text-8xl font-black tracking-wide text-[#fff3ee] mb-4">
            icecream
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-wide capitalize">
            {theme.name} cone
          </h2>
          <p className="mt-4 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed text-sm sm:text-base">
            Embark on a culinary journey of delight as you immerse yourself in
            our artisan-crafted ice cream collection — each flavor a story, each
            scoop an unforgettable chapter in your sweet odyssey!
          </p>
          <p className="max-w-xl mx-auto lg:mx-0 mt-1 font-medium leading-relaxed text-sm sm:text-base">
            Indulge in a world of imagination, where every scoop unveils a new
            taste adventure! Choose your favorite and dive into sweetness like never before.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            {Object.keys(themes).map((key, index) => (
              <div
                key={key}
                onClick={() => changeTheme(key)}
                className="h-24 w-24 sm:h-28 sm:w-28 transition duration-500 ease-out cursor-pointer p-2 relative"
              >
                <div className="relative h-full w-full">
                  <img
                    src={`/images/Component-${index + 1}.png`}
                    alt={`${key} icon`}
                    className="h-full w-full object-contain absolute top-0 left-0 -rotate-12 hover:rotate-0 hover:scale-105 transition-transform duration-500 ease-out"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
