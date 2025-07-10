import useGetAllUsers from "../context/useGetAllUsers.jsx";
import User from "./User";

function Users() {
    const { allUsers, loading } = useGetAllUsers();  // ✅ Correctly call the hook

    if (loading) {
        return <div className="text-center text-gray-600 mt-5">Loading users...</div>;
    }

    return (
        <>
            <div style={{ maxHeight: "calc(100vh - 3rem)" }} className="overflow-y-auto py-1">
                {allUsers.length > 0 ? (
                    allUsers.map((user) => <User key={user._id} user={user} />)  // ✅ Pass user data to component
                ) : (
                    <div className="text-center text-gray-500 mt-5">No users found.</div>
                )}
            </div>
        </>
    );
}

export default Users;