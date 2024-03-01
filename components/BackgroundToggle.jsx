"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const BackgroundToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="black_btn relative py-2 px-5 flex items-center justify-center border cursor-pointer rounded-full p-1"
      onClick={handleClick}
    >
      {darkMode ? (
        <BsSunFill className="text-yellow-400" size={18} />
      ) : (
        <FaMoon className="text-[--light] hover:text-[--dark]" size={18} />
      )}
    </div>
  );
};

export default BackgroundToggle;
