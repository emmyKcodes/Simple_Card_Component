import React from "react";
import { Clock } from "lucide-react";

const UpdateCard = () => {
  return (
    <div className="p-2 max-w-sm mx-auto">
      <div className="rounded-2xl p-8 text-white shadow-inner bg-gradient-to-b from-orange-600/80 via-black/90 to-black">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">48-Hour Updates</h2>

          <p className="text-lg text-white leading-relaxed">
            We&apos;ll keep you in the loop with clear progress updates within
            48 hours.
          </p>

          <div className="flex justify-center">
            <Clock size={48} className="text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white  flex items-center justify-center p-4">
      <UpdateCard />
    </div>
  );
};

export default App;
