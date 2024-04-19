import React from "react";
import { useTheme } from "./Theme";

function Header(props) {
  const { theme, toggleTheme } = useTheme();
  const darkModeClass = theme === "dark" ? "dark" : "light";
  return (
    <header className="rounded-bl-full min-h-16 md:min-h-20 flex justify-center  pb-8 relative">
      <img src="../src/assets/mine/Group10.png" alt="" className="w-full" />
      <div className="inline-flex  md:pt-2 items-center justify-around  w-full  absolute">
        <p className="top-14 md:pt-2 left-60 font-KumbhSans  font-bold  text-white text-lg md:text-xl absolute ">
          devJobs
        </p>
        <div className="grid  grid-cols-3 top-20 gap-3 right-36 absolute ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="currentColor"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>

          <label className={`container ${darkModeClass}`}>
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              onClick={toggleTheme}
            />
            <div class="relative w-8 h-4 cursor-pointer bg-ligthGray peer-focus:outline-none peer-focus:ring-2 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-violete after:border-white-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              className="text-white"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
