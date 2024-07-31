import Modal from "../Component/UI/Model";
import Card from "../Component/UI/Card";
import FlexContainer from "../Component/UI/FlexContainer";
import { IoClose } from "react-icons/io5";
import { redirect, useNavigate } from "react-router-dom";
import { useMediaQueryDevice } from "../hooks/useMediaQuryDevice";
import { getToken } from "../utlity/handleToken";
import { useQuery } from "@tanstack/react-query";
import { autoLogin } from "../https";
// import { Link } from "react-router-dom";

// import { TextFeild } from "../Component/UI/Inputs"
export default function Profile() {
    const { data, isLoading } = useQuery({
        queryKey: ['userData'],
        queryFn: autoLogin,
    });
    const user = data?.user
    const navigate = useNavigate()
    function handleClose() {
        navigate('..')
    }
    const { isLargeMobile } = useMediaQueryDevice();
    function handleSubmit(event) {
        event.preventDefault();
        navigate('/logout')
    }
    return <Modal close={handleClose}>
        {isLoading ? <p>Loading.....</p> :
            <Card shadow={false} styleClass="flex flex-col justify-between relative ">
                <button className="absolute top-0 right-4 outline-none" onClick={handleClose}><IoClose className="text-2xl hover:text-rose-100" /></button>

                <h1 className="text-3xl font-bold">Persnon Info</h1>
                <form action="" className="flex flex-col gap-5 ">
                    <div>
                        <label htmlFor="">Name</label>
                        <FlexContainer styleClass={`${!isLargeMobile && 'flex-col items-baseline gap-2'} justify-between`}>
                            {user.UserName ? <>
                                <p className="text-gray-400">{user.UserName}</p>
                                <button className="underline">Edit</button>
                            </> : <p>Name not found</p>}
                        </FlexContainer>
                        {/* <input type="text" className="w-full border outline-none" /> */}
                    </div>
                    <hr />
                    {/* <TextFeild /> */}
                    <div>
                        <label htmlFor="">Email</label>
                        <FlexContainer styleClass={`${!isLargeMobile && 'flex-col items-baseline gap-2'} justify-between`}>
                            {user.email ? <>
                                <p className="text-gray-400">{user.email}</p>
                                <button className="underline">Edit</button>
                            </> : <p>Email not found</p>}
                        </FlexContainer>
                        {/* <input type="email" className="w-full border outline-none" /> */}
                    </div>
                    <hr />
                </form>

                <form action="/logout" onSubmit={handleSubmit}>
                    <button className="p-3 bg-black text-white rounded-md">Logout</button>
                </form>
            </Card>}
    </Modal>
}

export function loader() {
    const token = getToken();
    if (!token) {
        return redirect('/auth?mode=login')
    }
    return token
}