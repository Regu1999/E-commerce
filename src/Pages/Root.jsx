import NavBar from "../Component/Navbar"
import { Outlet } from 'react-router-dom'
export default function Root() {
    return <>
        <NavBar />
        <Outlet />
    </>
}