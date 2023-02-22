import React from "react";
import Header from "../components/Header";
import Gettouch from "../components/Gettouch";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <div id='page-top' data-spy='scroll' data-target='.navbar-fixed-top' />

      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {" "}
              <span className='sr-only'>Toggle navigation</span>{" "}
              <span className='icon-bar'></span>{" "}
              <span className='icon-bar'></span>{" "}
              <span className='icon-bar'></span>{" "}
            </button>
            <a className='navbar-brand page-scroll' href='#page-top'>
              Mod Livin' RTY
            </a>
            <div className='phone'>
              <span>Call Today</span>888-123-4321
            </div>
          </div>

          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#about' className='page-scroll'>
                  About
                </a>
              </li>
              <li>
                <a href='#services' className='page-scroll'>
                  Services
                </a>
              </li>
              <li>
                <a href='#portfolio' className='page-scroll'>
                  Projects
                </a>
              </li>
              <li>
                <a href='#testimonials' className='page-scroll'>
                  Testimonials
                </a>
              </li>
              <li>
                <a href='#contact' className='page-scroll'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Header />
      <Gettouch />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
