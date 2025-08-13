// src/components/DownloadAppBanner.jsx
import React from "react";

export default function DownloadAppBanner() {
  return (
    <section
      className="bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-6 py-12 mt-10 sm:w-screen"
      style={{
        backgroundImage: "url('/images/back.png')",
        height: "474px", // random height
        width: "full",  // random width
      }}
    >
      <div className="max-w-md bg-opacity-80 p-4 rounded-lg ml-32 mt-16">
        <h2 className="flex items-center gap-2 text-sm font-bold mb-">
        <img src="/images/105.svg" alt="Logo" className="w-4 h-4" />
        Get The App
      </h2>
        <h2 className="text-[40px] font-bold mb-2">Download the 
          SimFree app now!</h2>
        <p className="mb-4">
          ...and start your hassle-free travel experience!
        </p>
        <div className="flex space-x-4">
          <img src="/images/app-store.svg" alt="App Store" className="h-10" />
          <img src="/images/google-play.svg" alt="Google Play" className="h-10" />
        </div>
                <span className="relative top-12 md:text-sm"> Lorem ipsum dolor sit amet consectetur. <h1 className="font-bold md:text-sm md:left-64 mb-3 md:mr-24 md:mt-1 relative bottom-6 left-72"> Sed neque sit purus</h1> </span>

</div>


      <img
        src="/images/app-mockup.svg"
        alt="App Mockup"
        className="w-40 md:w-64 mt-40 mr-44 md:ml-6"
      />
      
    </section>
  );
}
