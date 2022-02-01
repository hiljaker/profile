import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Header() {
    return (
        <div className='bg-re fixed w-full flex justify-between items-center px-10 h-20 shadow-md'>
            <p className='vollkron font-bold text-xl text-cr cursor-pointer'>
                Hilmawan Zaky Rukmana
            </p>
            <div className='flex items-center'>
                <a
                    href="https://github.com/hiljaker"
                    className='text-2xl text-cr p-2 hover:bg-na hover:rounded-full'
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/hilmawan-zaky-rukmana-64644b218/"
                    className='text-2xl text-cr p-2 hover:bg-na hover:rounded-full'
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

export default Header;