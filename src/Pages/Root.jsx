import NavBar from "../Component/Navbar"
import Loader from "../Component/UI/Loader";
import { Outlet, useNavigation } from 'react-router-dom'
export default function Root() {
    const navigationStatus = useNavigation();
    return <>
        <NavBar />
         <Outlet />
    </>
}