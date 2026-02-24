import { Outlet } from "react-router-dom"
import Navbar from "../pages/profile/components/Navbar"
export default function RootLayout (){
    return (
        <>
        <Navbar/>
        <Outlet/>
        <h1>Bottom</h1>
        </>
    )
}