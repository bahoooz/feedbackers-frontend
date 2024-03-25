"use client"

import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [countPoints, setCountPoints] = useState(80);
  return (
    <div id="home" className="bg-bg overflow-hidden sm:flex sm:justify-center">
      <div className="sm:max-w-[430px]">
        {/* HEADER */}
        <header className="points mt-6 mb-8 higher-mobile:my-10 flex flex-col items-center">
          <h2 className="w-full px-9 text-2xl uppercase text-title">
            Vos points
          </h2>
          <div className="w-full sm:w-[80%] px-9 sm:px-0 justify-between sm:justify-center sm:gap-9 content-points flex items-center mt-2">
            <span className="text-sous-title text-5xl">{countPoints}</span>
            <Image
              src={
                countPoints >= 100
                  ? "/assets/mascot-to-right.png"
                  : "/assets/mascot-to-right-angry.png"
              }
              width={132}
              height={132}
              alt="Mascotte"
              style={{ width: "40px" }}
            />
            <p className="text-elements w-40">
              {countPoints >= 100
                ? `tu peux collecter des cadeaux...`
                : "tu ne peux pas collecter de cadeau"}
            </p>
          </div>
        </header>
        {/* HEADER */}

        {/* SECTION QR CODE */}
        <section className="scan px-8 flex flex-col items-center">
          <h1 className="text-center text-2xl uppercase text-title mb-6">
            Scan pour feedback
          </h1>
          <Image
            src="/assets/qr-code.png"
            className="w-[25dvh]"
            width={765}
            height={765}
            alt="Qr Code"
          />
        </section>
        {/* SECTION QR CODE */}

        {/* SECTION SUGGESTIONS */}
        <section className="suggestions">
          <h2 className="w-full px-9 text-2xl uppercase text-title mt-9">
            Suggestions
          </h2>
          <div className="slider-container flex gap-4 overflow-x-auto higher-mobile:h-28 h-24 mt-4 px-5">
            <div className="relative min-w-96">
              <div className="absolute w-full h-full rounded-full bg-gradient-to-t from-gradient-1 to-gradient-2 opacity-50"></div>
              <span className="text-4xl uppercase text-sous-elements opacity-75 absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
                Tesla
              </span>
              <Image
                src="/assets/tesla-img.png"
                className="w-full h-full object-cover rounded-full"
                alt="tesla img"
                width={1920}
                height={1440}
              />
            </div>
            <div className="relative min-w-96">
              <div className="absolute w-full h-full rounded-full bg-gradient-to-t from-gradient-1 to-gradient-2 opacity-50"></div>
              <span className="text-4xl uppercase text-sous-elements opacity-75 absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
                Tesla
              </span>
              <Image
                src="/assets/tesla-img.png"
                className="w-full h-full object-cover rounded-full"
                alt="tesla img"
                width={1920}
                height={1440}
              />
            </div>
            <div className="relative min-w-96">
              <div className="absolute w-full h-full rounded-full bg-gradient-to-t from-gradient-1 to-gradient-2 opacity-50"></div>
              <span className="text-4xl uppercase text-sous-elements opacity-75 absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
                Tesla
              </span>
              <Image
                src="/assets/tesla-img.png"
                className="w-full h-full object-cover rounded-full"
                alt="tesla img"
                width={1920}
                height={1440}
              />
            </div>
          </div>
        </section>
        {/* SECTION SUGGESTIONS */}
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR */}
      </div>
    </div>
  );
}
