"use client";
import { sportData } from "@/constant";
import Image from "next/image";
import { useRef } from "react";

const Sport = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  };
  return (
    <>
      <div className="px-[1rem] py-[5rem] sport_desktop">
        <div className="flex justify-between items-center">
          <p className="text-[22px] bggg">Shop by Sport</p>
          <div className="flex gap-3 arrow_btn">
            <button
              disabled={""}
              className="cursor-pointer bg-[#E5E5E5] rounded-full w-[40px] h-[40px] flex items-center justify-center hover:bg-[rgb(173,173,173)]"
              onClick={() => scroll("left")}
            >
              <Image
                src="/previous.svg"
                width={20}
                height={20}
                alt="arrow"
                className="object-contain cursor-pointer"
              />
            </button>
            <button
              className="cursor-pointer bg-[#E5E5E5] hover:bg-[rgb(173,173,173)] rounded-full w-[40px] h-[40px] flex items-center justify-center"
              onClick={() => scroll("right")}
            >
              <Image
                src="/next.svg"
                width={20}
                height={20}
                alt="arrow"
                className="object-contain cursor-pointer"
              />
            </button>
          </div>
        </div>

        <div className="trending-container" ref={scrollRef}>
          {sportData.map((item) => (
            <div key={item.id} className="trending-card cursor-pointer">
              <div className="flex flex-col flex-1 trending-image-container">
                <img
                  src={item.image}
                  alt="trending__image"
                  className="flex flex-1"
                />
              </div>
              <p className="mt-5 text-[20px] mb-[8px] bggg">{item.name}</p>
              <p className="mb-[2.5rem] text-[15px]">{item.desc}</p>
              <a href="#" className="text-[15px] mb-[2px]">
                Shop
              </a>
              <div className="w-[37px] h-[1px] bg-black mb-[3rem]" />
            </div>
          ))}
        </div>
      </div>

      <div className=" sport_mobile">
        <p className="text-[20px] mb-[3rem]">Shop by Sport</p>
        <div className="w-full h-[0.1px] bg-[rgb(120,119,119)] " />

        <div className="flex flex-col gap-4 p-6 ">
          {sportData.map((item) => (
            <div
              className="flex items-center justify-between gap-3 mb-2 flex-wrap"
              key={item.id}
            >
              <div className="flex flex-col gap-4 max-w-[200px]" key={item.id}>
                <p className="text-[15px] text-gray-500">{item.name}</p>
                <p className="text-[18px]">{item.desc}</p>
              </div>
              <img src={item.image} className="sport__img" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sport;
