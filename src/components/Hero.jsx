
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {scroll} from "../assets/index";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Nilesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop front end, backend <br className='sm:block hidden' />
            interfaces and web applications.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[45px] h-[75px] bg-secondary rounded-3xl  border-secondary flex justify-center items-start'>
            <motion.img
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              src={scroll}
            />
          </div>
        </a>
      </div>
    </section>
  );
};
 
export default Hero;