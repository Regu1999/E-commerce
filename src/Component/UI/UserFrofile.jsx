import { CgProfile } from "react-icons/cg";

const UserProfile = ({ NavegationLink,styleClass }) => {
    return <NavegationLink to='auth?mode=login' styleClass={styleClass}>
        <CgProfile className="text-2xl text-black" />
    </NavegationLink>
}
export default UserProfile