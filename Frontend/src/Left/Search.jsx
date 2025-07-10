import { IoSearch } from "react-icons/io5";

function Search() {
    return (
        <div className="px-6 py-3"> 
            <div className="relative w-full">
                <input
                    type="search"
                    placeholder="Search..."
                    className="w-full px-4 py-2 pr-10 border bg-white text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
            </div>
        </div>
    );
}

export default Search;
