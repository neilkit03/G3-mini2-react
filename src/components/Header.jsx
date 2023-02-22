import React from "react";

const Header = () => {
  return (
    <>
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                    Home Construction
                    <br />
                    Flip & Fix
                  </h1>
                  <a
                    href='#about'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
