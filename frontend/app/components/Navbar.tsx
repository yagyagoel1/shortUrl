"use client"

import { useRouter ,usePathname} from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const path=usePathname()
    const [isVisible,setIsVisible] = useState(false);
    const handleGithub= () => {
        window.open('https://github.com/yagyagoel1', '_blank');
      };
    const handleAnalytics = () => {
    if(path =="/" )router.push("/analytics")
        else
    router.push("/");
    };
    const handleHome=()=>
        router.push("/")
    useEffect(() => {

        setIsVisible(true)
    },[])

    return (
        <div className={`${
            isVisible ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-1000 ease-in-out flex justify-between mx-8 mt-2 items-center p-4 text-white border-b-gray-800 border-b`}>
           <div
  className="font-bold text-2xl transform hover:scale-105" onClick={handleHome}
  style={{
    fontFamily: `"Inter var", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
  }}
>
  TinyUrl
</div>
<div className="flex ">
            <button className="px-3 py-1 flex justify-center items-center rounded text-gray-400 hover:text-[rgb(16,185,129)]/[var(--tw-text-opacity)]  mx-3 transition-transform duration-300 ease-in-out hover:translate-x-2" onClick={handleAnalytics}>
                {path=="/"?"Analytics":"Home"}
                {path=="/"?<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
}
            </button>
            <button onClick={handleGithub} className="px-3 flex justify-center items-center py-1 rounded text-gray-400 hover:text-[rgb(16,185,129)]/[var(--tw-text-opacity)]  mx-3 transition-transform duration-300 ease-in-out hover:translate-x-2" >
                Github 
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 ml-2" viewBox="0 0 24 24">
  <g id="evaGithubOutline0">
    <path id="evaGithubOutline1" fill="currentColor" d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66a1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22a2.75 2.75 0 0 1-.41-2.06a3.71 3.71 0 0 0 0-1.41a7.65 7.65 0 0 0-2.09 1.09a1 1 0 0 1-.84.15a10.15 10.15 0 0 0-5.52 0a1 1 0 0 1-.84-.15a7.4 7.4 0 0 0-2.11-1.09a3.52 3.52 0 0 0 0 1.41a2.84 2.84 0 0 1-.43 2.08a4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66a1 1 0 0 1-.21 1a2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09a3.9 3.9 0 0 0-1.16-.88a1 1 0 1 1 .5-1.94a4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33a.85.85 0 0 0 .13-.62a5.69 5.69 0 0 1 .33-3.21a1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57a5.71 5.71 0 0 1 .33 3.22a.75.75 0 0 0 .11.57a6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1Z"/>
  </g>
</svg>
            </button>
        </div>
        </div>
    );
};

export default Navbar;
