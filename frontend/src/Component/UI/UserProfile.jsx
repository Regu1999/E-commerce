import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const UserProfile = ({ NavegationLink, styleClass }) => {
    const token = useSelector(state => state.token);
    return <NavegationLink to={`${token ? '/profile' : '/auth?mode=login'}`} styleClass={styleClass}>
        <CgProfile className="text-2xl text-black" />
    </NavegationLink>
}
export default UserProfile