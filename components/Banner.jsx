import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col px-10 py-[50px] banner">
        <p className="text-white text-[20px] mt-3">Back to School Sale</p>
        <h1 className="text-[4.5rem] banner-h1 text-white mb-5 mt-2">
          SAVE UP TO 60%
        </h1>
        <p className="text-white text-[20px]">
          Get an extra 20% off select with code SCHOOL20.
        </p>
        <p className="text-white text-[20px]">Exclusions apply.</p>
        <button
          type="button"
          className="bg-white text-black px-4 py-2 rounded-full hover:bg-[#E5E5E5] flex text-[17px] w-[100px] mt-8 flex items-center justify-center"
        >
          Shop
        </button>
      </div>

      <div className="banner-mobile p-6">
        <img
          src="/banner-mb.webp"
          alt="banner-mobile"
          style={{ width: "100%", height: "100%" }}
        />

        <p className="text-dark text-[20px] mt-5">
          Get an extra 20% off select with code SCHOOL20.
        </p>
        <p className="text-dark text-[20px]">Exclusions apply.</p>
        <button
          type="button"
          className="bg-black text-white px-4 py-2 rounded-full hover:opacity-[0.6] flex text-[17px] w-[100px] mt-8 flex items-center justify-center"
        >
          Shop
        </button>
      </div>
      <div className="banner2 mt-[3rem]">
        <img
          src="/banner2.webp"
          alt=""
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="banner-mobile mt-[3rem] p-6">
        <img
          src="/banner2-mb.webp"
          alt=""
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Banner;
