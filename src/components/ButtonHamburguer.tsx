import React, { useState } from 'react'

interface ButtonHamburguerProps {
    onClick: () => void;
}

const ButtonHamburguer:React.FC<ButtonHamburguerProps> = ({onClick}) => {
    const [visible, setVisible] = useState(false);

    const toggleMenu = ()=>{
        setVisible(!visible)
        onClick();
    }

    return (
        <button onClick={toggleMenu} className='w-9 h-9 bg-transparent border-none cursor-pointer p-1 absolute right-10 top-4 md:hidden'>
            <div className="w-full h-1 bg-slate-500 my-1"></div>
            <div className="w-full h-1 bg-slate-500 my-1"></div>
            <div className="w-full h-1 bg-slate-500 my-1"></div>
        </button>
    )
}

export default ButtonHamburguer