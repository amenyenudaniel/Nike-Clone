"use client";
import { trendingData } from "@/constant";
import Image from "next/image";
import { useRef } from "react";

const Trending = () => {
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
    <div className=" py-[5rem]">
      <div className="flex justify-between items-center">
        <p className="text-[22px] bggg">Trending</p>
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
        {trendingData.map((item) => (
          <div key={item.id} className="trending-card cursor-pointer">
            <div className="flex flex-col flex-1 trending-image-container">
              <img
                src={item.image}
                alt="trending__image"
                className="flex flex-1"
              />
            </div>
            <p className="mt-5 text-[20px] mb-[3rem] bggg">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
