"use client"
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState("");

    
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="flex flex-grow mt-48 items-center flex-col">
    <div
      className={`${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } transition-all duration-1000 ease-in-out text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-white`}
      style={{
        fontFamily: `"Inter var", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
      }}
    >
      Shorten your Link, Expand your Reach.
    </div>
    <div className={`${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } transition-all duration-1000 ease-in-out mt-20 max-w-96 flex justify-center`}>
    <input
      type="text"
      placeholder="Paste Your Link Here"
      onChange={(e) => setText(e.target.value)}
      className="h-12 w-96 border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-4 py-3 text-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(16,185,129)] focus:ring-opacity-50"
    />
    
        <button className="inline-flex h-12 animate-shimmer items-center justify-center ml-4 rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Submit
        </button>
  

        
      
  </div>
  </div>
    );
    }

    export default HeroSection;
