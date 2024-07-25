import {createContext, useContext, useState } from "react";

const HeightContext = createContext({
    height: '',
    setEmptyHeight: () => { }
})

export const handleHeight = ()=>useContext(HeightContext);

export default function UserPages({ children }) {
    const [height, setHeight] = useState('');
    function setEmptyHeight(val) {
        setHeight(val)
    }
    return <HeightContext.Provider value={{ height, setEmptyHeight }}>
        {children}
    </HeightContext.Provider>
}