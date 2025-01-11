import React, { useState, useEffect } from "react";
import client from '../Content/contentful';
import Navbar from './Navbar';

const HeroSection = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [avathar, setAvathar] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            const response = await client.getEntries({ content_type: 'author' });
            const author = response.items[0]?.fields;
            // console.log(author);
            setName(author.name);
            setDescription(author.description);
            setAvathar(author.avathar.fields.file.url);
        }
        fetchContent();
    }, [])

    return (
        <section className="relative w-full h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white flex items-center justify-center overflow-hidden">
            {/* <Navbar/> */}

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 sm:px-12 md:px-24">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                    Hi, I'm <span className="text-yellow-400">{name}</span>, a{" "}
                    <span className="text-yellow-400">Frontend Developer</span>
                </h1>
                <p className="text-xl sm:text-2xl mb-8 opacity-80">
                   {description}
                </p>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-6">
                    <a
                        href="#work"
                        className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-white text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Professional Image or Illustration */}
            <div className="absolute bottom-0 right-0 p-10 sm:p-16 hidden lg:block">
                <img
                    src={avathar}
                    alt="Ammar's Profile"
                    className="rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover shadow-lg border-4 border-white"
                />
            </div>
        </section>
    );
};

export default HeroSection;
