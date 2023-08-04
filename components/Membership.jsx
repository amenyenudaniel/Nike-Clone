import { memberData } from "@/constant";
import React from "react";

const Membership = () => {
  return (
    <div className="p-2">
      <p className="text-[22px] bggg p-6">Nike Membership</p>
      <div className="nike-banner p-6">
        <h1 className="text-[3rem] nike-banner-h1 text-white mb-5 mt-2">
          BECOME A <br /> MEMBER
        </h1>
        <p className="text-white text-[15px]">
          Sign up for free. Join the community.
        </p>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-[#E5E5E5] flex text-[17px] w-[100px] mt-8 flex items-center justify-center"
          >
            Join Us
          </button>
          <button
            type="button"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-[#E5E5E5] flex text-[17px] w-[100px] mt-8 flex items-center justify-center"
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="member_grid mt-[3rem] gap-4">
        {memberData.map((item) => (
          <div
            className="flex justify-center flex-col items-center relative"
            key={item.id}
          >
            <img src={item.image} alt="membership image" />
            <div className="member_content flex flex-col gap-2 mt-[70%] p-6">
              <p className="text-[16px] text-gray-500">{item.name}</p>
              <h4 className="text-[24px] text-black">{item.desc}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
