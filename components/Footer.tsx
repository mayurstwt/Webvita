import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-5 md:mb-0 flex flex-col">
                    <h3 className="text-center md:text-left text-[2.5rem] md:text-5xl font-bold mb-4">Let's Start Working Together!</h3>
                    <p className='text-center px-4 md:px-0 md:text-left'>Get valuable strategy, culture and brand insights straight to your inbox.</p>
                    <div className="flex mt-4 mx-auto md:mx-0">
                        <input
                            type="email"
                            placeholder="Your email address here"
                            className="border border-gray-300 rounded-3xl px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="bg-orange-500 rounded-3xl hover:bg-green-600 text-white font-bold py-2 px-4">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="flex flex-row gap-x-10 md:gap-x-16 justify-between mt-10 max-w-screen p-4">
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-lg font-bold mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-400">About Us</a></li>
                            <li><a href="#" className="hover:text-green-400">Blogs</a></li>
                            <li><a href="#" className="hover:text-green-400">Services</a></li>
                            <li><a href="#" className="hover:text-green-400">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li>123 Street, New York, USA</li>
                            <li>+123 324 28653</li>
                            <li>asma@mail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h1 className="text-center text-[6rem] md:text-[12rem] opacity-20 bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent">
                    Webvita
                </h1>
        </footer>
    );
};

export default Footer;