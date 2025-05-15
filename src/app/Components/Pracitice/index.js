import Link from "next/link";
export default function Pracitice() {
  return (
    <div class="w-full min-h-screen bg-[#FAF6F3]">
      <div>
        <div className="h-full flex justify-center items-center min-h-screen mx-auto p-4 ">
          <div class="bg-[rgb(232,233,228)] bg-opacity-100 rounded-md px-8 md:px-20 py-10 w-[650px] shadow-md shadow-black/10 p-4 rounded ">
            <div class="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center text-center">
                <img
                  src="https://staging.physician.withpractice.ai/images/icons/chart-ai-logo.png"
                  height={"50px"}
                  width={"50px"}
                />
                <h1 class="font-semibold text-[18px] md:text-[21px] text-[#7abd64]">
                  Practice AI
                </h1>
              </div>
              <div className=" rounded-full h-[180px] w-[180px] mt-5 mb-8 relative bg-[radial-gradient(rgb(122,189,100),rgb(122,189,100))]">
                <div class="flex flex-col items-center justify-center text-white font-[500] text-[23px] h-full">
                  <p className="text-center">Chart AI</p>
                  <img
                    className=" 
                absolute bottom-[115px] left-[130px] w-[80px]"
                    src="https://staging.physician.withpractice.ai/images/dashboard/mic2.svg"
                  />
                  <img
                    class="absolute top-[112px] right-[119px] w-[80px]"
                    src="https://staging.physician.withpractice.ai/images/dashboard/star2.svg"
                  />
                </div>
              </div>
              <div className=" justify-center items-center text-center">
                <h1 class="text-[24px] font-[500] text-black">Welcome</h1>
                <p className="text-center font-[400] text-black">
                  Chart AI generates "ready to bill" SOAP notes and codes at
                  your point of care.
                </p>
              </div>
              <div className="w-full px-10 pt-6 pb-2">
                <Link href="medical">
                  <button class="flex justify-center items-center bg-[#4A703E] px-3 py-2.5 border hover:border-primary rounded-lg text-white w-full  bg-primary">
                    Get Started
                  </button>
                </Link>
              </div>
              <p class="text-center font-[400] text-[14px] text-black">
                Already have an account?
                <Link href="/signin">
                  <span class="font-[500] text-primary cursor-pointer text-[#4A703E]">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
