import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export async function authendication(mode, formData) {
    // const token = getToken();
    // console.log(formData);
    try {
        const { data } = await api.post(mode, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data
    } catch (error) {
        // console.log(error);
        throw error
    }
}