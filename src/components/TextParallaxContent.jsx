import React, { useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import about1Img from '../assets/about-1.png'
import about2Img from '../assets/about-2.png'

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white flex gap-[100px]">
      <TextParalaxlContent
        imgUrl={about1Img}
        
      >
        <ExampleContent />
      </TextParalaxlContent>
      <TextParalaxlContent
        imgUrl={about2Img}
        subHeading="Quality"
        heading="Never compromise."
      >
        <ExampleContent />
      </TextParalaxlContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParalaxlContent = ({ imgUrl, children }) => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -700]); // Movimento parallax per il testo

  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
        position: "relative"
      }}
    >
      <StickyImage imgUrl={imgUrl} scrollYProgress={scrollYProgress} />
      <motion.div ref={targetRef} style={{ y: textY }}>
        <h2>Gerardo Nastri</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit sunt est illum! Non necessitatibus adipisci nostrum odit minima, velit similique harum mollitia a quo repellendus explicabo. Quod, neque vero.</p>
      </motion.div>
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 1.02]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        // top: top,
        scaleY,
        scaleX
      }}
      className={`z-0 w-full overflow-hidden rounded-3xl`}
    >
      {/* <motion.div className="absolute inset-0 bg-neutral-950/70" /> */}
    </motion.div>
  );
};



const ExampleContent = () => (
  <div>
    <h2>Gerardo Nastri</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit sunt est illum! Non necessitatibus adipisci nostrum odit minima, velit similique harum mollitia a quo repellendus explicabo. Quod, neque vero.</p>
  </div>
);
