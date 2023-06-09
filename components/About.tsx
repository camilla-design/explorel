import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="wrapperContainer">
      <img
        src="backround-hero.jpg"
        className="h-screen absolute inset-0 object-cover object-center mx-auto opacity-[30%]"
      />

      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-col relative w-[300px] md:w-full  h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center"
      >
        <div className="px-0 md:px-10">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.4,
            }}
            viewport={{
              once: true,
            }}
            src="exploreleka-logo-color.png"
            className=" mb:mb-0 w-[200px] md:w-[300px] flex-shrink-0"
          />
        </div>
        <div className="">
          <h4 className="text-3xl md:text-4xl text-black font-bold">
            Litt <span className="font-thin"> om oss</span>{" "}
          </h4>
          <p className="p-6 md:p-0 w-[360px] mx-auto md:w-[400] text-left text-sm md:text-base font-normal">
            Explore Leka – Et selskap startet av oss to; Marieann Aune og Lene
            Reppen Grydeland, fordi vi elsker å være ute på tur, og våre hjerter
            banker hardt og varmt for Leka. Denne øya er så vakker, magisk og
            unik! Hva vi ser- og opplever når vi er ute på tur, DET vil vi bidra
            med å vise frem til dere som besøker Leka. Vi vil dele vår turglede,
            våre naturopplevelser og vår kjærlighet til Leka med dere.
          </p>
          <div className="flex justify-evenly mx-auto items-center">
            <div>
              <img src="marieann.jpg" className="w-32 h-32 rounded-full p-3 " />
              <p>Marianne Aune</p>
              <SocialIcon
                url="https://www.facebook.com/exploreleka.no"
                fgColor="black"
                bgColor="transparent"
              />
            </div>
            <div>
              <img
                src="lenereppen.jpg"
                className="w-32 h-32 rounded-full p-3"
              />
              <p>Lene Reppen Grydeland</p>
              <SocialIcon
                url="https://www.facebook.com/exploreleka.no"
                fgColor="black"
                bgColor="transparent"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
