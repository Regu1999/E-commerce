const FlexContainer = ({ styleClass, children }) => {
    return <div className={`${styleClass} flex items-center`}>{children}</div>
}
export default FlexContainer