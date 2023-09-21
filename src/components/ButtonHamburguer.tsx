import React from 'react'

const ButtonHamburguer = () => {
    return (
        <button className='w-9 h-9 bg-transparent border-none cursor-pointer p-1 absolute right-10 top-6 md:hidden'>
            <div className="w-full h-1 bg-slate-500 my-1"></div>
            <div className="w-full h-1 bg-slate-500 my-1"></div>
            <div className="w-full h-1 bg-slate-500 my-1"></div>
        </button>
    )
}

export default ButtonHamburguer