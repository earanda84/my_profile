import Link from "next/link"

interface NavbarLinkProps {
    visible: boolean;
}

const NavbarLink:React.FC<NavbarLinkProps> = ({ visible }: any) => {
    return (
        <ul className={`flex flex-col p-4 gap-4 text-lg justify-center items-center md:flex-row md:justify-center md:items-center md:gap-20 md:font-mono ${visible ? 'block':'hidden'}`}>

            <li className='uppercase py-2 hover:scale-125 duration-300 md:hover:bg-slate-900 hover:px-3 rounded-md'><Link href={'#Home'}>Home</Link></li>
            <li className='uppercase py-2 hover:scale-110 duration-300 md:hover:bg-slate-900 hover:px-3 rounded-md'><Link href={'#Curriculum'}>Curriculum</Link></li>
            <li className='uppercase py-2 hover:scale-110 duration-300 md:hover:bg-slate-900 hover:px-3 rounded-md'><Link href={'#Educacion'}>Educación</Link></li>
            <li className='uppercase py-2 hover:scale-110 duration-300 md:hover:bg-slate-900 hover:px-3 rounded-md'><Link href={'#Proyectos'}>Proyectos</Link></li>
            <li className='uppercase py-2 hover:scale-110 duration-300 md:hover:bg-slate-900 hover:px-3 rounded-md'><Link href={'/login'}>Login</Link></li>
        </ul>
    )
}

export default NavbarLink