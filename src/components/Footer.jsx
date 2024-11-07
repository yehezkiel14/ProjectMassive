import React from "react";


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://flowbite.com/"
                        className="inline-flex items-center"
                        ></a>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href="#"
                                className="mr-4 hover:underline md:mr-6"
                                >About</a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="mr-4 hover:underline md:mr-6"
                                        >Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="mr-4 hover:underline md:mr-6"
                                                >Licensing</a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="hover:underline"
                                                        >Contact</a>
                                                </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;