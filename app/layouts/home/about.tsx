"use client";
import React, { useState, useEffect } from "react";
import NumberTicker from "@/components/ui/number-ticker";
import fetch from "@/app/utils/axios";
// import Markdown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";

export default function about({ desc }: { desc: string }) {
  return (
    <React.Fragment>
      <div className="relative flex flex-col gap-20 pb-8 ">
        <div className="font-outfit relative z-10 text-neutral-300 rounded-md w-full  space-y-5">
          <div className="relative">
            <h1 className="text-6xl absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-transparent font-archiabold tracking-tighter -top-9 -left-5">
              01
            </h1>
            <h1 className="text-4xl font-archiabold tracking-tighter z-10">
              About Myself
            </h1>
          </div>
          <ReactMarkdown className=" text-lg text-col-secondary-font">
            {desc ?? "No about."}
          </ReactMarkdown>
          <div className="flex flex-col md:flex-row justify-start gap-5">
            <div className="space-y-3">
              <h2 className="text-4xl font-archiabold">
                <NumberTicker
                  value={5}
                  className="text-neutral-300 tracking-tighter"
                />
                <span className="text-blue-500">+</span>
              </h2>
              <p className="font-outfit text-lg text-col-secondary-font ">
                Client Projects
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-archiabold">
                <NumberTicker
                  value={3}
                  className="text-neutral-300 tracking-tighter"
                />
                <span className="text-blue-500">+</span>
              </h2>
              <p className="font-outfit text-lg text-col-secondary-font">
                Achivements
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-archiabold ">
                <NumberTicker
                  value={2}
                  className="text-neutral-300 tracking-tighter"
                />
                <span className="text-blue-500">+</span>
              </h2>
              <p className="font-outfit text-lg text-col-secondary-font">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
