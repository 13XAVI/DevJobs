import React from "react";
import JobList from "./JobList";
import { ThemeProvider, useTheme } from "./Theme";
import Header from "./Header";

function Home(props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`bg-${theme === "dark" ? "midNigth" : "ligthGray"} relative`}
    >
      <Header />
      <div
        className={`ml-60 mr-40 mb-10 h-20 w-auto rounded-r-md absolute left-0 top-32 right-0 flex justify-around flex-grow gap-0.5 ${
          theme === "dark" ? "bg-midNigth" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-start flex-grow pl-4 rounded-tl-lg rounded-bl-lg">
          <button>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#5964E0"
                fill-rule="nonzero"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Filter by title, company, expertise"
            className={`flex-grow pl-4 rounded-none ${
              theme === "dark" ? "bg-darkBlue" : "bg-white"
            }`}
          />
        </div>
        <div className="flex-grow flex items-center justify-start pl-4 gap-2">
          <button>
            <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                fill="#5964E0"
                fill-rule="nonzero"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Filter by location..."
            className={`rounded-none flex-grow border-none ${
              theme === "dark" ? "bg-darkBlue" : "bg-white"
            }`}
          />
        </div>
        <div className="flex-grow flex items-center justify-around rounded-r-lg">
          <input type="checkbox" name="" id="" />
          <p
            className={`flex-grow pl-4 rounded-none ${
              theme === "dark" ? "text-white" : "bg-white"
            } font-KumbhSans font-semibold`}
          >
            Full Time Only
          </p>
          <button className="px-6 py-2 mr-5 text-sm bg-violete text-white font-semibold rounded-md border border-violete hover:text-white hover:bg-ligthViolete hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Search
          </button>
        </div>
      </div>

      {/* Cards */}
      <JobList />

      <div
        className={`${
          theme === "dark" ? "bg-midNigth" : " bg-ligthGray"
        } flex justify-center p-6 bg-ligthGray`}
      >
        <button className="px-4 py-1 text-sm bg-violete text-white font-semibold rounded-md border border-violete hover:text-white hover:bg-ligthViolete hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Home;
