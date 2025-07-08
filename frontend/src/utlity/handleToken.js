export function setToken(token) {
    const date = new Date();
    const oneHourInMilliseconds = 60 * 60 * 1000;
    const addOneHour = date.getTime() + oneHourInMilliseconds;
    const expiredTime = new Date(addOneHour)
    localStorage.setItem('token', token);
    localStorage.setItem('tokenTime', expiredTime);
}
export function getToken() {
    const token = localStorage.getItem('token');
    const tokenTime = localStorage.getItem('tokenTime');
    if (token) {
        return {
            token,
            tokenTime
        }
    }
    return false
    // const now = new Date()
    // const expiredTime = new Date(tokenTime);
    // const existingTime = expiredTime.getTime() - now.getTime();
}

export function removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenTime');
}

