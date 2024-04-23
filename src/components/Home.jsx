import React from "react";
import JobList from "./JobList";
import { ThemeProvider, useTheme } from "./Theme";
import Header from "./Header";
import Search from "./Search";

function Home(props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`bg-${theme === "dark" ? "midNigth" : "ligthGray"} relative`}
    >
      <Header />

      <Search />

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
