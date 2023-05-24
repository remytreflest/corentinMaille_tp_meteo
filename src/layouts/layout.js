import TopBar from "../components/TopBar";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <TopBar />
            </header>

            <main>{children}</main>

            <footer></footer>
        </>
    )
}

export default Layout
