import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Footers = () => {
    return (
        <footer className="w-full bg-blue-900 text-white py-16" id="contact">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-8 mb-8">
                    <a href="#" className="text-white">graygrids</a>
                    <a href="#" className="text-white">Lineicons</a>
                    <a href="#" className="text-white">Uldeck</a>
                    <a href="#" className="text-white">Ayro UI</a>
                    <a href="#" className="text-white">TailGrids</a>
                </div>
                <div className="grid grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold">About Us</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">Features</a></li>
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Testimonial</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Features</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white">How it works</a></li>
                            <li><a href="#" className="text-white">Privacy policy</a></li>
                            <li><a href="#" className="text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-white">Refund policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Our Products</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white">LineIcons</a></li>
                            <li><a href="#" className="text-white">Ecommerce HTML</a></li>
                            <li><a href="#" className="text-white">TailAdmin</a></li>
                            <li><a href="#" className="text-white">PlainAdmin</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Latest Blog</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white">I think really important to design with...</a></li>
                            <li><a href="#" className="text-white">Recognizing the need is the primary...</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-4 right-4">
                <button
                    className="bg-blue-800 p-3 rounded-full text-white"
                    onClick={() => scroll.scrollToTop()}
                >
                    ⬆️
                </button>
            </div>
        </footer>
    );
};

export default Footers;
