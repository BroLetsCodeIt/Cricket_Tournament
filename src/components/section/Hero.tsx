import { useRef } from "react";
import Button from "../Button";
import Container from "../Container";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const VideoContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: VideoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="relative bg-background text-white ">
      <motion.div
        className="absolute top-0 left-0 w-full h-[200vh]"
        ref={VideoContainerRef}
        style={{ opacity }}
        transition={{ duration: 1 }}
      >
        <img
          src="./posters/msdhoni.png"
          alt="cricket-background"
          className="w-full opacity-45 sticky top-0 h-screen object-cover"
        />
      </motion.div>

      <Container className="relative z-10 flex items-start justify-end flex-col  min-h-[--hero-height] gap-4 pb-10 md:pb-2">
        <motion.div 
          variants={{
             hidden : {opacity : 0  },
             visible : {opacity : 1 }
          }}
          whileInView="visible"
          viewport={{amount : 1}}
          exit={"hidden"}
          animate="hidden"
          className="flex items-start justify-end flex-col gap-3"
        >
          <h1 className="font-semibold text-5xl">Your Cricket Matters.</h1>
          <h1 className="text-5xl font-semibold w-full">All Domestic Cricket Tournaments.</h1>
          <Button size="medium" className="mt-[7rem]">Search Now {`->`}</Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
