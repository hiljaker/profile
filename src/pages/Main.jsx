import React from 'react';
import ProfilePicture from "./profile.jpg"
import "./Main.css"
import { SiJavascript, SiCss3 } from "react-icons/si"
import { FaNodeJs, FaReact, FaHtml5 } from "react-icons/fa"

function Main() {
    const skills = [
        { name: "JavaScript", icon: (<SiJavascript />) },
        { name: "Node.js", icon: (<FaNodeJs />) },
        { name: "React.js", icon: (<FaReact />) },
        { name: "HTML", icon: (<FaHtml5 />) },
        { name: "CSS", icon: (<SiCss3 />) },
    ]

    const renderSkills = () => {
        return skills.map((val, index) => (
            <div key={index + 1} className='flex items-center open-sans border-2 border-br rounded-md px-2 py-1 mr-2 phone:mb-2 bg-re'>
                <div className='mr-2 text-cr'>
                    {val.icon}
                </div>
                <p className='text-cr'>
                    {val.name}
                </p>
            </div>
        ))
    }

    const languages = [
        { name: "Indonesian", level: "Native" },
        { name: "English", level: "Intermediate" },
        { name: "French", level: "Beginner" },
    ]

    const renderLanguages = () => {
        return languages.map((val, index) => (
            <div key={index + 1} className='flex items-center open-sans border-2 border-br rounded-md px-2 py-1 mr-2 phone:mb-2 text-cr bg-re'>
                {val.name} ({val.level})
            </div>
        ))
    }

    return (
        <div>
            <div className='pattern py-16 phone:py-5'>
                <div className='flex phone:flex-col phone:w-11/12 justify-center items-center bg-cr w-1/2 mx-auto p-5 phone:py-10 rounded-2xl shadow-2xl'>
                    <img
                        src={ProfilePicture}
                        alt="Hilmawan's Profile Picture"
                        className='w-48 phone:w-44 rounded-full outline outline-br outline-offset-4 outline-4 mr-10 phone:mb-5 phone:mx-auto'
                    />
                    <div>
                        <p className='vollkron font-bold text-lg text-br'>
                            Hi! I'm
                        </p>
                        <p className='vollkron font-bold text-3xl text-re mb-2'>
                            Hilmawan Zaky Rukmana
                        </p>
                        <p className='open-sans text-br'>
                            A Web Developer freshly from Bekasi, Indonesia with a passion to make everything useful and better.
                        </p>
                    </div>
                </div>
            </div>
            <div className='px-24 phone:px-10 my-10'>
                <div className='mb-4'>
                    <p className='vollkron text-xl text-br font-bold border-b-2 border-br w-max mb-2'>
                        About me
                    </p>
                    <p className='open-sans text-br'>
                        A high school graduate.
                    </p>
                </div>
                <div className='mb-4'>
                    <p className='vollkron text-xl text-br font-bold border-b-2 border-br w-max mb-2'>
                        What I am best at
                    </p>
                    <div className='flex flex-wrap'>
                        {renderSkills()}
                    </div>
                </div>
                <div>
                    <p className='vollkron text-xl text-br font-bold border-b-2 border-br w-max mb-2'>
                        Languages i speak
                    </p>
                    <div className='flex flex-wrap'>
                        {renderLanguages()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;