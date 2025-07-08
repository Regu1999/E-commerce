import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { autoLogin } from "../../https.js";
import { removeToken, getToken } from "../../utlity/handleToken";
// import { useSelector } from "react-redux";

const UserProfile = ({ NavegationLink, styleClass }) => {
    const [isEligible, setIsEligible] = useState(false)
    const token = getToken();
    useEffect(() => {
        if (token) {
            setIsEligible(true)
        }
    }, [token])
    const { isError } = useQuery({
        queryKey: ['userData'],
        queryFn: autoLogin,
        enabled: isEligible
    });
    if (isError) {
        removeToken()
    }
    return <NavegationLink to={`${isEligible ? '/profile' : '/auth?mode=login'}`} styleClass={styleClass}>
        <CgProfile className="text-2xl text-black" />
    </NavegationLink>
}
export default UserProfile