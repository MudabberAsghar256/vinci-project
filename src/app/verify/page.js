"use client";
import { JanriceLayout } from "../Common/JanriceLayout";
import { useState, useRef } from "react";

export default function Verify() {
  const [error, setError] = useState(false);
  const inputsRef = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const code = inputsRef.current.map((input) => input?.value).join("");

    if (code.length === 6) {
      setError(false);
      console.log("Form Submitted, code:", code);
    } else {
      setError(true);
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <JanriceLayout backHref="/signin" step={3}>
      <div className="pt-0 w-full">
        <div className="text-center">
          <h3 className="text-[22px] text-black mb-3">Verify your Email</h3>
          <p className="text-black mb-5 text-[16px]">
            We’ve sent you a code to the email entered
          </p>
        </div>
        <form className="w-full rounded" onSubmit={handleSubmit}>
          <div className="flex gap-2 mb-2">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="sm:w-[80px] w-[40px] sm:h-[70px] h-[50px] sm:leading-[70px] leading-[50px] text-center text-2xl border-0 rounded-xl text-black bg-white focus:outline-none focus:ring-0"
              />
            ))}
          </div>

          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">
              Please enter the complete 6-digit code.
            </p>
          )}

          <button
            type="submit"
            className="flex justify-center items-center bg-[#4A703E] px-3 py-2.5 border hover:border-primary rounded-lg text-white w-full"
          >
            Confirm Code
          </button>
        </form>
        <div className="gap-1 flex mt-4 text-[14px] text-center justify-center items-center">
          <p className="text-black">Did not receive the code?</p>
          <span className="text-[#4A703E] cursor-pointer">Resend Code</span>
        </div>
      </div>
    </JanriceLayout>
  );
}
