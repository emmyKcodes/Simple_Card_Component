import Image from "next/image";
import React from "react";

const StopwatchIcon = () => (
  <Image src="/clock_img.png" alt="Clock" width={150} height={200} />
);

const UpdatesCard = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
      <div className="p-2 rounded-3xl bg-gradient-to-br from-gray-300 to-black shadow-2xl">
        <div className="relative w-[28rem] h-[28rem] bg-gradient-to-b from-neutral-900 from-0% via-orange-600 via-25% to-neutral-900 to-50% rounded-2xl p-8 flex flex-col items-center justify-center text-white overflow-hidden">
          <div className="absolute w-48 h-48 bg-orange-600 opacity-30 rounded-full blur-2xl top-6 left-1/2 -translate-x-1/2"></div>

          <div className="text-center mb-6 relative z-10">
            <h1 className="text-4xl font-light mb-4 tracking-widest leading-relaxed">
              48-Hour Updates
            </h1>
            <p className=" font-light leading-loose tracking-wide max-w-70 mx-auto relative left-[-32px] ">
              We&apos;ll keep you in the loop with clear progress updates within
              48 hours.
            </p>
          </div>

          <div className="flex justify-center items-center mt-8 relative z-10">
            <StopwatchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesCard;
