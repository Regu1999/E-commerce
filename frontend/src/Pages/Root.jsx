import { useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react"
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from 'react-router-dom'

import NavBar from "../Component/Navbar"
import Notification from "../Component/UI/Notification"
import { removeNotification } from '../store/notification'
export default function Root() {
    const dispatch = useDispatch()
    const timerRef = useRef();
    const notificationStatus = useSelector(state => state.notification.status);
    const notificationMessage = useSelector(state => state.notification.message);
    
    useEffect(() => {
        if (notificationStatus && notificationMessage) {
            timerRef.current = setTimeout(() => {
                dispatch(removeNotification())
            }, 4000)
        }
        return () => {
            clearTimeout(timerRef.current)
        }

    }, [notificationStatus, notificationMessage])

    return <>
        <AnimatePresence>
            {(notificationMessage || notificationStatus) && <Notification />}
        </AnimatePresence>

        <NavBar />
        <main>
            <Outlet />
        </main>
    </>
}