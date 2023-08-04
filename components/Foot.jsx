"use client";
import {
  firstFoot,
  footData,
  forthFoot,
  secondFoot,
  thirdFoot,
} from "@/constant";
import { useState } from "react";

const Foot = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showLinks1, setShowLinks1] = useState(false);
  const [showLinks2, setShowLinks2] = useState(false);
  const [showLinks3, setShowLinks3] = useState(false);
  return (
    <div>
      <div className="foot slide_bottom">
        {footData.map((item) => (
          <div key={item.id} className="flex flex-col">
            <p className="text-[18px] mb-[2rem]">{item.name}</p>
            {item.links.map((link) => (
              <a
                href="#"
                key={link.linkName}
                className="text-gray-500 text-[17px] mb-3 hover:text-black"
              >
                {link.linkName}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="foot__links">
        {firstFoot.map((item) => (
          <div key={item.id} className="flex flex-col ">
            <p
              className="text-[18px] mb-[1rem] slide_bottom cursor-pointer z-10"
              onClick={() => setShowLinks(!showLinks)}
            >
              {item.name}
            </p>
            {showLinks && (
              <div className="flex-col flex slide_bottom ml-[2rem] bg-white">
                {item.links.map((link) => (
                  <a
                    href="#"
                    key={link.linkName}
                    className="text-gray-500 text-[17px] mb-3 hover:text-black"
                  >
                    {link.linkName}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {secondFoot.map((item) => (
          <div key={item.id} className="flex flex-col ">
            <p
              className="text-[18px] mb-[1rem] slide_bottom cursor-pointer z-10"
              onClick={() => setShowLinks1(!showLinks1)}
            >
              {item.name}
            </p>
            {showLinks1 && (
              <div className="flex-col flex slide_bottom ml-[2rem] bg-white">
                {item.links.map((link) => (
                  <a
                    href="#"
                    key={link.linkName}
                    className="text-gray-500 text-[17px] mb-3 hover:text-black"
                  >
                    {link.linkName}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {thirdFoot.map((item) => (
          <div key={item.id} className="flex flex-col ">
            <p
              className="text-[18px] mb-[1rem] slide_bottom cursor-pointer z-10"
              onClick={() => setShowLinks2(!showLinks2)}
            >
              {item.name}
            </p>
            {showLinks2 && (
              <div className="flex-col flex slide_bottom ml-[2rem] bg-white">
                {item.links.map((link) => (
                  <a
                    href="#"
                    key={link.linkName}
                    className="text-gray-500 text-[17px] mb-3 hover:text-black"
                  >
                    {link.linkName}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {forthFoot.map((item) => (
          <div key={item.id} className="flex flex-col ">
            <p
              className="text-[18px] mb-[1rem] slide_bottom cursor-pointer z-10"
              onClick={() => setShowLinks3(!showLinks3)}
            >
              {item.name}
            </p>
            {showLinks3 && (
              <div className="flex-col flex slide_bottom ml-[2rem] bg-white">
                {item.links.map((link) => (
                  <a
                    href="#"
                    key={link.linkName}
                    className="text-gray-500 text-[17px] mb-3 hover:text-black"
                  >
                    {link.linkName}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foot;
