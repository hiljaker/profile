import React from 'react';
import ProfilePicture from "./profile.jpg"
import "./Main.css"

function Main() {
    return (
        <div>
            <div className='pattern py-24'>
                <div className='flex justify-center items-center bg-cr w-max mx-auto p-5 rounded-2xl shadow-2xl'>
                    <img
                        src={ProfilePicture}
                        alt="Hilmawan's Profile Picture"
                        className='w-52 rounded-full outline outline-cr outline-offset-4 outline-4 mr-5'
                    />
                    <div>
                        <p className='vollkron font-bold text-3xl text-br'>
                            Hi, there!
                        </p>
                        <p className='open-sans text-br'>
                            A Web Developer with a passion to make everything useful and better
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;