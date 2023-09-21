"use client"

import ButtonHamburguer from "./ButtonHamburguer";
import NavbarTitle from "./NavbarTitle";
import NavbarLink from "./NavbarLink";
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const isClient = typeof window !== 'undefined'; // Verifica si el código se está ejecutando en el navegador

    const [visible, setVisible] = useState(isClient && window.innerWidth > 640); // Asume que 640 es el punto de quiebre de "sm"

    const toggleMenu = () => {
        setVisible(!visible);
    }

    useEffect(() => {
        if (isClient) { // Verifica si se está ejecutando en el navegador antes de agregar oyentes de eventos
            const handleResize = () => {
                // Actualiza el estado del menú al cambiar el tamaño de la ventana
                setVisible(window.innerWidth > 640);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                // Limpia el oyente del evento de redimensionamiento cuando el componente se desmonta
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [isClient]);

    return (
        <nav className='grid grid-cols-1 md:flex md:items-center md:justify-between p-3 px-5 shadow-sm border-b-[1px]'>
            <ButtonHamburguer onClick={toggleMenu} />
            <NavbarTitle />
            {visible || (isClient && window.innerWidth > 640)
            ? <NavbarLink visible={true} /> 
            : null}
        </nav>
    )
}

export default Navbar;
