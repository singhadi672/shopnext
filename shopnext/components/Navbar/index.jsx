import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import NavLogo from './logo.svg';
import { useState } from 'react';

export default function Navbar() {

    const [menu, setMenu] = useState(false)
    return (
        <div className={`w-full h-32 py-8 md:px-28 px-2 fixed z-10 ${menu && 'shadow-xl'}`}>
            <div className="w-full flex justify-between items-center">
                <div className='flex justify-between items-center md:w-2/4 w-2/3'>
                    <div className='md:scale-110 scale-75'>
                        <NavLogo />
                    </div>
                    <div className="justify-between items-center w-1/2 md:flex hidden">
                        <p>Breakfast</p>
                        <p>Lunch</p>
                        <p>Dinner</p>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <FontAwesomeIcon icon={faBagShopping} size="lg" />
                </div>
                <div className='md:hidden flex cursor-pointer' onClick={() => setMenu(prev => !prev)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className={`md:hidden w-full justify-evenly py-4 items-center tansition-all ease-in-out absolute top-0 left-0 mt-3 ${menu ? 'translate-y-full opacity-1 flex' : "translate-y-0 opacity-0 hidden"}`}>
                <p className='bg-black text-white rounded-3xl px-3 py-1'>Breakfast</p>
                <p className='bg-black text-white rounded-3xl px-3 py-1'>lunch</p>
                <p className='bg-black text-white rounded-3xl px-3 py-1'>Dinner</p>
            </div>
        </div>
    )
}