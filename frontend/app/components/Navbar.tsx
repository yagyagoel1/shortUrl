"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const [isVisible,setIsVisible] = useState(false);
    const handleAnalytics = () => {
        router.push("/analytics");
    };
    useEffect(() => {
        setIsVisible(true)},[])

    return (
        <div className={`${
            isVisible ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-1000 ease-in-out flex justify-between mx-8 mt-2 items-center p-4 text-white border-b-gray-800 border-b`}>
           <div
  className="font-bold text-2xl transform hover:scale-105"
  style={{
    fontFamily: `"Inter var", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
  }}
>
  TinyUrl
</div>
<div>
            <button className="px-3 py-1 rounded text-gray-400 hover:text-[rgb(16,185,129)]/[var(--tw-text-opacity)]  mx-3 transition-transform duration-300 ease-in-out hover:translate-x-2" onClick={handleAnalytics}>
                Analytics
            </button>
            <button className="px-3 py-1 rounded text-gray-400 hover:text-[rgb(16,185,129)]/[var(--tw-text-opacity)]  mx-3 transition-transform duration-300 ease-in-out hover:translate-x-2" onClick={handleAnalytics}>
                Pricing
            </button>
            <button className="px-3 py-1 rounded text-gray-400 hover:text-[rgb(16,185,129)]/[var(--tw-text-opacity)] mx-3  transition-transform duration-300 ease-in-out hover:translate-x-2" onClick={handleAnalytics}>
                Architecutre
            </button>
        </div>
        </div>
    );
};

export default Navbar;
