import FlexContainer from "./FlexContainer";
export default function FormBackground({ children }) {
    return <FlexContainer styleClass="min-h-screen justify-center h-full bg-gradient-to-t from-white from-50% to-rose-100 to-50%">{children}</FlexContainer>
}