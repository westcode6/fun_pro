import { useState } from "react";
import Image from "./Image";
const App = () => {
  const [headText, setHeadText] = useState("Shine");

  const [darkMode, handleDarkMode] = useState("  ⛅");

  const darkActive = () => {
    var ani = document.getElementById("ani");
    ani.classList.add("animate");

    var aniText = document.getElementById("aniText");
    aniText.classList.add("ani-text");

    var navbar = document.getElementById("navbar");
    var father = document.getElementById("father");

    father.classList.remove("bg-cyan-500");
    father.classList.add("bg-cyan-800");

    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-cyan-900");
    navbar.classList.add("text-cyan-100");

    var btn = document.getElementById("btn");
    btn.classList.remove("bg-cyan-900");
    btn.classList.add("bg-cyan-200");
  };

  // Spin Ball Function

  const spinBall = () => {
    var ani = document.getElementById("ani");
    ani.classList.remove("animate");
    ani.classList.add("animateAgain");
    console.log("Hey man");
  };

  const handleChange = () => {
    handleDarkMode("😲");
    darkActive();

    var showMe = document.getElementById("showMe");

    showMe.classList.remove("hidden");
    var freeME = document.getElementById("freeMe");
    freeME.classList.add("hidden");


      setHeadText("Bright");

  };

  return (
    <>
      <div className="">
        <div
          id="father"
          className="max-w-md mx-auto  p-4 rounded-md bg-cyan-500 shadow-xl transform transition  ease-in-out"
        >
          <div
            id="navbar"
            className="bg-white py-3 mb-4 flex items-center justify-between px-3 rounded-sm shadow-lg"
          >
            <h1 id="aniText" className="text-2xl font-semibold text-center">
              {headText}!
            </h1>

            <div>
              <button id="ani" className="">
                <a
                  href="##"
                  id="btn"
                  onClick={() => handleChange()}
                  className="bg-cyan-900 text-cyan-100 p-2 border-2 border-cyan-800 shadow-lg rounded-md transform transition hover:-translate-x-1 font-semibold text-base "
                >
                  {darkMode}
                </a>
              </button>
            </div>
          </div>

          <div
            id="freeMe"
            className="mt-4 bg-cyan-50 rounded-sm shadow-sm p-4 transform transition  "
          >
            <Image image="/moonlight.jpg"  alt="moonlight image" />

            <p className="text-gray-600 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus ab, debitis labore sint doloribus ratione esse ex
              aperiam praesentium nulla. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Minus, ut.!
            </p>
          </div>

          <div
            id="showMe"
            className="mt-4 hidden bg-cyan-900 rounded-sm shadow-sm p-4 "
          >
            <Image image="/nature.webp" alt="nature image" />

            <p className="text-cyan-100 shadow-sm py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus ab, debitis labore sint doloribus ratione esse ex
              aperiam praesentium nulla. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Minus, ut. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quaerat commodi
            </p>

            <button
              onClick={() => spinBall()}
              className="bg-yellow-300 text-yellow-900 p-2 rounded-lg shadow-md mt-4 text-base font-semibold uppercase hover:bg-yellow-400 transform transition hover:-translate-x-0.5"
            >
              Spin Ball
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
