"use client";
import {
  footerData,
  footerFirst,
  footerLast,
  getHelpData,
  nikeData,
} from "@/constant";
import { useState } from "react";
import { Svg } from ".";

const Footer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showLinks1, setShowLinks1] = useState(false);
  return (
    <div className="bg-[#000] py-[2rem] px-[2rem] footer__main">
      <div className=" flex justify-between flex-wrap">
        <footer className="flex flex-wrap gap-[8rem] mt-5">
          <div>
            {footerFirst.map((item) => (
              <div className="flex flex-col" key={item.id}>
                <h6 className="text-white mb-[16px] font-bold text-[14px]">
                  {item.name}
                </h6>
              </div>
            ))}
          </div>
          <div className="flex gap-[8rem] data__links">
            {footerData.map((item) => (
              <div key={item.id}>
                <h6 className="text-white mb-[16px] font-bold text-[14px]">
                  {item.name}
                </h6>
                {item.links.map((link) => (
                  <div key={link.linkName}>
                    <p className="text-white opacity-[0.6] text-[13px] mb-[10px] hover:opacity-[1] cursor-pointer">
                      {link.linkName}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </footer>
        <div className="mt-4 mb-5">
          <Svg />
        </div>
      </div>
      <div className="flex flex-col footer__hide">
        {getHelpData.map((item) => (
          <div key={item.id} className="flex flex-col mb-[2rem]">
            <div
              className="flex justify-between  cursor-pointer mb-[20px] item-center gap-2"
              onClick={() => setShowLinks(!showLinks)}
            >
              <h6 className="text-white font-bold text-[14px]">{item.name}</h6>
              <h6 className="text-white text-[20px] mt-[-5px]">
                {!showLinks && <>+</>} {showLinks && <>-</>}
              </h6>
            </div>
            {showLinks && (
              <>
                <div className="slide_bottom">
                  {item.links.map((link) => (
                    <div key={link.linkName}>
                      <p className="text-white opacity-[0.6] text-[13px] mb-[10px] hover:opacity-[1] cursor-pointer">
                        {link.linkName}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="h-[1px] w-full bg-gray-500" />
              </>
            )}
          </div>
        ))}

        {nikeData.map((item) => (
          <div key={item.id} className="flex flex-col mb-[2rem]">
            <div
              className="flex justify-between   mb-[20px] item-center gap-2 cursor-pointer"
              onClick={() => setShowLinks1(!showLinks1)}
            >
              <h6 className="text-white font-bold text-[14px]">{item.name}</h6>
              <h6 className="text-white text-[20px] mt-[-5px]">
                {!showLinks1 && <>+</>} {showLinks1 && <>-</>}
              </h6>
            </div>
            {showLinks1 && (
              <div>
                <div className="slide_bottom">
                  {item.links.map((link) => (
                    <div key={link.linkName}>
                      <p className="text-white opacity-[0.6] text-[13px] mb-[10px] hover:opacity-[1] cursor-pointer">
                        {link.linkName}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="h-[1px] w-full bg-gray-500" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center last__content gap-6 mt-[3rem] flex-wrap">
        {footerLast.map((last) => (
          <div key={last.id}>
            <a
              href="#nav"
              className="text-white text-[12px] opacity-[0.6] hover:opacity-[1]"
            >
              {last.name}
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-[2rem] flex-wrap gap-5">
        <div className="flex gap-6 flex-wrap">
          <div className="flex gap-3 cursor-pointer items-center ml-[1rem] mr-[1rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="hf-geopin-icon"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="18px"
              height="18px"
              fill="white"
            >
              <path d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" />
            </svg>
            <p className="text-white text-[14px]">United States</p>
          </div>
          <p className="text-white opacity-[0.6] text-[14px]">
            © 2023 Nike, Inc. All Rights Reserved
          </p>
        </div>
        <p className="text-white text-[13px] opacity-[0.6] hover:opacity-[1] cursor-pointer">
          CA Supply Chains Act
        </p>
      </div>
    </div>
  );
};

export default Footer;
