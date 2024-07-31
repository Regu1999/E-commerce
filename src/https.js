import axios from "axios";
import { getToken } from "./utlity/handleToken";
import { setToken } from "./utlity/handleToken";
import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient()
const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export async function authendication(mode, formData) {
    try {
        const { data } = await api.post(mode, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setToken(data.token)
        return data
    } catch (error) {
        throw error
    }
}

export async function autoLogin({ signal }) {
    const { token } = getToken();
    try {
        const { data } = await api.get('/userAutoLogin', {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }, signal
        });
        return data
    } catch (err) {
        console.log(err.response);
        const error = new Error('authorization faild');
        error.code = err.response.status;
        error.message = err.response.statusText
        throw new Error(error);
    }
}

export async function getProduct() {
    try {
        const { data } = await api.get('/products');
        return data.places.data.products;
    } catch (error) {
        console.log(error);
    }
}