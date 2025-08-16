import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

 type ThemeToggleProps = {
   darkMode: boolean;
   setDarkMode: (value: boolean) => void;
 };

const ThemeToggle = ({ darkMode, setDarkMode }:ThemeToggleProps) => {


  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`${
          darkMode ? "text-gray-400" : "text-blue-400"
        } p-2 rounded-full transition-colors duration-300`}
      >
        {darkMode ? (
          <Sun className=" absolute top-5 right-10" />
        ) : (
          <Moon className=" absolute top-5 right-2 " />
        )}
      </button>
    </div>
  );
};

export { ThemeToggle};
