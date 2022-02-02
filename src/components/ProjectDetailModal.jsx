import React from 'react';

function ProjectDetailModal({ open, close }) {
    return (
        <div hidden={open} onClick={close}>
            <div className='z-50 inset-0 bg-black bg-opacity-50 flex items-center fixed h-full w-full'>
                <div className='bg-cr relative rounded-md w-1/3 phone:w-11/12 p-5 mx-auto open-sans'>
                    <div className='flex items-center justify-between'>
                        <p className='text-2xl vollkron'>Tokobat</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-br hover:text-cr hover:bg-re rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <hr className='my-2 border border-br' />
                    <p>Tokobat is a pharmacy website where customers can buy listed medicines or order by prescription.</p>
                    <a
                        href="http://3-pharmacy.purwadhikajcwd18.xyz/"
                        className='underline'
                    >
                        http://3-pharmacy.purwadhikajcwd18.xyz/
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetailModal;