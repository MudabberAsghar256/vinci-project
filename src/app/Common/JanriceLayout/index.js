import Link from "next/link";

export const JanriceLayout = ({ children, backHref = "/", step = 1 }) => {
  return (
    <div className="w-full min-h-screen bg-[#FAF6F3] flex justify-center items-center p-4">
      <div className="relative bg-[rgb(232,233,228)] bg-opacity-100 rounded-md md:px-20 py-10 w-full max-w-[650px] shadow-md shadow-black/10 p-4">
        <Link href={backHref}>
          <button className="absolute cursor-pointer top-6 left-6 bg-white text-gray-400 hover:text-white hover:bg-[#4A703E] px-4 py-2 rounded-md transition duration-700  z-10">
            Back
          </button>
        </Link>
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="flex items-center justify-center text-center">
            <img
              src="https://staging.physician.withpractice.ai/images/icons/chart-ai-logo.png"
              height="50px"
              width="50px"
              alt="logo"
            />
            <h1 className="font-semibold text-[18px] md:text-[21px] text-[#7abd64]">
              Practice AI
            </h1>
          </div>
          <div className="rounded-full h-[180px] w-[180px] mt-5 mb-8 relative bg-[radial-gradient(rgb(122,189,100),rgb(122,189,100))]">
            <div className="flex flex-col items-center justify-center text-white font-[500] text-[23px] h-full">
              <p className="text-center">Chart AI</p>
              <img
                className="absolute bottom-[115px] left-[130px] w-[80px]"
                src="https://staging.physician.withpractice.ai/images/dashboard/mic2.svg"
                alt="mic"
              />
              <img
                className="absolute top-[112px] right-[119px] w-[80px]"
                src="https://staging.physician.withpractice.ai/images/dashboard/star2.svg"
                alt="star"
              />
            </div>
          </div>
          <div className="flex mb-4 gap-1">
            {[1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`block rounded-lg w-[36px] h-[6px] mx-1 ${
                  step >= dot ? "bg-[#4A703E]" : "bg-[#F0F0F0]"
                }`}
              ></span>
            ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
