import Logo from "../../ui/Logo/Logo"
import NavBar from "../../ui/NavBar/NavBar"
import SocialBar from "../../ui/SocialBar/SocialBar"

const Header = () => {
    return (
        <header className="mx-auto flex items-center justify-between p-6 lg:px-8">
            <Logo withText={true} />
            <div className="flex items-center justify-between p-6 lg:px-8">
                <NavBar />
                <SocialBar />
            </div>
        </header>
    )
}

export default Header