import { redirect } from "react-router-dom";
import { removeToken } from "../utlity/handleToken";
export function logoutFn() {
    removeToken();
    return redirect('/')
}