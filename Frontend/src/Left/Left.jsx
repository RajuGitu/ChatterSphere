import Logout from "./Logout";
import Search from "./Search";
import Users from "./Users";

function Left() {
    return (
        <div className="w-[28%] h-screen bg-black text-white flex flex-col">
            <h1 className="font-bold text-3xl p-2 px-11">ChatterSphere</h1>

            <Search />

            <hr />

            <div className="flex-grow overflow-y-auto no-scrollbar">
                <Users />
            </div>

            {/* Logout at the bottom */}
            <div className="p-4">
                <Logout />
            </div>
        </div>
    );
}

export default Left;
