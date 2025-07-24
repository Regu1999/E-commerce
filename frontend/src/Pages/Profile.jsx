import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../Component/UI/Model";
import FlexContainer from "../Component/UI/FlexContainer";
import Card from "../Component/UI/Card";
import { useMediaQueryDevice } from "../hooks/useMediaQuryDevice";
import { getProfile, queryClient, logout } from "../https";
import { emptyToken } from "../store/token";
import { createNotification } from "../store/notification";
import Loader from "../Component/UI/Loader";

export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLargeMobile } = useMediaQueryDevice();
    const token = useSelector(state => state.token)
    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['userData'],
        queryFn: () => getProfile(token),
    });
    if (isError) {
        navigate('/auth?mode=login')
    }

    const { mutate } = useMutation({
        mutationFn: () => logout(token),
        onSuccess: (data) => {
            console.log(data);

            queryClient.invalidateQueries({ queryKey: ['userData'] })
            dispatch(createNotification({ message: data.message+"!", status: "success" }))
            dispatch(emptyToken())
            navigate('/')
        }
    })
    function handleClose() {
        navigate('..')
    }

    return <Modal close={handleClose}>
        {isLoading ? <Loader /> :
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

                <button onClick={() => mutate()} className="p-3 bg-black text-white rounded-md">Logout</button>
            </Card>
        }
    </Modal >
}