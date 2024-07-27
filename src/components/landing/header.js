import React from 'react';

const SlideThree = () => {
    return (
        <section className="w-full bg-gray-100 py-16" id="about">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Brilliant Toolkit to Build Nextgen Website Faster</h2>
                <p className="mb-8">The main 'thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables led by subject matter experts.</p>
                <img src="/path/to/your/image1.png" alt="Image 1" className="mx-auto mb-8"/>
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <img src="/path/to/your/image2.png" alt="Image 2" className="mb-4"/>
                        <p className="text-xl">09 Years of experience</p>
                    </div>
                    <div>
                        <img src="/path/to/your/image3.png" alt="Image 3" className="mb-4"/>
                    </div>
                    <div>
                        <img src="/path/to/your/image4.png" alt="Image 4" className="mb-4"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SlideThree;
