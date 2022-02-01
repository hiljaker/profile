import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Header() {
    return (
        <div className='bg-re fixed w-full flex justify-between items-center px-10 phone:px-5 h-20 phone:h-14 shadow-md'>
            <p className='vollkron font-bold text-xl text-cr cursor-pointer block phone:hidden'>
                Hilmawan Zaky Rukmana
            </p>
            <p className='vollkron font-bold text-xl text-cr cursor-pointer hidden phone:block'>
                H Z R
            </p>
            <div className='flex items-center'>
                <a
                    href="https://github.com/hiljaker"
                    className='text-2xl text-cr hover:text-re p-2 hover:bg-cr hover:rounded-full'
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/hilmawan-zaky-rukmana-64644b218/"
                    className='text-2xl text-cr hover:text-re p-2 hover:bg-cr hover:rounded-full'
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

export default Header;