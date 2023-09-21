import Link from "next/link"

const NavbarLink = () => {
    return (
        <ul className='flex flex-col p-4 gap-4 text-lg md:flex-row md:border-2 md:justify-center md:items-center md:gap-20 md:font-mono'>
            <li className='uppercase py-2 hover:scale-125 duration-300 -rotate-3 scroll-smooth'><Link href={'#Home'}>Home</Link></li>
            <li className='uppercase py-2 hover:scale-110 duration-300 -rotate-3 scroll-smooth'><Link href={'#Curriculum'}>Curriculum</Link></li>
            <li className='uppercase py-2 hover:scale-110 duration-300 -rotate-3 scroll-smooth'><Link href={'#Educacion'}>Educación</Link></li>
            <li className='uppercase py-2 hover:scale-110 duration-300 -rotate-3 scroll-smooth'><Link href={'#Proyectos'}>Proyectos</Link></li>
        </ul>
    )
}

export default NavbarLink