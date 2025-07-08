import { useMediaQuery } from "react-responsive";
export function useMediaQueryDevice() {
    const isTablet = useMediaQuery({ query: '(min-width:640px)' });
    const isLargeMobile=useMediaQuery({query:'(min-width:425px)'})
    return {
        isTablet,
        isLargeMobile
    }
}