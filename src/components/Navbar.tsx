import ButtonHamburguer from "./ButtonHamburguer"
import NavbarTitle from "./NavbarTitle"
import NavbarLink from "./NavbarLink"


const Navbar = () => {
    return (
        <nav className='text-white flex flex-col text-center p-5 md:p-0 md:border-2 md:flex-row md:justify-between md:px-10 md:box-border'>
            <ButtonHamburguer />
            <NavbarTitle />
            <NavbarLink />
        </nav>
    )
}

export default Navbar