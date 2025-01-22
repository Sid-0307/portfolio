import React, { useState, useEffect } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [currentPun, setCurrentPun] = useState("");

  const loadingPuns = [
    "Making the pixels extra shiny ...",
    "Spinning up the hamster wheel ...",
    "Warming up the processors with dad jokes ...",
    "Downloading more RAM ...",
    "Untangling the code ...",
    "Counting to infinity , Twice ...",
    "Convincing AI not to take over the world ...",
    "Finding the missing semicolon ...",
    "Teaching robots to dance ...",
    "Solving P vs NP ...",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    const punInterval = setInterval(() => {
      setCurrentPun(
        loadingPuns[Math.floor(Math.random() * loadingPuns.length)]
      );
    }, 2000);

    setCurrentPun(loadingPuns[0]);

    return () => {
      clearInterval(progressInterval);
      clearInterval(punInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="w-96 max-w-[80%] space-y-6">
        <div className="text-[#ddbda0] text-lg font-bold text-center">
          {progress}%
        </div>

        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full  bg-[#ddbda0] transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Pun display */}
        <div className="h-16 text-center">
          <p className="text-lg animate-fade-in text-[#ddbda0]">{currentPun}</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
