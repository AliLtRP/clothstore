const Container = ({ children, className }) => {
    return (
        <div className={` w-full max-w-sm mx-auto`}>
            {children}
        </div>
    )
}

export default Container