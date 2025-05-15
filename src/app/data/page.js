"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { JanriceLayout } from "../Common/JanriceLayout";

export default function Data() {
  // ✅ Capitalized function name
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    const healthcare = document.getElementById("healthcare-checkbox");
    const terms = document.getElementById("terms-checkbox");

    if (healthcare?.checked && terms?.checked) {
      setError(false);
      router.push("/signup");
    } else {
      setError(true);
    }
  };

  return (
    <JanriceLayout backHref="/medical" step={2}>
      <div className="p-[32px] pt-0 pb-5">
        <div>
          <h3 className="text-[22px] text-black text-center mb-2">
            Data, compliance, & Privacy
          </h3>
          <p className="text-black mb-4 text-[16px]">
            We designed Chart AI to be safe, trustworthy, and explainable.
            Encounter audio, transcripts, patient details or identifiable
            information are not stored. We are HIPAA and GDPR compliant. Read
            our <span className="text-[#4A703E]">privacy policy</span>
            here.
          </p>
        </div>
        <div className="items-center mb-4 space-y-2">
          <div className="flex items-center">
            <input
              id="healthcare-checkbox"
              type="checkbox"
              className="peer w-4 h-4 text-[#4A703E] bg-[#E8E9E4] border-white rounded-sm hover:border-[#4A703E] checked:border-[#4A703E] focus:ring-[#4A703E]"
            />
            <label htmlFor="healthcare-checkbox" className="ms-2 text-black">
              I am a professional healthcare provider
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="terms-checkbox"
              type="checkbox"
              className="peer w-4 h-4 text-[#4A703E] bg-[#E8E9E4] border-white rounded-sm hover:border-[#4A703E] checked:border-[#4A703E] focus:ring-[#4A703E]"
            />
            <label htmlFor="terms-checkbox" className="ms-2 text-sm text-black">
              I agree to the{" "}
              <span className="text-[#4A703E]">Terms of use</span> and the{" "}
              <span className="text-[#4A703E]">
                Business Associate Agreement
              </span>
            </label>
          </div>

          {error && <p className="text-red-600 text-sm">This is required.</p>}
        </div>
      </div>
      <div className="w-full px-10 pt-6 pb-2">
        <button
          onClick={handleSubmit}
          className="flex justify-center items-center bg-[#4A703E] px-3 py-2.5 border hover:border-primary rounded-lg text-white w-full bg-primary"
        >
          Continue
        </button>
      </div>
    </JanriceLayout>
  );
}
