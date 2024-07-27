import React from 'react';

const SlideTwo = () => {
    return (
        <section className="h-screen w-full bg-white text-black py-16" id="features">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Main Features Of Play</h2>
                <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <div className="flex justify-around items-start">
                <div className="text-center">
                    <div className="text-blue-600 text-4xl">🎁</div>
                    <h3 className="text-xl font-bold">Free and Open-Source</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                    <a href="#" className="text-blue-600">Learn More</a>
                </div>
                <div className="text-center">
                    <div className="text-blue-600 text-4xl">📦</div>
                    <h3 className="text-xl font-bold">Multipurpose Template</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                    <a href="#" className="text-blue-600">Learn More</a>
                </div>
                <div className="text-center">
                    <div className="text-blue-600 text-4xl">💎</div>
                    <h3 className="text-xl font-bold">High-quality Design</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                    <a href="#" className="text-blue-600">Learn More</a>
                </div>
                <div className="text-center">
                    <div className="text-blue-600 text-4xl">🔧</div>
                    <h3 className="text-xl font-bold">All Essential Elements</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>
                    <a href="#" className="text-blue-600">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default SlideTwo;
