"use client";
import { mobileLinks } from "@/constant";
import Image from "next/image";

const Navbar = ({ menu, setMenu }) => {
  return (
    <div className="navbar">
      <Image
        src="/logo.svg"
        width={70}
        height={70}
        alt="small image"
        className="object-contain hover:opacity-[0.6] cursor-pointer"
      />
      <div className="flex  items-center gap-3 nav-none">
        <div>
          <a href="#" className="text-[16px]">
            News & Featured
          </a>
        </div>
        <div>
          <a href="#" className="text-[16px]">
            Men
          </a>
        </div>
        <div>
          <a href="#" className="text-[16px]">
            Women
          </a>
        </div>
        <div>
          <a href="#" className="text-[16px]">
            Kids
          </a>
        </div>
        <div>
          <a href="#" className="text-[16px]">
            Accessories
          </a>
        </div>
        <div>
          <a href="#" className="text-[16px]">
            Sale
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="rounded-full bg-[#E5E5E5] opacity-[0.7] w-[160px] h-[40px] pl-[40px] text-black outline-none hover:opacity-[1] relative searchbar"
          placeholder="Search"
        />
        <div className="absolute searchbar">
          <Image
            src="/search.svg"
            width={25}
            height={25}
            alt="search image"
            className="object-contain cursor-pointer ml-2 "
          />
        </div>
        <div className="flex items-center gap-5 ml-5">
          <div className="cursor-pointer hover:bg-[#E5E5E5] rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <Image
              src="/like.svg"
              width={25}
              height={25}
              alt="search image"
              className="object-contain "
            />
          </div>

          <div className="cursor-pointer hover:bg-[#E5E5E5] rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <Image
              src="/cart.svg"
              width={25}
              height={25}
              alt="search image"
              className="object-contain cursor-pointer  "
            />
          </div>

          <div
            className="cursor-pointer hover:bg-[#E5E5E5] rounded-full w-[40px] h-[40px] flex items-center justify-center mobile-icon "
            onClick={() => {
              setMenu(true);
            }}
          >
            <Image
              src="/menu.svg"
              width={25}
              height={25}
              alt="search image"
              className="object-contain cursor-pointer "
            />
          </div>
        </div>
      </div>
      {menu && (
        <div className="mobile-menu slide-bottom">
          <div className="mobile-menu-container p-3">
            <div
              className="cursor-pointer hover:bg-[#E5E5E5] rounded-full w-[30px] h-[30px] flex ml-auto items-center justify-center mr-3 mt-1 mobile-icon "
              onClick={() => {
                setMenu(false);
              }}
            >
              <Image
                src="/cancel.svg"
                width={20}
                height={20}
                alt="search image"
                className="object-contain cursor-pointer"
              />
            </div>

            <div className="flex flex-col p-1">
              {mobileLinks.map((item) => (
                <div
                  onClick={() => {
                    setMenu(false);
                  }}
                  key={item.id}
                  className="flex mt-4 cursor-pointer justify-between"
                >
                  <p className="text-[19px]">{item.name}</p>
                  <Image
                    src="/next.svg"
                    width={20}
                    height={20}
                    alt="search image"
                    className="object-contain "
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col p-2">
              <div
                onClick={() => {
                  setMenu(false);
                }}
                className="flex gap-4 items-center mb-4 cursor-pointer"
              >
                <Image
                  src="/jordan.svg"
                  width={30}
                  height={30}
                  alt="small image"
                  className="object-contain"
                />
                <p className="text-[16px]">Jordan</p>
              </div>
              <div
                onClick={() => {
                  setMenu(false);
                }}
                className="flex gap-4 items-center mb-2 cursor-pointer"
              >
                <Image
                  src="/next-nav.svg"
                  width={30}
                  height={30}
                  alt="small image"
                  className="object-contain"
                />
                <p className="text-[16px]">Converse</p>
              </div>
            </div>

            <div
              onClick={() => {
                setMenu(false);
              }}
              className="flex flex-col gap-5  mt-5"
            >
              <p className="mt-8 text-[17px] text-gray-500">
                Become a Nike Member for the best products, inspiration and
                stories in sport.{" "}
                <span className="cursor-pointer text-black font-bold">
                  Learn more
                </span>
              </p>

              <div
                onClick={() => {
                  setMenu(false);
                }}
                className="flex gap-2 mt-3 mb-6 flex-wrap"
              >
                <button
                  type="button"
                  className="bg-black text-white px-4 py-2 rounded-full hover:opacity-[0.5] text-[15px]"
                >
                  Join Us
                </button>

                <button
                  type="button"
                  className="border-[1px] text-black px-4 py-2 rounded-full hover:border-black text-[15px]"
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 px-2">
              <div
                onClick={() => {
                  setMenu(false);
                }}
                className="flex gap-2 items-center cursor-pointer"
              >
                <Image
                  src="/cart.svg"
                  width={30}
                  height={30}
                  alt="small image"
                  className="object-contain"
                />
                <p className="text-[15px] ml-1 ">Bag</p>
              </div>

              <div
                onClick={() => {
                  setMenu(false);
                }}
                className="flex gap-2 items-center cursor-pointer"
              >
                <Image
                  src="/lock.svg"
                  width={30}
                  height={30}
                  alt="small image"
                  className="object-contain"
                />
                <p className="text-[15px] ml-1 ">Orders</p>
              </div>

              <div
                onClick={() => {
                  setMenu(false);
                }}
                className="flex gap-2 items-center cursor-pointer"
              >
                <Image
                  src="/house.svg"
                  width={30}
                  height={30}
                  alt="small image"
                  className="object-contain"
                />
                <p className="text-[15px] ml-1 ">Find a Store</p>
              </div>

              <div
                onClick={() => {
                  setMenu(false);
                }}
                className="flex gap-2 items-center cursor-pointer mb-[10rem]"
              >
                <Image
                  src="/question.svg"
                  width={30}
                  height={30}
                  alt="small image"
                  className="object-contain"
                />
                <p className="text-[15px] ml-1  ">Help</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
