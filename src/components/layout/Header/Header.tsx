import Logo from "../../ui/Logo/Logo"
import NavBar from "../../ui/NavBar/NavBar"
import SocialBar from "../../ui/SocialBar/SocialBar"

const Header = () => {
    return (
        <header className="sticky top-0 bg-background py-4 px-6 lg:px-8">
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