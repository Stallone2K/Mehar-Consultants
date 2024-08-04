import { motion } from "framer-motion";
import Rocket from "../assets/Rocket.svg";

function Hero() {
  return (
    <>
      <motion.div
        className="flex h-full flex-col items-start justify-end"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        whileInView="visible"
        exit="hidden"
        animate="hidden"
        viewport={{ amount: 0.98 }}
      >
        <div className="flex justify-center items-center h-[90svh] mx-auto max-w-[1280px] px-6">
          <div>
            <h1 className="text-5xl font-bold">
              Your Journey To <span className="text-red-600">Success,</span>
              <br />
              Starts With Our Customized
              <span className="text-red-600"> Talent Strategies.</span>
            </h1>
            <button className="text-md px-8 py-4 bg-black text-white rounded-full mt-6 mb-6 hover:bg-white border-2 hover:text-black">
              Submit Resume
            </button>
            <p className="text-md">
              success comes from our tech and human-focused strategy, whether
              on-site or remote
            </p>
          </div>
          <div className="HeroSVG">
            <img src={Rocket} alt="" />
          </div>
          <div className="divider"></div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
