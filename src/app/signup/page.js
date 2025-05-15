"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { JanriceLayout } from "../Common/JanriceLayout";

export default function Signup() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    const username = document.getElementById("username").value.trim();
    const lastname = document.getElementById("Lastname").value.trim();
    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validation
    if (!username || !lastname || !email || !password || !confirmPassword) {
      setError("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ✅ All Valid
    setError("");
    router.push("/signin");
  };

  return (
    <JanriceLayout backHref="/data" step={3}>
      <div className="pt-0">
        <div className="text-center">
          <h3 className="text-[22px] text-black mb-2">
            Enter your credentials
          </h3>
          <p className="text-black mb-4 text-[16px]">
            We need a valid email and password to create an account
          </p>
        </div>

        <form className="w-full rounded mb-1 " onSubmit={handleSubmit}>
          <div className="mb-4 flex gap-4">
            <div className="w-full">
              <label
                className="text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none rounded w-full p-3 px-3 bg-white text-gray-700 focus:outline-none"
                required
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="w-full">
              <label
                className="text-gray-700 font-bold mb-2"
                htmlFor="Lastname"
              >
                Lastname
              </label>
              <input
                className="appearance-none rounded w-full p-3 px-3 bg-white text-gray-700 focus:outline-none"
                required
                id="Lastname"
                type="text"
                placeholder="Lastname"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="text-gray-700 font-bold mb-2" htmlFor="Email">
              Email Address
            </label>
            <input
              className="appearance-none rounded w-full p-3 px-3 bg-white text-gray-700 focus:outline-none"
              required
              id="Email"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none rounded w-full p-3 px-3 bg-white text-gray-700 focus:outline-none"
              required
              id="password"
              type="password"
              placeholder="Type Password here"
            />
          </div>

          <div className="mb-3">
            <label
              className="text-gray-700 font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="appearance-none rounded w-full p-3 px-3 bg-white text-gray-700 focus:outline-none"
              required
              id="confirm-password"
              type="password"
              placeholder="Confirm Your Password"
            />
          </div>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <button
            type="submit"
            className="flex justify-center mt-5 items-center bg-[#4A703E] px-3 py-2.5 border hover:border-primary rounded-lg text-white w-full"
          >
            Continue
          </button>
        </form>

        <div className="flex justify-center text-center items-center mt-4">
          <p className="text-black font-[400] text-[14px]">
            Already have an account?
          </p>
          <Link href="/signin">
            <p className="text-[#4A703E] ml-1">sign in</p>
          </Link>
        </div>
      </div>
    </JanriceLayout>
  );
}
