import Logo from "../../ui/Logo/Logo"
import NavBar from "../../ui/NavBar/NavBar"
import SocialBar from "../../ui/SocialBar/SocialBar"

const Header = () => {
    return (
        <header className="py-6 px-6 lg:px-8">
            <div className="flex justify-between items-center">
                <Logo />
                <div className="flex justify-between">
                    <NavBar />
                    <SocialBar />
                </div>
            </div>
        </header>
    )
}

export default Header