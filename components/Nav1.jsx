import Image from "next/image";

const Nav1 = () => {
  return (
    <div
      className="flex justify-between bg-[#F5F5F5] p-[5px] pl-[50px] pr-[50px] py-2"
      id="nav"
    >
      <div className="flex gap-5 ">
        <Image
          src="/jordan.svg"
          width={25}
          height={25}
          alt="small image"
          className="object-contain hover:opacity-[0.6] cursor-pointer "
        />
        <Image
          src="/next-nav.svg"
          width={25}
          height={25}
          alt="small image"
          className="object-contain hover:opacity-[0.6] cursor-pointer"
        />
      </div>
      <div className="flex gap-[15px] item-center top-links">
        <a href="#nav" className="text-[13px] hover:opacity-[0.7]">
          Find a Store
        </a>
        <div className="w-[1px] h-[13px] bg-black mt-1" />
        <a href="#nav" className="text-[13px] hover:opacity-[0.7]">
          Help
        </a>
        <div className="w-[1px] h-[13px] bg-black mt-1" />

        <a href="#nav" className="text-[13px] hover:opacity-[0.7]">
          Join Us
        </a>
        <div className="w-[1px] h-[13px] bg-black mt-1" />
        <a href="#nav" className="text-[13px] hover:opacity-[0.7]">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Nav1;
