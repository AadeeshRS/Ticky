import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
        <>
        <Navbar/>
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg font-poppins text-gray-800">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">About Ticky</h1>
            <p className="mb-4 text-lg">
                <b>Ticky</b> is a modern and minimal todo-list app made for productivity, built by <span className="text-blue-500 font-semibold">Aadeesh</span>.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Tech Stack</h2>
            <ul className="list-disc list-inside mb-4">
                <li><b>React</b> (with Hooks)</li>
                <li><b>Vite</b> (for fast development)</li>
                <li><b>Tailwind CSS</b> (utility-first styling)</li>
                <li><b>uuid</b> (unique IDs for todos)</li>
                <li><b>React Icons</b> (iconography)</li>
                <li><b>LocalStorage</b> (persistent tasks)</li>
            </ul>
            <p className="text-md text-gray-600">Made with ❤️ by <span className="text-blue-500 font-semibold">Aadeesh</span></p>
        </div>
        </>
    );
};

export default About;
