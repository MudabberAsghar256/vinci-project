"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { JanriceLayout } from "../Common/JanriceLayout";
export default function Medical() {
  const [isOpenSpecialty, setIsOpenSpecialty] = useState(false);
  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    "Anatomical Pathology"
  );
  const [selectedCountry, setSelectedCountry] = useState("United States");

  const dropdownRefSpecialty = useRef();
  const dropdownRefCountry = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefSpecialty.current &&
        !dropdownRefSpecialty.current.contains(event.target) &&
        dropdownRefCountry.current &&
        !dropdownRefCountry.current.contains(event.target)
      ) {
        setIsOpenSpecialty(false);
        setIsOpenCountry(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectSpecialty = (specialty) => {
    setSelectedSpecialty(specialty);
    setIsOpenSpecialty(false);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpenCountry(false);
  };
  return (
    <JanriceLayout backHref="/" step={1}>
      {/* text1 */}
      <h1 className="text-[24px] font-[500] text-black text-center">
        Your dynamic title here!
      </h1>
      <div className="w-full">
        <div className="flex pt-3">
          <label className="block mb-2 text-md font-normal text-gray-900">
            Medical Specialty
          </label>
          <span className="text-dangerBorder text-red-300">*</span>
        </div>
        <div className="relative" ref={dropdownRefSpecialty}>
          <button
            onClick={() => setIsOpenSpecialty(!isOpenSpecialty)}
            className="flex items-center justify-between w-full py-2 px-3 text-black rounded-sm bg-[#F0F0F0]"
          >
            {selectedSpecialty}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isOpenSpecialty && (
            <div className="absolute top-full left-0 z-10 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                <li>
                  <a
                    href="#"
                    onClick={() =>
                      handleSelectSpecialty("Anatomical Pathology")
                    }
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Anatomical Pathology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleSelectSpecialty("Settings")}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleSelectSpecialty("Earnings")}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex pt-3">
          <label className="block mb-2 text-md font-normal text-gray-900">
            Select Country
          </label>
          <span className="text-dangerBorder text-red-300">*</span>
        </div>
        <div className="relative" ref={dropdownRefCountry}>
          <button
            onClick={() => setIsOpenCountry(!isOpenCountry)}
            className="flex items-center justify-between w-full py-2 px-3 text-black rounded-sm bg-[#F0F0F0]"
          >
            {selectedCountry}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isOpenCountry && (
            <div className="absolute top-full left-0 z-10 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                <li>
                  <a
                    href="#"
                    onClick={() => handleSelectCountry("United States")}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    United States
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleSelectCountry("Pakistan")}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Pakistan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleSelectCountry("India")}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    India
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="w-full px-10 pt-6 pb-2">
        <Link href="/data">
          <button className="flex justify-center items-center bg-[#4A703E] px-3 py-2.5 border hover:border-primary rounded-lg text-white w-full bg-primary">
            Continue
          </button>
        </Link>
      </div>
    </JanriceLayout>
  );
}
