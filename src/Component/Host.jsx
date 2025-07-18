import "./Hostsec.css";

const Host = () => {

  // const highlights = [
  //   {
  //     icon: "🎯",
  //     title: "Professional Experience",
  //     desc: "5+ years in  event hosting",
  //     colorClass: "highlight-orange",
  //   },
  //   {
  //     icon: "🏆",
  //     title: "Award Winner",
  //     desc: "Best motivational speaker",
  //     colorClass: "highlight-yellow",
  //   },
  //   {
  //     icon: "❤️",
  //     title: "Community Connect",
  //     desc: "Strong connection with community",
  //     colorClass: "highlight-green",
  //   },
  // ]

  const imageList = [
    require("../assets/images/Social Army poster july 2025_10___event poster.jpg"),
    require("../assets/images/Social Army poster july 2025_9.jpg"),
    require("../assets/images/Social Army poster july 2025_7.jpg"),
    require("../assets/images/Media (2).jpeg"),
    // require("../assets/images/Social Army poster july 2025_8.jpg"),
  ];

  return (
    <div className="host-section">
      {/* Background Elements */}
      <div className="background-pattern"></div>
      <div className="floating-elements">
        <div className="floating-star star-1">⭐</div>
        <div className="floating-star star-2">✨</div>
        <div className="floating-star star-3">⭐</div>
      </div>

      {/* Indian Flag */}
      <div className="indian-flag">
        <img src="https://png.pngtree.com/png-vector/20240812/ourmid/pngtree-cute-kid-with-indian-flag-for-republic-day-and-independence-png-image_13451424.png" alt="" className="img-fluid w-100 h-100 object-fit-cover" />
        {/* <img src="https://png.pngtree.com/png-clipart/20240824/original/pngtree-independence-day-india-a-boy-with-indian-flag-design-png-image_15842134.png" alt=""  className="img-fluid w-100 h-100 object-fit-cover"/> */}
      </div>

      <div className="container ">

        <div className=" header-section">
          {/* <div className="text-center mx-auto venue-card" style={{ maxWidth: "800px" }}>
            <span className="gradient-text">Celebrate Independence Day with </span>
            <div className="gradient-text">"Social Army Trust" through an engaging live panel discussion.</div>
          </div> */}
          <div className="brdstart-wrapper d-flex">
            <div className="brdstart text-start text-capitalize">
              <div className="gradient-text">Celebrate Independence Day with "Social Army Trust"</div>
              <div className="gradient-text">through an engaging live panel discussion.</div>
            </div>
          </div>
        </div>

        {/* <div className="row align-items-center mt-4">

          <div className="col-lg-5 mb-4">
            <div className="profile-card">
              <div className="profile-glow"></div>

              <div className="profile-image-container">
                <div className="profile-ring"></div>
                <div className="profile-image">
                  <img src={require("../assets/images/gopal dave.jpeg")} alt="RJ Akash Profile" className="img-fluid" style={{ objectPosition: "top center" }} />
                </div>

                <div className="host-badge">
                  <span>🏆 EVENT HOST</span>
                </div>

                <div className="floating-stat stat-1">
                  <span>👥 5+ Years</span>
                </div>
                <div className="floating-stat stat-2">
                  <span>📅 100+ Events</span>
                </div>
              </div>

              <div className="text-center profile-info">
                <h2 className="profile-name">
                  Gopal Dave
                </h2>

                <p className="profile-quote">"Bringing patriotic spirit to every celebration"</p>

                <div className="tricolor-line">
                  <div className="line-orange"></div>
                  <div className="line-white"></div>
                  <div className="line-green"></div>
                </div>
              </div>

              <div className="d-lg-flex d-md-flex gap-3 mt-4">
                <div className="btn btn-custom btn-orange flex-fill w-100"> Motivational Speaker </div>
                <div className="btn btn-custom btn-green flex-fill w-100 mt-3 mt-lg-0 mt-md-0"> Event Host</div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="content-card p-4">
              <div className="description-section">
                <div className="description-card orange-card ">
                  <p className="pera  p-3">
                    Our Independence Day celebration will be hosted by <strong className="text-orange">Gopal Dave</strong>
                    , a passionate speaker who brings the spirit of patriotism to every event. Known for his
                    engaging personality and deep love for our nation, he connects with audiences of all ages.
                  </p>
                </div>
                <div className="description-card green-card my-3">
                  <p className="pera p-3">
                    With over 5 years of experience in motivational speaker and event hosting, Gopal Dave has been the voice behind
                    numerous Independence Day celebrations across the country. His enthusiasm for national pride and
                    cultural heritage makes him the perfect choice for our festivities.
                  </p>
                </div>
              </div>

              <div className="highlights-section">
                {highlights.map((highlight, index) => (
                  <div className={`highlight-card ${highlight.colorClass}`}>
                    <div className="highlight-icon">
                      <span>{highlight.icon}</span>
                    </div>
                    <div className="highlight-content">
                      <h4>{highlight.title}</h4>
                      <p>{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="independence-message">
                <div className="message-stars">
                  <span>⭐</span>
                  <span>✨</span>
                  <span>⭐</span>
                </div>
                <p className="message-text">
                  "Join us as we celebrate the spirit of freedom and unity with   Gopal Dave on this Independence Day!"
                </p>
                <div className="message-footer">🇮🇳 Jai Hind! </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='row mt-3 justify-content-center'>
          {imageList.map((image, index) => (
            <div className='col-12 col-lg-3 p-2' key={index}>
              <div className='h-100'>
                <div
                  className='p-2'
                  style={{
                    border: "5px groove green",
                    boxShadow: "7px 7px 0px green",
                  }}
                >
                  <img
                    src={image}
                    className='img-fluid w-100 h-100 object-fit-cover'
                    alt={`Event poster ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center header-section mt-4">
          <div className="brdstart-wrapper d-flex justify-content-center align-items-center">
            <div className="brdstart gradient-text text-start text-capitalize">
              Suro Mein Bharat – The Live In Concert
            </div>
          </div>
        </div>
        <div className="row justify-content-center my-4">
          <div className="col-12 col-lg-3">
            <div className="h-100">
              <div className='p-2'
                style={{
                  border: "5px groove green",
                  boxShadow: "7px 7px 0px green",
                }}>
                <img src={require("../assets/images/Social Army poster july 2025_8.jpg")} className="img-fluid w-100 h-100 object-fit-cover" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Host
