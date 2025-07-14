"use client";

import Image from "next/image";
import Portrait from "@/public/WhatsApp Image 2025-01-29 at 00.32.50_841dcfa3.jpg";
import RotatingText from '@/Components/RotatingText';
import { motion } from "framer-motion";
import { BackgroundLines } from "@/Components/ui/background-lines";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black dark:bg-black overflow-hidden">
      {/* Background lines */}
      <BackgroundLines className="absolute inset-0 z-0">
        {/* We keep children here if needed for animations or effects inside background */}
      </BackgroundLines>

      {/* Foreground content */}
      <div className="relative z-10 grid grid-cols-2 items-center px-6 py-12 gap-24">
        {/* Left: Text Content */}
        <div className="flex flex-col items-end text-right space-y-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-slate-200 dark:text-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hey, I'm Nathanael
          </motion.h1>

          <motion.div
            className="flex items-center space-x-2 justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-xl font-medium">I'm a</span>
            <RotatingText
              texts={['Computer Science Student', 'Competitive Person', 'Learner of Data Science']}
              mainClassName="px-3 bg-cyan-300 text-black overflow-hidden py-1 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.div>

          <motion.p
            className="max-w-md text-base text-shadow-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Nathanael is currently an undergraduate student at the Bandung Institute of Technology, majoring in Informatics Engineering. He is continuously improving his skills through both formal education and self-driven learning. Nathanael is also actively involved in student organizations and event committees to develop his leadership and social skills.
          </motion.p>
        </div>

        {/* Right: Image */}
        <motion.div
          className="w-full flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Image
            src={Portrait}
            alt="Nathanael Photo"
            className="rounded-2xl shadow-lg object-cover w-[300px] h-[300px] md:w-[350px] md:h-[350px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
