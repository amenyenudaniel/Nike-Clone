const School = () => {
  return (
    <div>
      <div className=" flex-col school-head cursor-pointer">
        <h1 className=" banner-h1 text-dark font-extrabold mb-5 mt-2  mt-[4rem]">
          FITS FOR FALL
          <br />
          AND BEYOND
        </h1>
        <p className=" text-dark text-[17px] mb-[2rem]">
          Bring big attitude to your school day with the latest kicks, tops, and
          more.
        </p>

        <button
          type="button"
          className="bg-black text-white px-4 py-2 rounded-full hover:opacity-[0.5] text-[17px] w-[200px] btn mb-[6rem]"
        >
          Shop Back to School
        </button>
      </div>

      <div className="grid--school gap-4">
        <img src="/school1.webp" alt="school" className="cursor-pointer" />
        <img src="/school2.webp" alt="school" className="cursor-pointer" />
        <img src="/school3.webp" alt="school" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default School;
