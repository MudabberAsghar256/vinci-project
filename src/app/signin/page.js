"use client";
import Link from "next/link";
import { useState } from "react";
import { JanriceLayout } from "../Common/JanriceLayout";

export default function signin() {
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const healthcare = document.getElementById("healthcare-checkbox");
    const terms = document.getElementById("terms-checkbox");

    if (healthcare?.checked && terms?.checked) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <JanriceLayout backHref="/signup" step={"?"}>
      <div className=" pt-0 w-full ">
        <div className="text-center ">
          <h3 className="text-[22px] text-black  mb-2">Welcome</h3>
          <p className="text-black mb-4 text-[16px] ">
            We need a valid email and password to create an account
          </p>
        </div>
        <div class="w-full ">
          <form class=" rounded    mb-4">
            <div className="mb-1">
              <label
                class=" block text-gray-700  font-bold "
                for="Email Address"
              >
                Email Address
              </label>
              <input
                class="shadow appearance-none p-3 pt-2  required rounded w-full  px-3 bg-white text-gray-700 mb-3 "
                required
                id="Email"
                type="text"
                placeholder="email@example.com"
              />
            </div>
            <div class="mb-2">
              <label class="block text-gray-700  font-bold " for="password">
                Password
              </label>
              <input
                class="shadow appearance-none   rounded w-full p-3 px-3 bg-white text-gray-700 mb-2 "
                required
                id="password"
                type="password"
                placeholder="Type Password here"
              />
            </div>
            <Link href="/forget">
              <div className="text-[#4A703E] text-right">
                <p>Forgot your password?</p>
              </div>
            </Link>
          </form>
        </div>
      </div>

      <div className="w-full px-10 pt-2">
        <button
          onClick={handleSubmit}
          className="flex justify-center items-center bg-[#4A703E] px-3 py-2.5 border hover:border-primary rounded-lg text-white w-full bg-primary"
        >
          Sign in
        </button>
      </div>
    </JanriceLayout>
  );
}
