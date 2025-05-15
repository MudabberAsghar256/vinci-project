export default function Navbar() {
  return (
    <div>
      <nav className="bg-[#E8E9E4] border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center justify-center text-center">
            <img
              src="https://staging.physician.withpractice.ai/images/icons/chart-ai-logo.png"
              height={"50px"}
              width={"50px"}
            />
            <h1 className="font-semibold text-[18px] md:text-[21px] text-[#7abd64]">
              Practice AI
            </h1>

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-black bg-[#F0F0F0] ml-3 p-3 focus:outline-none  font-medium rounded-lg text-sm px-5  text-center inline-flex items-center"
              type="button"
            >
              Mudabber Asghar s Default Practice
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              ></svg>
            </button>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="font-medium flex flex-col justify-center items-center text-center p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <div>
                <img
                  src="/image/nav-icon.svg"
                  className="w-[22px] h-[22px] text-amber-10"
                />
              </div>
              <div>
                <img src="/image/nav-icon2.svg" className="w-[22px] h-[20px]" />
              </div>
              <div>-------------</div>
              <div>---------------</div>
              <div>
                <img src="/image/nav-icon5.svg" className="w-[22px] h-[22px]" />
              </div>
              <div>
                <img src="/image/nav-icon4.svg" className="w-[22px] h-[22px]" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
