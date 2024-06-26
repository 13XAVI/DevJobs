import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useTheme } from "./Theme";
import axios from "axios";
import { useParams } from "react-router-dom";

function Eachdata({ match }) {
  const { theme, toggleTheme } = useTheme();
  const [Job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://prisma-zt8q.onrender.com/jobs/${id}`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!Job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-ligthGray">
      <Header />
      <div className="mx-auto relative z-20">
        <div
          className={`mx-auto flex  flex-col sm:flex-row border max-w-xl  rounded-s-md border-r-2  items-center justify-around  -mt-4 `}
        >
          <div
            className={`flex md:flex-row xs:flex-col items-center xs:w-11/12 md:w-3/5 md:h-28 xs:h-36 ${
              theme === "light" ? "bg-white" : "bg-darkBlue"
            } rounded-sm absolute xs:bottom-[-130px] md:bottom-[-80px] flex`}
          >
            <div
              className={`flex items-center justify-center md:w-1/5 md:h-full xs:w-12 xs:h-16 xs:p-1 md:p-0 xs:rounded-md md:rounded-none md:mt-0 xs:mt-[-20px] bg-[color:${Job.logoBackground}]`}
            >
              <img src={Job.logo} width="40px" height="40px" />
            </div>
            <div className="flex md:flex-row xs:flex-col xs:gap-2 items-center justify-between md:w-4/5 xs:w-full h-full md:mb-0 xs:mb-4">
              <div className="flex flex-col xs:items-center md:items-start md:ml-10 xs:ml-0 gap-1 xs:w-full md:w-auto">
                <h4
                  className={`${
                    theme == "light" ? "text-darkBlue" : "text-white"
                  } font-semibold`}
                >
                  {Job.company}
                </h4>
                <h4
                  className={`${
                    theme == "light" ? "text-darkBlue" : "text-DarkGray"
                  } font-light`}
                >
                  {Job.company}.com
                </h4>
              </div>
              <a
                href={Job.website}
                className={`flex justify-center items-center w-32 h-8 ${
                  theme === "light" ? "bg-paleViolet" : "bg-DarkGray"
                }  ${theme === "light" ? "text-violete" : "text-white"} ${
                  theme === "light"
                    ? "hover:bg-ligthViolete"
                    : "hover:bg-DarkGray"
                } rounded-sm md:mr-10 xs:mr-0`}
              >
                Company Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:w-3/5 xs:w-11/12 flex flex-col mx-auto  items-center p-6 ${
          theme === "light" ? "bg-white" : "bg-darkBlue"
        } rounded-sm md:mt-28 xs:mt-36 mb-8`}
      >
        <div className="flex md:items-center xs:items-start justify-between w-full xs:flex-col xs:gap-8 md:flex-row">
          <div className="flex gap-1 items-start flex-col">
            <h4 className="text-sm text-DarkGray">
              {Job.postedAt} . {Job.contract}
            </h4>
            <h3
              className={`font-bold ${
                theme == "light" ? "text-custom-darkBlue" : "text-white"
              } text-left`}
            >
              {Job.position}
            </h3>
            <h5 className="text-violete text-sm font-semibold">
              {Job.location}
            </h5>
          </div>
          <a
            href={Job.apply}
            className="flex justify-center items-center md:w-32 xs:w-full h-10 bg-violete hover:bg-ligthViolete text-white rounded-sm"
          >
            Apply Now
          </a>
        </div>
        <div
          className={`flex text-left ${
            theme == "light" ? "text-DarkGray" : "text-Gray"
          } w-full mt-10`}
        >
          {Job.description}
        </div>
        <div
          className={`flex flex-col  w-full mt-10 ${
            theme == "light" ? "text-DarkGray" : "text-Gray"
          }`}
        >
          <h2
            className={`${
              theme == "light" ? "text-darkBlue" : "text-white"
            } font-bold text-lg text-left`}
          >
            Requirements
          </h2>
          <div className="text-left w-full mt-2">
            {Job.requirements.content}
          </div>
          <div className="flex flex-col items-start mt-5 w-full">
            {Job.requirements.items.map((item) => (
              <li className="text-left">{item}</li>
            ))}
          </div>
        </div>
        <div
          className={`flex flex-col  w-full mt-10 ${
            theme == "light" ? "text-DarkGray" : "text-Gray"
          }`}
        >
          <h2
            className={`${
              theme == "light" ? "text-darkBlue" : "text-white"
            } font-bold text-lg text-left`}
          >
            What You Will Do
          </h2>
          <div className="text-left w-full mt-2">{Job.role.content}</div>
          <div className="flex flex-col items-start mt-5 w-full">
            {Job.role.items.map((item) => (
              <li className="text-left">{item}</li>
            ))}
          </div>
        </div>
      </div>
      <footer
        className={`flex w-full h-20 ${
          theme === "light" ? "bg-white" : "bg-darkBlue"
        } items-center justify-center`}
      >
        <div className="flex  md:w-3/5 xs:w-11/12 justify-between items-center">
          <div className="md:flex xs:hidden flex-col gap-4 items-start">
            <h3
              className={`font-bold ${
                theme == "light" ? "text-darkBlue" : "text-white"
              } text-left`}
            >
              {Job.position}
            </h3>
            <h4
              className={`${
                theme == "light" ? "text-darkBlue" : "text-DarkGray"
              } font-semibold`}
            >
              {Job.company}
            </h4>
          </div>
          <a
            href={Job.apply}
            className="flex justify-center items-center md:w-32 xs:w-full h-10 bg-violete hover:bg-ligthViolete text-white rounded-sm"
          >
            Apply Now
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Eachdata;
