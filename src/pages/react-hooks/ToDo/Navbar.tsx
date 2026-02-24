import { useAuthStore } from "../../../stores/useAuthStore";

export default function Navbar (){
    // Logout
     const {user ,logout} = useAuthStore()
    return (
        <>
        <div className="flex justify-end items-center pt-4 px-4 relative z-10">
                <span className="text-sm text-gray-700 mr-2">
                    Hi, {user?.name}
                </span>
                <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-1 text-sm"
                >
                    Logout
                </button>
        </div>

        </>
    )
}