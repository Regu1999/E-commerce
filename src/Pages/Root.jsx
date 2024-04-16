import NavBar from "../Component/Navbar"
import Loader from "../Component/UI/Loader";
import { Outlet, useNavigation } from 'react-router-dom'
export default function Root() {
    const navigationStatus = useNavigation();
    const loadingArrays = new Array(10).fill(0);
    console.log(navigationStatus.state === 'loading');
    const LoadingCard = () => {
        return <div className="flex flex-wrap justify-center animate-fade-in mb-10">
            {loadingArrays.map((loadingArray, index) => {
                return <Loader key={index} />
            })}
        </div>
    }
    return <>
        <NavBar />
        {navigationStatus.state === 'loading' ? <LoadingCard /> : <Outlet />}

    </>
}