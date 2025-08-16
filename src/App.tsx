import { useState, useEffect } from "react";
import { useFetch } from "./utilitis/fetchApi";
import type { userType } from "./component/user"; 
import { SearchBar } from "./component/search";
import { ProfileCard } from "./component/card";
import { Loader } from "lucide-react";
import { RefreshCwOff } from "lucide-react";
import{ ThemeToggle} from "./component/themetoggle";




const App = () => {

  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<userType[]>([]);

  const [isShowing, setIsShowing] = useState<number | null>(null);
   const [darkMode, setDarkMode] = useState(false);

  const handleToggle = (id: number) => {
    setIsShowing((prev) => (prev === id ? null : id));
  };
  
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = () => {
    if (data) {
      setFilteredData(
        data.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen grid place-items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className=" w-screen h-screen grid place-items-center text-4xl font-bold text-red-700">
        Error: {error}
        <RefreshCwOff className="text-red-600" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div >No users found</div>;
  }

  return (
    
      <div
        className={`${
          darkMode ? "bg-gray-950" : "bg-blue-200"
        } flex flex-col items-center p-4 w-full min-h-screen font-[montserrat] `}
      >
        <h1
          className={`${
            darkMode ? "text-amber-100" : "text-blue-950"
          } text-2xl font-bold capitalize`}
        >
          user directory profile
        </h1>

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
          isDarkMode={darkMode}
        />

        <div className="w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10">
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((user) => (
              <ProfileCard
                key={user.id}
                user={user}
                isShowing={isShowing}
                onToggle={handleToggle}
                isDarkMode={darkMode}
              />
            ))
          ) : (
            <div
              className={`${
                darkMode ? "text-amber-50" : "text-blue-950"
              }text-2xl  flex justify-center`}
            >
              No users found
            </div>
          )}
        </div>
      </div>
   
  );
}
export {App}