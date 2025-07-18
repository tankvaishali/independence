import React, { useState, useEffect } from 'react';

function Sponser() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className={`red-certificates-section py-5 ${isVisible ? 'visible' : ''}`}>
        {/* Animated Background Elements */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        <div className="container-fluid px-4">
          {/* Header Section */}
          <div className="row justify-content-center mb-2">
            <div className="col-lg-8 text-center">
              <div className="header-content" >
                {/* <div className="independence-badge mb-3">
                  <span>⭐ Our Sponsers  ✨</span>
                </div> */}

                <h2
                  className="ftittle fw-bold m-0 p-0 text-capitalize main-title"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Our Supporters
                </h2>
                <p className="pera pt-2">
                  Join forces with us to make this event a success and enhance your company's social responsibility efforts and marketing strategy with Social Army.
                </p>
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="certificates-grid">
            <div data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true">
              <div className="certificate-item h-100 d-flex align-items-center"  >
                <img
                  src="https://baprerna.com/_next/image?url=%2Fassets%2Ffavicon.png&w=384&q=75"
                  alt="BRC Logo"
                  className="img-fluid"
                />
                <div className="certificate-glow"></div>
              </div>
            </div>

            <div data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="500"
              data-aos-once="true">
              <div className="certificate-item h-100 d-flex align-items-center"   >
                <img
                  src={require("../assets/images/images-removebg-preview.png")}
                  alt="Halal Logo"
                  className="img-fluid"
                />
                <div className="certificate-glow"></div>
              </div>
            </div>

            <div data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="500"
              data-aos-once="true">
              <div className="certificate-item h-100 d-flex align-items-center"   >
                <img
                  src={require("../assets/images/images__1___1_-removebg-preview.png")}
                  alt="Halal Logo"
                  className="img-fluid"
                />
                <div className="certificate-glow"></div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
}

export default Sponser;
