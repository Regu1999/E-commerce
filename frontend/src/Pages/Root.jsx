import NavBar from "../Component/Navbar"
import UserPages from "../store/calculateExptySpace"
import { Outlet } from 'react-router-dom'
export default function Root() {
    return <UserPages>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </UserPages>
}