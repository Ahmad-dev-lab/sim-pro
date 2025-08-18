
import React from "react";

export default function DownloadAppBanner() {
  return (
    <section
      className="bg-cover bg-center 2xl:h-[474px] xl:h-[474px] lg:h-[474px] md:h-[474px] sm:h-[374px] xxxs:h-[647px] flex flex-col md:flex-row items-center justify-between px-6 py-12 mt-10 sm:w-screen"
      style={{
        backgroundImage: "url('/images/back.png')",
         
        width: "full", 
      }}
    >
      <div className="max-w-md bg-opacity-80 p-4 rounded-lg ml-32 mt-16">
        <h2 className="flex items-center gap-2 text-sm font-bold sm:relative sm:-left-60 md:left-0 sm:top-0 md:relative md:bottom-0 lg:relative lg:bottom-0 xxxs:relative xxxs:right-16 xxxs:bottom-20">
        <img src="/images/105.svg" alt="Logo" className="w-4 h-4" />
        Get The App
      </h2>
        <h2 className="text-[40px] font-bold mb-2 sm:relative sm:-left-60 sm:top-0 md:left-0 md:relative md:bottom-0 lg:relative lg:bottom-0 xxxs:relative xxxs:right-16 xxxs:bottom-20 xxxs:text-[32px] xxxs:w-[300px]">Download the 
          SimFree app now!</h2>
        <p className="mb-4 sm:relative sm:-left-60 sm:top-0 md:relative md:bottom-0 md:left-0 lg:relative lg:bottom-0 xxxs:relative xxxs:right-16 xxxs:bottom-20 ">
          ...and start your hassle-free travel experience!
        </p>
        <div className="flex space-x-4">
          <img src="/images/app-store.svg" alt="App Store" className="h-10  xxxs:hidden" />
          <img src="/images/google-play.svg" alt="Google Play" className="h-10 xxxs:hidden" />
        </div>
                <p className="relative top-12 sm:relative sm:-left-60 sm:top-0 md:relative md:left-0 md:text-sm lg:relative lg:top-0 xxxs:relative xxxs:right-16 xxxs:-top-20 text-[14px] "> Lorem ipsum dolor sit amet consectetur. <br /><h1 className="font-bold "> Sed neque sit purus</h1> </p>
</div>


      <img
        src="/images/app-mockup.svg"
        alt="App Mockup"
        className="w-40 xxxs:w-52 md:w-64 mt-40 mr-44 sm:relative sm:bottom-[390px] sm:left-60 md:relative md:bottom-0 lg:relative lg:bottom-0 md:left-0 xxxs:relative xxxs:bottom-[143px] xxxs:left-[91px] "
      />
      
    </section>
  );
}
