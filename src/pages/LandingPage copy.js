import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col items-center">
      <nav className="w-full flex justify-between items-center p-4 fixed top-0 bg-blue-600 z-50">
        <div className="text-2xl font-bold">PLAY</div>
        <div className="space-x-4">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Home</Link>
          <Link to="features" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Features</Link>
          <Link to="pricing" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Pricing</Link>
          <Link to="team" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Team</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Contact</Link>
        </div>
        <div>
          <button className="bg-white text-blue-600 py-2 px-4 rounded mr-2">Sign In</button>
          <button className="bg-blue-800 py-2 px-4 rounded">Sign Up</button>
        </div>
      </nav>




      {/* Start First section  */}
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

      {/* End First Section  */}

      {/* Start Second section  */}

      <section className="h-screen  w-full bg-white text-black py-16" id="features">
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


      {/* End Second Section  */}


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
      <section className="w-full bg-blue-600 text-white py-16" id="cta">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What Are You Looking For?</h2>
          <p className="mb-8">Get Started Now</p>
          <button className="bg-green-500 text-white py-2 px-6 rounded">Start using Play</button>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-16" id="pricing">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Awesome Pricing Plan</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-4">$25.00</p>
              <ul className="mb-4">
                <li>Up to 1 User</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-6 rounded">Purchase Now</button>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-4">$59.00</p>
              <ul className="mb-4">
                <li>Up to 1 User</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-6 rounded">Purchase Now</button>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-4">$99.00</p>
              <ul className="mb-4">
                <li>Up to 1 User</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-6 rounded">Purchase Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white text-black py-16" id="faq">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Any Questions? Look Here</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Is TailGrids Well-documented?</h3>
              <p className="mb-4">It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content strategy that we do writing your first blog post.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Is TailGrids Well-documented?</h3>
              <p className="mb-4">It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content strategy that we do writing your first blog post.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Is TailGrids Well-documented?</h3>
              <p className="mb-4">It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content strategy that we do writing your first blog post.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Is TailGrids Well-documented?</h3>
              <p className="mb-4">It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content strategy that we do writing your first blog post.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-16" id="team">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Creative Team</h2>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <img src="/path/to/your/image5.png" alt="Team Member 1" className="mb-4 rounded-full"/>
              <h3 className="text-xl font-bold">Melissa Tatcher</h3>
              <p>Marketing Expert</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600">Facebook</a>
                <a href="#" className="text-blue-600">Twitter</a>
                <a href="#" className="text-blue-600">Instagram</a>
              </div>
            </div>
            <div>
              <img src="/path/to/your/image6.png" alt="Team Member 2" className="mb-4 rounded-full"/>
              <h3 className="text-xl font-bold">Stuard Ferrel</h3>
              <p>Digital Marketer</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600">Facebook</a>
                <a href="#" className="text-blue-600">Twitter</a>
                <a href="#" className="text-blue-600">Instagram</a>
              </div>
            </div>
            <div>
              <img src="/path/to/your/image7.png" alt="Team Member 3" className="mb-4 rounded-full"/>
              <h3 className="text-xl font-bold">Eva Hudson</h3>
              <p>Creative Designer</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600">Facebook</a>
                <a href="#" className="text-blue-600">Twitter</a>
                <a href="#" className="text-blue-600">Instagram</a>
              </div>
            </div>
            <div>
              <img src="/path/to/your/image8.png" alt="Team Member 4" className="mb-4 rounded-full"/>
              <h3 className="text-xl font-bold">Jackie Sanders</h3>
              <p>SEO Expert</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600">Facebook</a>
                <a href="#" className="text-blue-600">Twitter</a>
                <a href="#" className="text-blue-600">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      </footer>
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-blue-800 p-3 rounded-full text-white"
          onClick={() => scroll.scrollToTop()}
        >
          ⬆️
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
