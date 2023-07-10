import { useState } from "react";
import "./App.css";
import { AiFillLinkedin, AiFillGitlab, AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Avatar from "./assets/myimage.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleGitLabClick = () => {
    const url = "https://gitlab.odd.limited/chattrin_dome/web";
    window.open(url, "_blank");
  };

  const handleGitHubClick = () => {
    const url = "https://github.com/Domozzz";
    window.open(url, "_blank");
  };

  const handleLinkedlnClick = () => {
    const url = "https://www.linkedin.com/in/chattrin-rodbouthong-43a119262/";
    window.open(url, "_blank");
  };

  return (
    <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="font-burtons text-xl">Domozzz</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="#"
              >
                My Portfolio
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Chattrin Rodbouthong
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Newbie🐣 Software Dev at ODDSl
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Recent graduate in Computer Engineering from Walailak University
            with experience in software and hardware. Strong time management,
            flexibility, adaptability, and commitment to lifelong learning.
            Skilled in coding, software development, and hardware
            troubleshooting. Passionate about staying updated with industry
            trends for professional growth.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillGitlab
              className="clickable-icon"
              onClick={handleGitLabClick}
            />
            <AiFillGithub
              className="clickable-icon"
              onClick={handleGitHubClick}
            />
            <AiFillLinkedin
              className="clickable-icon"
              onClick={handleLinkedlnClick}
            />
          </div>
          <div className="text-5xl flex justify-center gap-3 py-3 text-gray-600 dark:text-gray-400">
            <FaDiscord />
            <p> : @domozzz</p>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <img src={Avatar} />
          </div>
        </div>
      </section>
    </main>
  );
}
export default App;
