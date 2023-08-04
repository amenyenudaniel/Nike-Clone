"use client";
import { iconicData, sportData } from "@/constant";
import Image from "next/image";
import { useRef } from "react";

const Iconic = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 600;
    } else {
      current.scrollLeft += 600;
    }
  };
  return (
    <div className="">
      <div className="flex justify-between">
        <p className="text-[22px] bggg ml-[2rem]">Always Iconic</p>
        <div className="flex justify-between gap-3 arrow_btn">
          <button
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

      <div className="trending-container2" ref={scrollRef}>
        {iconicData.map((item) => (
          <div key={item.id} className="trending-card2 cursor-pointer">
            <div className="flex flex-col flex-1 trending-image-container2">
              <img
                src={item.image}
                alt="trending__image"
                className="flex flex-1"
              />
            </div>
            <p className="mt-5 text-[15px] mb-[8px] bggg">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iconic;
