import { useMediaQuery } from "react-responsive";
export function useMediaQueryDevice() {
    const isTablet = useMediaQuery({ query: '(min-width:640px)' });
    return {
        isTablet
    }
}