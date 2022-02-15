import React from "react";

import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://github.com/anurag-bit/Orbivator_AI" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg  bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Orbivator</p>
              <p>Cancer Genomics Prediction</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/anurag-bit/Mario" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg  bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Neo Mario</p>
              <p>An Upcoming Flutter based super mario title</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
