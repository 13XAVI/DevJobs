import React from "react";
import { useTheme } from "./Theme";

function Search(props) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="mx-auto relative z-20">
      <div
        className={`mx-auto flex flex-col sm:flex-row border rounded-s-md border-r-2 ${
          theme === "dark" ? "bg-VeryDArkBlue  border-VeryDArkBlue" : "bg-white"
        } max-w-4xl w-auto -mt-10 z-20`}
      >
        <div className="flex justify-center items-center py-2 px-2 mx-4">
          <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill="#5964E0"
              c
              fill-rule="nonzero"
            />
          </svg>
          <input
            type="text"
            className={` ${
              theme === "dark" ? "bg-VeryDArkBlue ml-3" : "bg-white'"
            } `}
            placeholder="Filter by companies,experities..."
          />
        </div>
        <div
          className={`border-l ${
            theme === "dark" ? "bg-slate-100" : "bg-gray-500"
          } `}
        ></div>
        <div className="flex justify-center items-center py-2 px-2 mx-4">
          <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
              fill="#5964E0"
              fill-rule="nonzero"
            />
          </svg>
          <input
            type="text"
            placeholder="Filter By location"
            className={` ${
              theme === "dark" ? "bg-VeryDArkBlue " : "bg-white"
            } ml-3 `}
          />
        </div>
        <div
          className={`border-l ${
            theme === "dark" ? "bg-slate-100 " : "bg-gray-500"
          } `}
        ></div>
        <div className="flex  items-center justify-start mx-4 py-2 px-2 ">
          <input type="checkbox" className="bg-slate-500" />
          <p
            className={`font-bold  ${
              theme === "dark"
                ? "bg-VeryDArkBlue text-white"
                : "text-VeryDArkBlue bg-white"
            } `}
          >
            Full time Only
          </p>
          <button className="px-3 py-2  mx-5 text-sm bg-violete text-white font-semibold rounded-md border border-violete hover:text-white hover:bg-ligthViolete hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
