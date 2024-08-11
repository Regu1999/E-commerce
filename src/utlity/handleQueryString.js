export const objectToQueryStringConverter = (value) => {
    const filteredValue = removeEmptyValue(value);
    if (filteredValue) {
        const params = new URLSearchParams(filteredValue);
        const quryString = params.toString()
        return quryString
    }
    return null
}
export const queryStringToObjectConverter = (value) => {
    const data = {}
    const url = new URLSearchParams(value);
    // console.log(url);
    url.forEach((val, key) => {
        data[key] = decodeURIComponent(val).split(',')
    })
    return data

}

function removeEmptyValue(value) {
    const data = { ...value };

    for (const key in data) {
        if ((Array.isArray(data[key]) && data[key].length === 0) ||
            (typeof data[key] === 'string' && data[key].trim() === '') ||
            data[key] === null || data[key] === undefined
        ) {
            delete data[key];
        }
    }
    if (Object.keys(data).length === 0) {
        return null
    }
    return data
}