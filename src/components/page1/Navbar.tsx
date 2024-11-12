'use client'
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleBackgroundClick = (e) => {
        // Only close if clicked directly on the background
        if (e.target.id === "modalBackground") {
            closeModal();
        }
    };

    // Close modal on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isModalOpen) {
                closeModal();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isModalOpen]);
    return (
        <nav className="p-4 shadow-md bg-[#000000]">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo on the Left */}
                <div className="flex items-center">
                    <img src="/lgic.png" alt="Logo" className="h-12 w-auto mr-4" />
                </div>

                {/* Centered Menu */}
                <div className="hidden md:flex space-x-9 text-lg text-gray-700 ml-40">
                    <a href="#" className=""><p className="hover:text-white">Beranda</p></a>
                    <a href="#" onClick={openModal} className="cursor-pointer"><p className="hover:text-white">Layanan&nbsp;  </p></a>
                    {/* <a href="#" className=""><p className="hover:text-white">Portfolio</p></a> */}
                    <a href="#" className=""><p className="hover:text-white">Kontak</p></a>
                    {/* <a href="#" className=""><p className="hover:text-white">Konsultasi Gratis</p></a> */}
                </div>

                {/* Right Button with Icon */}
                <div className="flex items-center">
                    <button className="flex items-center space-x-2 text-white px-4 py-2 rounded-full hover:bg-midnight gap-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                        <path d="M13 10h7v7h-7zM4 4h7v7H4z" />
                        <path fill="none" d="M0 0h24v24H0z" />
                    </svg> */}
                        <div>
                            <p className="text-2xl lg:block"><span>Discuss Project</span></p>
                        </div>
                        <img src="/arrow.png" alt="Logo" className="h-6 w-auto mr-4" />

                    </button>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div
                    id="modalBackground"
                    className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start justify-center z-50 pt-12 top-5"
                    onClick={handleBackgroundClick}
                >
                    <div className="bg-custom-modal border border-slate-700 p-6 rounded-lg shadow-lg w-11/12 relative top-0 place-items-center">
                        <button
                            onClick={closeModal}
                            className="absolute top-1 right-3 text-gray-400 hover:text-gray-200 w-5"
                        >
                            &times;
                        </button>
                        <div className="grid grid-cols-4 gap-4 text-center">
                            <div className="p-4 bg-transparent rounded-lg  cursor-pointer flex items-start  hover:bg-stone-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 28 28" // Increased the viewBox size for padding
                                    className="h-16 w-16 mr-3 mt-2"
                                >
                                    {/* Outer border with padding */}
                                    <rect x="0" y="0" width="24" height="24" rx="3" fill="none" stroke="#909090" strokeWidth="0.4 "
                                    />
                                    <g fill="#909090">
                                        <path
                                            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path d="M21 16v3a2 2 0 0 1-1.85 1.995L19 21h-6v-5zm-10-6v11H5a2 2 0 0 1-1.995-1.85L3 19v-9zm8-7a2 2 0 0 1 1.995 1.85L21 5v9h-8V3zm-8 0v5H3V5a2 2 0 0 1 1.85-1.995L5 3z" />
                                    </g>
                                </svg>

                                <div > {/* Add hover:text-white here */}
                                    <p className="text-2xl text-gray-300  text-left">Website Development</p>
                                    <p className="text-xxs text-gray-400 text-left ">Membangun Situs Yang Responsive Dan Inovatif <br />
                                        Yang Siap Memenuhi Semua Kebutuhan Bisnis Anda.</p>
                                </div>
                            </div>



                            <div className="p-4 bg-transparent rounded-lg hover:text-white cursor-pointer flex items-start hover:bg-stone-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 28 28" // Increased the viewBox size for padding
                                    className="h-16 w-16 mr-3 mt-2"
                                    fill="currentColor" // Use currentColor to inherit the text color
                                >
                                    <g fill="none">
                                        <g fill="#909090" >
                                            {/* Outer border with padding */}
                                            <rect x="0" y="0" width="24" height="24" rx="3" fill="none" stroke="#909090" strokeWidth="0.4" /> {/* Outer rectangle */}
                                            <path fill="#909090" d="M16.61 15.15c-.46 0-.84-.37-.84-.83s.38-.82.84-.82s.84.36.84.82s-.38.83-.84.83m-9.2 0c-.46 0-.84-.37-.84-.83s.38-.82.84-.82s.83.36.83.82s-.37.83-.83.83m9.5-5.01l1.67-2.88c.09-.17.03-.38-.13-.47c-.17-.1-.38-.04-.45.13l-1.71 2.91A10.15 10.15 0 0 0 12 8.91c-1.53 0-3 .33-4.27.91L6.04 6.91a.334.334 0 0 0-.47-.13c-.17.09-.22.3-.13.47l1.66 2.88C4.25 11.69 2.29 14.58 2 18h20c-.28-3.41-2.23-6.3-5.09-7.86"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <div>
                                    <p className="text-2xl text-gray-300  text-left">Mobile Apps</p>
                                    <p className="text-xxs text-gray-400 text-left">Menyiapkan APlikasi Mobile Yang Mudah <br />
                                        Di Gunkaan Sebagai Penunjang Bisnis Anda.</p>
                                </div>
                            </div>

                            <div className="p-4 bg-transparent rounded-lg hover:text-white cursor-pointer flex items-start hover:bg-stone-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 28 28" // Increased the viewBox size for padding
                                    className="h-16 w-16 mr-3 mt-2"
                                >
                                    <g fill="none">
                                        <rect x="0" y="0" width="24" height="24" rx="3" fill="none" stroke="#909090" strokeWidth="0.4" /> {/* Outer rectangle */}

                                        <g fill="#909090">
                                            <path fill="#909090" d="M10 5h4v14h-4zM5 19v-9h4v9zM7 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0h4v4h-4zm4 5h-4v4h4z" />

                                        </g>
                                    </g>
                                </svg>
                                <div>
                                    <p className="text-2xl text-gray-300 text-left">Visual Design</p>
                                    <p className="text-xxs text-gray-400 text-left">Memenuhi Kebutuhan Visual Untuk Branding <br />
                                        Bisnis Anda Menjadi Lebih Hidup.</p>
                                </div>
                            </div>

                            <div className="p-4 bg-transparent rounded-lg hover:text-white cursor-pointer flex items-start hover:bg-stone-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 28 28" // Increased the viewBox size for padding
                                    className="h-16 w-16 mr-3 mt-2"
                                >
                                    <g fill="none">
                                        <rect x="0" y="0" width="24" height="24" rx="3" fill="none" stroke="#909090" strokeWidth="0.4" /> {/* Outer rectangle */}

                                        <g fill="#909090">
                                            <path fill="#909090" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />

                                        </g>
                                    </g>
                                </svg>
                                <div>
                                    <p className="text-2xl text-gray-300 text-left">SEO</p>
                                    <p className="text-xxs text-gray-400 text-left">Mengoptimasi Website Anda Untuk Tampil <br />
                                        di Rank Teratas Mesin Pencarian.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            )
            }
        </nav >
    )
}

