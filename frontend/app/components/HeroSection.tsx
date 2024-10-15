"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import {toast} from "react-toastify"

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState("");
    const [shortId,setShortUrl]= useState("");
    
   async  function postUrl(){
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9._~:/?#[@\]!$&'()*+,;=-]*)?$/;
    if(!urlPattern.test(text)){
      toast.error("please check the url it should be https")
    }
    try{
    const response = await axios.post(`${process.env.DOMAIN}/api/v1/url/create`,{url:text})
    if(response.data.success==true){
      setShortUrl(response.data.data.shortUrl)
      toast.success("Short Url Created Successfully")
    }
    else{
      toast.error(`Error:${response.data.message}`)
    }
  }catch(err){
    console.log(err)
    toast.error("Error while getting the url please make sure the url is correct")
   }
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault(); 
        postUrl()
      }
    };
    async function handleCopy(){
     await navigator.clipboard.writeText(
      shortId
     )
     toast.success("Url Copied Successfully")
    
    }
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="flex flex-grow mt-48 items-center text-center flex-col">
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
    {shortId==""?<input
      type="text"
      placeholder="Paste Your Link Here"
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      className="h-12 w-96 border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-4 py-3 text-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(16,185,129)] focus:ring-opacity-50"
    />:<span className="h-12 w-96 border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-4 py-3 text-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(16,185,129)] focus:ring-opacity-50">{shortId}</span>}
    
        <button onClick={shortId==""?postUrl:handleCopy} className="inline-flex h-12 animate-shimmer items-center justify-center ml-4 rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {shortId==""?"Submit":<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>}
        </button>
  

        
      
  </div>
  </div>
    );
    }

    export default HeroSection;
