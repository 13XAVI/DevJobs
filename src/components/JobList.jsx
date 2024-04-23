import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./Theme";
import axios from "axios";

function JobList() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [jobid, setJobId] = useState();

  useEffect(() => {
    axios
      .get("https://prisma-zt8q.onrender.com/jobs")
      .then((res) => {
        const newData = res.data.map((job) => {
          if (job.logoBackground && typeof job.logoBackground === "string") {
            return {
              ...job,
              logoBackground: job.logoBackground.replace(/\s/g, ""),
            };
          }
          return job;
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (jobId) => {
    navigate(`/job/${jobId}`);
    setJobId(jobId);
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-midNigth" : " bg-ligthGray"
      } grid grid-cols-1 gap-8 max-w-4xl m-4  sm:mx-auto pt-20 pb-5 sm:grid-cols-3  `}
    >
      {data.map((job) => (
        <div
          key={job.id}
          className={`${
            theme === "dark" ? "bg-VeryDArkBlue" : " bg-white"
          } rounded-lg px-4 py-4 ring-1 ring-slate-900/5 shadow-xl relative`}
          onClick={() => handleClick(job.id)}
          style={{ cursor: "pointer" }}
        >
          <div
            className={`absolute top-0 left-12 transform -translate-x-1/2 bg-${job.logoBackground} -translate-y-1/2 rounded-md p-2 w-10 h-10`}
            style={{
              backgroundColor: `hsl(${job.logoBackground}) bg-${job.logoBackground}`,
            }}
          >
            <img src={`../src${job.logo}`} className="w-6 h-6" />
          </div>

          <p className="text-slate-500 flex dark:text-slate-400 mt-2 text-sm gap-2">
            {job.postedAt} . {job.contract}
          </p>
          <h3
            className={`${
              theme === "dark" ? "text-white " : " bg-white"
            } mt-2 text-base font-medium tracking-tight`}
          >
            {job.position}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            {job.company}
          </p>
          <h2 className="text-violete dark:text-white mt-5 text-base font-medium tracking-tight">
            {job.location}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default JobList;
