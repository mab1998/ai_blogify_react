import React from 'react';

const SlideOne = () => {
    return (
        <header id="home" className="h-screen flex flex-col justify-center items-center mt-16">
            <h1 className="text-5xl font-bold text-center">
                Open-Source Web Template for SaaS, Startup, Apps, and More
            </h1>
            <p className="mt-4 text-center">
                Multidisciplinary Web Template Built with Your Favourite Technology - HTML Bootstrap, Tailwind and React NextJS.
            </p>
            <div className="mt-6">
                <button className="bg-white text-blue-600 py-2 px-6 rounded mr-4">Download Now</button>
                <button className="bg-blue-800 py-2 px-6 rounded">Star on Github</button>
            </div>
        </header>
    );
};

export default SlideOne;
