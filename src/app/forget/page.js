"use client";
import Link from "next/link";
import { JanriceLayout } from "../Common/JanriceLayout";
import { useState } from "react";

export default function Forget() {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (healthcare?.checked && terms?.checked) {
      setError(false);
      console.log("Form Submitted");
    } else {
      setError(true);
    }
  };

  return (
    <JanriceLayout backHref="/signin">
      <div className="pt-0 w-full">
        <div className="text-center">
          <h3 className="text-[22px] text-black mb-2">Welcome</h3>
          <p className="text-black mb-4 text-[16px]">
            Our Co-Pilot helps you get structured medical transcripts & notes to
            get the perfect EMR.
          </p>
        </div>
        <form className="w-full rounded mb-4 px-10" onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-bold" htmlFor="Email">
            Email Address
          </label>
          <input
            className="appearance-none p-3 rounded-md w-full bg-white text-gray-700 mb-4"
            required
            id="Email"
            type="email"
            placeholder="email@example.com"
          />
          <Link href="/verify">
            <button
              type="submit"
              className="flex justify-center items-center bg-[#4A703E] px-3 py-2.5 border hover:border-primary rounded-lg text-white w-full"
            >
              Recover password
            </button>
          </Link>
        </form>
      </div>
    </JanriceLayout>
  );
}
