import { handleHeight } from "../../store/calculateExptySpace";
import FlexContainer from "./FlexContainer";
export default function FormBackground({ children }) {
    const { height } = handleHeight();
    // console.log(height);
    const minheight =` min-h-screen`;
    return <FlexContainer styleClass={`${minheight} justify-center h-full bg-gradient-to-t from-white from-50% to-rose-100 to-50%`}>{children}</FlexContainer>
}