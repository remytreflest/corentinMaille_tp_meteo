import image from '../assets/img/header.png'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <img src={image} className='img-fluid' alt='deux pokémons dans un jardin' />
            </header>

            <main>{children}</main>

            <footer></footer>
        </>
    )
}

export default Layout
