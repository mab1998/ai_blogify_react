// src/pages/LandingPage.js
import React from 'react';
import '../assets/css/swiper-bundle.min.css';
import '../assets/css/animate.css';
import '../assets/css/tailwind.css';
import WOW from 'wowjs';

import { useNavigate } from 'react-router-dom';

class LandingPage extends React.Component {
  
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    const navigate = useNavigate();

    const handleLogin = () => {
      navigate('/login');
    };

    const handleRegister = () => {
      navigate('/register');
    };
    return (
      <div>
        {/* Navbar Section */}
        <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
          <div className="container">
            <div className="relative -mx-4 flex items-center justify-between">
              <div className="w-60 max-w-full px-4">
                <a href="/" className="navbar-logo block w-full py-5">
                  <img src="assets/images/logo/logo-white.svg" alt="logo" className="header-logo w-full" />
                </a>
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  <button
                    id="navbarToggler"
                    className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  >
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  </button>
                  <nav
                    id="navbarCollapse"
                    className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
                  >
                    <ul className="blcok lg:flex 2xl:ml-20">
                      <li className="group relative">
                        <a
                          href="#home"
                          className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                        >
                          Home
                        </a>
                      </li>
                      <li className="group relative">
                        <a
                          href="#about"
                          className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                        >
                          About
                        </a>
                      </li>
                      <li className="group relative">
                        <a
                          href="#pricing"
                          className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="group relative">
                        <a
                          href="#contact"
                          className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex items-center justify-end pr-16 lg:pr-0">
                  <label
                    htmlFor="themeSwitcher"
                    className="inline-flex cursor-pointer items-center"
                    aria-label="themeSwitcher"
                    name="themeSwitcher"
                  >
                    <input type="checkbox" name="themeSwitcher" id="themeSwitcher" className="sr-only" />
                    <span className="block text-white dark:hidden">
                      <img src="svgs/svg_1.svg" alt="Light Mode" />
                    </span>
                    <span className="hidden text-white dark:block">
                      <img src="svgs/svg_2.svg" alt="Dark Mode" />
                    </span>
                  </label>
                  <div className="hidden sm:flex">
                    <a
                      onClick={handleLogin}
                      className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                    >
                      Sign In
                    </a>
                    <a
                      onClick={handleRegister}
                      className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4">
                <div
                  className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                  data-wow-delay=".2s"
                >
                  <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                    Turn YouTube Videos into High-Quality Articles Instantly
                  </h1>
                  <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                    Transform your favorite YouTube content into well-written
                    articles effortlessly using our advanced AI technology.
                  </p>
                  <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                    <li>
                      <a
                        href="https://github.com/tailgrids/play-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                      >
                        Start Free Trial
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full px-4">
                <div className="wow fadeInUp relative z-10 mx-auto max-w-[845px]" data-wow-delay=".25s">
                  <div className="mt-16">
                    <img
                      src="assets/images/hero/hero-image.jpg"
                      alt="hero"
                      className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    />
                  </div>
                  <div className="absolute -left-9 bottom-0 z-[-1]">
                    <img src="svgs/svg_3.svg" alt="Decoration" />
                  </div>
                  <div className="absolute -right-6 -top-6 z-[-1]">
                    <img src="svgs/svg_4.svg" alt="Decoration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                  <span className="mb-2 block text-lg font-semibold text-primary">Features</span>
                  <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                    Main Features
                  </h2>
                  Discover the powerful features that make content creation effortless and efficient.
                </div>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                  <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                    <img src="svgs/svg_5.svg" alt="Icon" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Automatic Transcription</h4>
                  <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                    Convert YouTube videos to text with high accuracy. Our advanced AI ensures that every word is
                    captured correctly, making it easy to create detailed articles.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
                  <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                    <img src="svgs/svg_6.svg" alt="Icon" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">AI-Powered Article Generation</h4>
                  <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                    Generate well-structured and coherent articles from transcriptions. Our AI organizes the content
                    logically, ensuring readability and engagement.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="wow fadeInUp group mb-12" data-wow-delay=".2s">
                  <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                    <img src="svgs/svg_7.svg" alt="Icon" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">SEO Optimization</h4>
                  <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                    Optimize articles for search engines with built-in keyword analysis and suggestions. Improve your
                    online visibility and attract more readers.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="wow fadeInUp group mb-12" data-wow-delay=".25s">
                  <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                    <img src="svgs/svg_8.svg" alt="Icon" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Multi-Language Support</h4>
                  <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                    Transcribe and generate articles in multiple languages. Reach a global audience and expand your
                    content’s impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
          <div className="container mx-auto text-center">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="mb-12 max-w-[540px] mx-auto">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  About Us
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  We believe in the power of technology to simplify content creation. Our innovative platform converts
                  YouTube videos into high-quality, SEO-optimized articles in just a few clicks.
                  <br />
                  Get started today and see the difference our platform can make for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
          <div className="container mx-auto">
            <div className="relative overflow-hidden">
              <div className="-mx-4 flex flex-wrap items-stretch">
                <div className="w-full px-4">
                  <div className="mx-auto max-w-[570px] text-center">
                    <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                      <span>What Are You Looking For?</span>
                      <span className="text-3xl font-normal md:text-[40px]">Get Started Now</span>
                    </h2>
                    <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                      Discover how our innovative platform can transform your content creation process. Whether you're a
                      content creator, marketer, or business owner, our tools are designed to help you achieve your goals
                      efficiently.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="absolute left-0 top-0">
                <img src="svgs/svg_9.svg" alt="Decoration" />
              </span>
              <span className="absolute bottom-0 right-0">
                <img src="svgs/svg_10.svg" alt="Decoration" />
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                  <span className="mb-2 block text-lg font-semibold text-primary">Pricing Table</span>
                  <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                    Awesome Pricing Plan
                  </h2>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Discover our flexible and affordable pricing plans designed to meet your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                  <span className="mb-5 block text-xl font-medium text-dark dark:text-white">Basic Plan</span>
                  <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                    <span className="text-xl font-medium">$</span>
                    <span className="-ml-1 -tracking-[2px]">5.00</span>
                    <span className="text-base font-normal text-body-color dark:text-dark-6">Per Month</span>
                  </h2>
                  <div className="mb-[50px]">
                    <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">Features</h5>
                    <div className="flex flex-col gap-[14px]">
                      <p className="text-base text-body-color dark:text-dark-6">5 Credits per M (5 blog)</p>
                      <p className="text-base text-body-color dark:text-dark-6">SEO Optimization</p>
                      <p className="text-base text-body-color dark:text-dark-6">150 Supported Languages</p>
                      <p className="text-base text-body-color dark:text-dark-6">Supported Platforms: Youtube</p>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                  <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                    Recommended
                  </p>
                  <span className="mb-5 block text-xl font-medium text-dark dark:text-white">Premium Plan</span>
                  <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                    <span className="text-xl font-medium">$</span>
                    <span className="-ml-1 -tracking-[2px]">10.00</span>
                    <span className="text-base font-normal text-body-color dark:text-dark-6">Per Month</span>
                  </h2>
                  <div className="mb-[50px]">
                    <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">Features</h5>
                    <div className="flex flex-col gap-[14px]">
                      <p className="text-base text-body-color dark:text-dark-6">20 Credits per M (20 blog)</p>
                      <p className="text-base text-body-color dark:text-dark-6">SEO Optimization</p>
                      <p className="text-base text-body-color dark:text-dark-6">150 Supported Languages</p>
                      <p className="text-base text-body-color dark:text-dark-6">Supported Platforms: Youtube</p>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                  <span className="mb-5 block text-xl font-medium text-dark dark:text-white">Master Plan</span>
                  <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                    <span className="text-xl font-medium">$</span>
                    <span className="-ml-1 -tracking-[2px]">19.00</span>
                    <span className="text-base font-normal text-body-color dark:text-dark-6">Per Month</span>
                  </h2>
                  <div className="mb-[50px]">
                    <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">Features</h5>
                    <div className="flex flex-col gap-[14px]">
                      <p className="text-base text-body-color dark:text-dark-6">40 Credits per M (30 blog)</p>
                      <p className="text-base text-body-color dark:text-dark-6">SEO Optimization</p>
                      <p className="text-base text-body-color dark:text-dark-6">150 Supported Languages</p>
                      <p className="text-base text-body-color dark:text-dark-6">
                        Supported Platforms: Youtube, Google Podcast, Spotify, Vimeo
                      </p>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="overflow-hidden bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                  <span className="mb-2 block text-lg font-semibold text-primary">Testimonials</span>
                  <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                    What our Clients Say
                  </h2>
                  <p className="text-base text-body-color dark:text-dark-6">
                    There are many variations of passages of Lorem Ipsum available but the majority have suffered
                    alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="-m-5">
              <div className="swiper testimonial-carousel common-carousel p-5">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]">
                      <div className="mb-[18px] flex items-center gap-[2px]">
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                      </div>
                      <p className="mb-6 text-base text-body-color dark:text-dark-6">
                        “Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're
                        building a community.’’
                      </p>
                      <a href="#" className="flex items-center gap-4">
                        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                          <img
                            src="./assets/images/testimonials/author-01.jpg"
                            alt="author"
                            className="h-[50px] w-[50px] overflow-hidden rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-dark dark:text-white">Sabo Masties</h3>
                          <p className="text-xs text-body-secondary">Founder @ Rolex</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]">
                      <div className="mb-[18px] flex items-center gap-[2px]">
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                      </div>
                      <p className="mb-6 text-base text-body-color dark:text-dark-6">
                        “Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're
                        building a community.’’
                      </p>
                      <a href="#" className="flex items-center gap-4">
                        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                          <img
                            src="./assets/images/testimonials/author-02.jpg"
                            alt="author"
                            className="h-[50px] w-[50px] overflow-hidden rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-dark dark:text-white">Musharof Chowdhury</h3>
                          <p className="text-xs text-body-secondary">Founder @ Ayro UI</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]">
                      <div className="mb-[18px] flex items-center gap-[2px]">
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                        <img src="./assets/images/testimonials/icon-star.svg" alt="star icon" />
                      </div>
                      <p className="mb-6 text-base text-body-color dark:text-dark-6">
                        “Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're
                        building a community.’’
                      </p>
                      <a href="#" className="flex items-center gap-4">
                        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                          <img
                            src="./assets/images/testimonials/author-03.jpg"
                            alt="author"
                            className="h-[50px] w-[50px] overflow-hidden rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-dark dark:text-white">William Smith</h3>
                          <p className="text-xs text-body-secondary">Founder @ Trorex</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-[60px] flex items-center justify-center gap-1">
                  <div className="swiper-button-prev">
                    <img src="svgs/svg_11.svg" alt="Previous" />
                  </div>
                  <div className="swiper-button-next">
                    <img src="svgs/svg_12.svg" alt="Next" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                  <span className="mb-2 block text-lg font-semibold text-primary">FAQ</span>
                  <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                    Any Questions? Look Here
                  </h2>
                  <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                    There are many variations of passages of Lorem Ipsum available but the majority have suffered
                    alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 flex lg:mb-[70px]">
                  <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                    <img src="svgs/svg_13.svg" alt="Icon" />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Is the YouTube Article Generator easy to use?
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Yes, our platform is designed with user-friendliness in mind. You can convert YouTube videos to
                      well-structured articles in just a few clicks.
                    </p>
                  </div>
                </div>
                <div className="mb-12 flex lg:mb-[70px]">
                  <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                    <img src="svgs/svg_14.svg" alt="Icon" />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      How accurate is the transcription?
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Our advanced AI technology ensures high accuracy in transcription, capturing every word correctly
                      to create detailed and precise articles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 flex lg:mb-[70px]">
                  <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                    <img src="svgs/svg_15.svg" alt="Icon" />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Can I edit the generated articles?
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Absolutely! You can easily edit and format the generated articles to suit your style and meet your
                      specific requirements.
                    </p>
                  </div>
                </div>
                <div className="mb-12 flex lg:mb-[70px]">
                  <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                    <img src="svgs/svg_16.svg" alt="Icon" />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      What languages are supported?
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      We support transcription and article generation in 150 different languages, allowing you to reach a
                      global audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="absolute left-4 top-4 -z-[1]">
              <img src="svgs/svg_17.svg" alt="Decoration" />
            </span>
            <span className="absolute bottom-4 right-4 -z-[1]">
              <img src="svgs/svg_18.svg" alt="Decoration" />
            </span>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 md:py-[120px]">
          <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
          <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
          <div className="container px-4">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                <div className="ud-contact-content-wrapper">
                  <div className="ud-contact-title mb-12 lg:mb-[150px]">
                    <span className="mb-6 block text-base font-medium text-dark dark:text-white">CONTACT US</span>
                    <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                      Let's talk about your problem.
                    </h2>
                  </div>
                  <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                    <div className="mb-8 flex w-[330px] max-w-full">
                      <div className="mr-6 text-[32px] text-primary">
                        <img src="svgs/svg_19.svg" alt="Location" />
                      </div>
                      <div>
                        <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">Our Location</h5>
                        <p className="text-base text-body-color dark:text-dark-6">
                          401 Broadway, 24th Floor, Orchard Cloud View, London
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex w-[330px] max-w-full">
                      <div className="mr-6 text-[32px] text-primary">
                        <img src="svgs/svg_20.svg" alt="Email" />
                      </div>
                      <div>
                        <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">How Can We Help?</h5>
                        <p className="text-base text-body-color dark:text-dark-6">info@yourdomain.com</p>
                        <p className="mt-1 text-base text-body-color dark:text-dark-6">contact@yourdomain.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                <div
                  className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
                  data-wow-delay=".2s"
                >
                  <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                    Send us a Message
                  </h3>
                  <form>
                    <div className="mb-[22px]">
                      <label htmlFor="fullName" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Adam Gelius"
                        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                      />
                    </div>
                    <div className="mb-[22px]">
                      <label htmlFor="email" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@yourmail.com"
                        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                      />
                    </div>
                    <div className="mb-[22px]">
                      <label htmlFor="phone" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                        Phone*
                      </label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="+885 1254 5211 552"
                        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                      />
                    </div>
                    <div className="mb-[30px]">
                      <label htmlFor="message" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                        Message*
                      </label>
                      <textarea
                        name="message"
                        rows="1"
                        placeholder="type your message here"
                        className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                      ></textarea>
                    </div>
                    <div className="mb-0">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="pb-20 dark:bg-dark">
          <div className="container px-4">
            <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
              <a href="https://graygrids.com/">
                <img src="./assets/images/brands/graygrids.svg" alt="graygrids" className="dark:hidden" />
                <img src="./assets/images/brands/graygrids-white.svg" alt="graygrids" className="hidden dark:block" />
              </a>
              <a href="https://lineicons.com/">
                <img src="./assets/images/brands/lineicons.svg" alt="lineicons" className="dark:hidden" />
                <img src="./assets/images/brands/lineicons-white.svg" alt="graygrids" className="hidden dark:block" />
              </a>
              <a href="https://uideck.com/">
                <img src="./assets/images/brands/uideck.svg" alt="uideck" className="dark:hidden" />
                <img src="./assets/images/brands/uideck-white.svg" alt="graygrids" className="hidden dark:block" />
              </a>
              <a href="https://ayroui.com/">
                <img src="./assets/images/brands/ayroui.svg" alt="ayroui" className="dark:hidden" />
                <img src="./assets/images/brands/ayroui-white.svg" alt="graygrids" className="hidden dark:block" />
              </a>
              <a href="https://tailgrids.com/">
                <img src="./assets/images/brands/tailgrids.svg" alt="tailgrids" className="dark:hidden" />
                <img src="./assets/images/brands/tailgrids-white.svg" alt="graygrids" className="hidden dark:block" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]" data-wow-delay=".15s">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
                <div className="mb-10 w-full">
                  <a href="javascript:void(0)" className="mb-6 inline-block max-w-[160px]">
                    <img src="assets/images/logo/logo-white.svg" alt="logo" className="max-w-full" />
                  </a>
                  <p className="mb-8 max-w-[270px] text-base text-gray-7">
                    We create digital experiences for brands and companies by using technology.
                  </p>
                  <div className="-mx-3 flex items-center">
                    <a href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
                      <img src="svgs/svg_21.svg" alt="Social" />
                    </a>
                    <a href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
                      <img src="svgs/svg_22.svg" alt="Social" />
                    </a>
                    <a href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
                      <img src="svgs/svg_23.svg" alt="Social" />
                    </a>
                    <a href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
                      <img src="svgs/svg_24.svg" alt="Social" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                <div className="mb-10 w-full">
                  <h4 className="mb-9 text-lg font-semibold text-white">About Us</h4>
                  <ul>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        Testimonial
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
                <div className="mb-10 w-full">
                  <h4 className="mb-9 text-lg font-semibold text-white">Features</h4>
                  <ul>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        How it works
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        Refund policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
                <div className="mb-10 w-full">
                  <h4 className="mb-9 text-lg font-semibold text-white">Our Products</h4>
                  <ul>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        LineIcons
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        Ecommerce HTML
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        TailAdmin
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                        PlainAdmin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
            <div className="container">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                  <div className="my-1">
                    <div className="-mx-3 flex items-center justify-center md:justify-start">
                      <a href="javascript:void(0)" className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                        Privacy policy
                      </a>
                      <a href="javascript:void(0)" className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                        Legal notice
                      </a>
                      <a href="javascript:void(0)" className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                        Terms of service
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="absolute left-0 top-0 z-[-1]">
              <img src="assets/images/footer/shape-1.svg" alt="Decoration" />
            </span>
            <span className="absolute bottom-0 right-0 z-[-1]">
              <img src="assets/images/footer/shape-3.svg" alt="Decoration" />
            </span>
            <span className="absolute right-0 top-0 z-[-1]">
              <img src="svgs/svg_25.svg" alt="Decoration" />
            </span>
          </div>
        </footer>

        {/* Back To Top */}
        <a
          href="javascript:void(0)"
          className="back-to-top fixed bottom-8 left-auto right-8 z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </a>
      </div>
    );
  }
}

export default LandingPage;
