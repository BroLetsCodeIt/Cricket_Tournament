import {
  motion,
  useMotionValue,
  useTransform,
  MotionStyle,
  useMotionValueEvent,
  
} from "framer-motion";
import { useState } from "react";

const Foldable_Card = () => {
  const xDrag = useMotionValue(0);
  const xLeftSection = useTransform(xDrag, [0, 300], ["100%", "0%"]);
  const xRightSection = useTransform(xDrag, [0, 300], ["-100%", "0%"]);
  const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
  const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

  const [isFolded , setIsFolded] = useState(true);


  useMotionValueEvent(xDrag , "change" ,(currentX) => {
    if(currentX >260){
      setIsFolded(false)
    }
    else{
      setIsFolded(true);
    }
  })
  return (
    <>
    
      <motion.div 
      animate={isFolded ? "folded" : "open"}
      variants={{ 
        open: { scale: 1 }, 
        folded: { scale: 0.7 },
      }}
       initial="folded"
      >
        <div className="mx-auto grid aspect-video max-h-[80vh] p-8">
          {/* <img src="./posters/place.png" alt="place.png" />  */}
          <div className="aspect-video grid grid-cols-3   h-full w-full  [grid-area:1/1]">
            <motion.div
              className="map-image -skew-y-1 origin-bottom-right shadow-2xl"
              style={{ x: xLeftSection, skewY: "-1deg" }}
            />
            <motion.div
              style={
                {
                  scaleX: centerScale,
                  "--brightness": centerBrightness,
                } as MotionStyle
              }
              className="map-image brightness-[--brightness] border border-background/10"
            />
            <motion.div
              className="map-image skew-y-1 origin-bottom-left shadow-xl"
              style={{ x: xRightSection, skewY: "1deg" }}
            />
          </div>

          <motion.div
            // style={{ x : xDrag}}
            _dragX={xDrag}
            className=" [grid-area:1/1] relative z-10 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 300 }}
            dragTransition={{
              modifyTarget: (target) => {
                return target > 150 ? 300 : 0;
              },
              timeConstant: 45,
            }}
          />
        </div>
        <motion.div className="flex items-center justify-center text-xl md:text-4xl font-bold tracking-tight"
         variants={{
          folded : {
            opacity : 1 ,
            scale : 0.9 ,
            y : 30
          },
          open : {
            opacity : 1 ,
            scale : 0.7 ,
            y : 0
          }
         }}
        
        >
            <h1 className="pt-10" >{isFolded ? "Drag to Right 👉" : "Drag to Left 👈"}</h1>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Foldable_Card;
