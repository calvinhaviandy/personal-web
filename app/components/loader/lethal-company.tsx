"use client";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

const fontTermina = localFont({
  src: "../public/fonts/3270-Regular.ttf",
  variable: "--font-termina",
});

export default function Home() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fiveth, setFiveth] = useState(false);

  useEffect(() => {
    const audioObj = new Audio("/sound/BootUp.ogg");
    setAudio(audioObj);
  }, []);

  // useEffect(() => {
  //   handlePlayAudio();
  // }, []);

  const handlePlayAudio = () => {
    if (audio) {
      audio
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
    setTimeout(() => {
      setFirst(true);
    }, 100);
    setTimeout(() => {
      setSecond(true);
    }, 500);
    setTimeout(() => {
      setThird(true);
    }, 700);
    setTimeout(() => {
      setFourth(true);
    }, 1100);

    // setTimeout(() => {
    //   setFiveth(true);
    // }, 2500);
  };

  return (
    <div>
      <div
        className={`${fontTermina.className} ${
          fourth ? "animate-blink" : "animate-none"
        }  p-5 text-[#FC4100] text-lg space-y-5 ${fiveth ? "hidden" : "block"}`}
      >
        <div
          className={`${
            first ? "hidden" : "block"
          } w-full flex justify-center items-center h-full`}
        >
          <button
            className={`text-white text-2xl active:bg-orange-600`}
            onClick={handlePlayAudio}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePlayAudio();
              }
            }}
          >
            Mulai (Enter)
          </button>
        </div>
        <div
          className={`space-y-1  max-w-2xl border ${
            fourth ? "border-orange-600" : "border-transparent"
          } p-1`}
        >
          <div
            className={`${first ? "block" : "hidden"} border p-2  ${
              fourth ? "border-orange-600" : "border-transparent"
            }`}
          >
            <p className=""> SE, Software Engineer System-Act</p>
            <p>Copyright © 2021 - 2025 XENGINE. Indonesia Electronic Inc.</p>
          </div>
          <div
            className={` ${
              second ? "block" : "hidden"
            } p-2 border space-y-5   ${
              fourth ? "border-orange-600" : "border-transparent"
            }`}
          >
            <table className="w-full">
              <tbody>
                <tr>
                  <td>CPU Type</td>
                  <td>: BORSON 400 CPU at 3400 MHz</td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td>: 8192 MB</td>
                </tr>
                <tr>
                  <td>GPU</td>
                  <td>: -</td>
                </tr>
              </tbody>
            </table>
            <div>
              <div className={`${third ? "block" : "hidden"}`}>
                <p>
                  Boot Distributioner Application for Software Engineer v0.05
                </p>
                <p>Copyright (C) 2014 Mohammad S.</p>
              </div>
              <div className={`${third ? "block" : "hidden"} ml-[4rem]`}>
                <p>Detecting OS Type</p>
                <p>Detecting Web Server Engine</p>
                <p>Detecting Connection OK</p>
                <p>Detecting HTTPS OK</p>
              </div>
            </div>
          </div>
        </div>
        <p className={`${fourth ? "block" : "hidden"}`}>Booting UI Device...</p>
        <div className={`max-w-2xl space-y-5 ${fourth ? "block" : "hidden"}`}>
          <p>This Person History.</p>
          <table className="w-full border-orange-600  border-collapse  font-normal p-5">
            <thead>
              <tr className=" bg-orange-600 text-black ">
                <th className="font-normal text-left">No.</th>
                <th className="font-normal text-left">Nickname</th>
                <th className="font-normal text-left">Status</th>
                <th className="font-normal text-left">Experience</th>
                <th className="font-normal text-left">Period</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>1</td>
                <td>Mohammad S</td>
                <td>Full NT</td>
                <td>Full Stack Engineer</td>
                <td>2024</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sahrul</td>
                <td>Owned</td>
                <td>Backend Developer</td>
                <td>2023</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Roel</td>
                <td>Single</td>
                <td>Frontend Engineer</td>
                <td>2022</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Roul</td>
                <td>Single</td>
                <td>Frontend Developer</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>5</td>
                <td>User #0</td>
                <td>---</td>
                <td>---</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>6</td>
                <td>User #0</td>
                <td>---</td>
                <td>---</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>7</td>
                <td>User #0</td>
                <td>---</td>
                <td>---</td>
                <td>2018</td>
              </tr>
            </tbody>
          </table>
          <p></p>
        </div>
      </div>
    </div>
  );
}
