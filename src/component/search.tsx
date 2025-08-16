import { Search } from "lucide-react";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onSearch: () => void;
  isDarkMode: boolean;
};

 const SearchBar = (props: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="my-10 flex w-full h-full max-w-lg">
      <input
        type="text"
        placeholder="Search by name or username..."
        value={props.searchTerm}
        onChange={(e) => props.setSearchTerm(e.target.value)}
        className={`${
          props.isDarkMode ? "border-gray-400 text-amber-50 " : "border-blue-900 text-blue-900 "
        } p-2 border rounded-l-md flex-grow`}
      />
      <button
        type="submit"
        className={`${
          props.isDarkMode
            ? " bg-gray-800 text-amber-50"
            : "bg-blue-400 text-blue-950"
        } px-4 py-2 rounded-r-md `}
      >
        <Search />
      </button>
    </form>
  );
};

export { SearchBar };