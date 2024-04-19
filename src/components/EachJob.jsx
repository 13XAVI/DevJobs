import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useTheme } from "./Theme";
import axios from "axios";
import { useParams } from "react-router-dom";

function EachJob({ match }) {
  const { theme, toggleTheme } = useTheme();
  const [jobData, setJobData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://prisma-zt8q.onrender.com/jobs/${id}`)
      .then((res) => {
        setJobData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!jobData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-ligthGray">
      <Header />
      <div
        className={`ml-96 mr-40 h-32 w-2/4 rounded-r-md absolute left-0 top-32  right-0 flex justify-around flex-grow gap-0.5 ${
          theme === "dark" ? "bg-midNigth" : "bg-white"
        }`}
      >
        <div className="flex bg-YellowScoote items-center justify-center flex-grow max-w-24">
          <span
            className={`${
              theme === "dark" ? "text-white " : "bg-white"
            } font-KumbhSans font-bold text-white`}
          >
            {jobData.company}
          </span>
        </div>
        <div className="flex-grow b flex flex-col items-start justify-start pl-4 gap-2">
          <span
            className={`${
              theme === "dark" ? "text-white " : "bg-white"
            } font-KumbhSans mt-5 font-semibold`}
          >
            {jobData.company}
          </span>
          <span className={`${theme === "dark" ? "text-white " : "bg-white"}`}>
            {jobData.website}
          </span>
        </div>
        <div className="flex-grow flex items-center justify-around rounded-r-lg">
          <button className="px-6 py-2  pos text-sm bg-violete text-white font-semibold rounded-md border border-violete hover:text-white hover:bg-ligthViolete hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Search
          </button>
        </div>
      </div>

      <div
        className={`ml-96 mr-40 w-2/4 rounded-r-md  left-0 mt-20 right-0 flex justify-around flex-grow gap-0.5 ${
          theme === "dark" ? "bg-midNigth" : "bg-white"
        }`}
      >
        <div className="flex-grow ml-6 b flex flex-col items-start justify-start pl-4 gap-2 relative">
          <h3
            className={`${
              theme === "dark" ? "text-white " : "bg-white"
            } mt-2 text-base font-medium tracking-tight`}
          >
            Requirements
          </h3>
          <div className="text-slate-500 flex flex-col max-w-2xl flex-wrap dark:text-slate-400 mt-2 text-sm gap-2">
            <p>{jobData.requirements.content}</p>
            <ul>
              {jobData.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <h3
            className={`${
              theme === "dark" ? "text-white " : "bg-white"
            } mt-2 text-base font-medium tracking-tight`}
          >
            Role
          </h3>
          <div className="text-slate-500 flex flex-col max-w-2xl flex-wrap dark:text-slate-400 mt-2 text-sm gap-2">
            <p>{jobData.role.content}</p>
            <ul>
              {jobData.role.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-grow flex items-center justify-around rounded-r-lg">
          <button className="px-6 py-2 absolute top-80  ml-[-300px]  text-sm bg-violete text-white font-semibold rounded-md border border-violete hover:text-white hover:bg-ligthViolete hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Search
          </button>
        </div>
      </div>

      <div
        className={`${
          theme === "dark" ? "bg-midNigth " : "bg-white"
        } w-full pt-10 flex justify-center items-center relative`}
      >
        <div className="max-w-screen-lg w-full flex flex-col items-center">
          <h3
            className={`${
              theme === "dark" ? "text-white " : "bg-white"
            } mt-2 text-base font-medium tracking-tight`}
          >
            {jobData.position}
          </h3>
          <span className={`${theme === "dark" ? "text-white " : "bg-white"}`}>
            {jobData.company}
          </span>
          <button className="px-4 absolute bottom-0 right-1/3 py-1 mt-2 text-sm bg-violete text-white font-semibold rounded-md border border-violete hover:text-white hover:bg-ligthViolete hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default EachJob;
