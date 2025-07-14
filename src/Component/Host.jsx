// import React from 'react';
// import { FaRadio } from 'react-icons/fa6';
// import { PiMicrophoneStageFill } from 'react-icons/pi';

// function Host() {
//   return (
//     <>
//   <div className="host_bg">
//     <div className="container">
//         <div className="row py-5 d-flex align-items-center">
//             <div className="col-4">
//               <div className="shadow rounded-2 p-5">
// <div className='rounded-circle mx-auto' style={{width:200,height:200}}>
//     <img src={require("../assets/images/11.jpg")} alt="" className='img-fluid  w-100 h-100 object-fit-cover rounded-circle' style={{objectPosition:"top center"}} />
// </div>
// <div className='text-warning fs-3 fw-bold text-center'>
//     R J AKASH
// </div>

// <div className='d-flex justify-content-evenly'>
//     <div className='shadow bg-success p-3 text-center'>
//         <div className='fs-3 fw-bold'> <FaRadio/></div>
//         <div>Radio Fm</div>
//     </div>
//     <div className='shadow bg-success p-3 text-center'>
//         <div className='fs-3 fw-bold'> <PiMicrophoneStageFill/></div>
//         <div>
// Event Host</div>
//     </div>

// </div>
//               </div>
//             </div>
//             <div className="col-8">
//               <div className="shadow rounded-2">
//            <div className="col-lg-8">
//               <div className="host-description-ultra p-5">
//                 <h4 className="description-title">About Our Event Host</h4>
//                 <p className="description-text">
//                   Our Independence Day event will be hosted by <strong>RJ Akash</strong>, an experienced radio jockey
//                   and event host. He is known for his engaging personality and ability to connect with audiences of all
//                   ages.
//                 </p>
//                 <p className="description-text">
//                   RJ Akash has been entertaining listeners for over 8 years and has hosted numerous patriotic events
//                   across the country. His enthusiasm for national celebrations makes him perfect for our festivities.
//                 </p>

//                 <div className="host-highlights-ultra">
//                   {[
//                     { icon: "🎯", title: "Professional Experience", desc: "8+ years in radio and event hosting" },
//                     { icon: "🏆", title: "Award Winner", desc: "Best Radio Jockey Award 2023" },
//                     { icon: "❤️", title: "Community Connect", desc: "Strong connection with local community" },
//                   ].map((highlight, index) => (
//                     <div key={index} className="highlight-card-ultra" style={{ animationDelay: `${index * 0.1}s` }}>
//                       <div className="highlight-glow"></div>
//                       <div className="highlight-icon-ultra">{highlight.icon}</div>
//                       <div className="highlight-content">
//                         <h5>{highlight.title}</h5>
//                         <p>{highlight.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//               </div>
//             </div>
//         </div>
//     </div>
//   </div>
//     </>
//   );
// }

// export default Host;
import "./Hostsec.css"
const Host = () => {

  const highlights = [
    {
      icon: "🎯",
      title: "Professional Experience",
      desc: "5+ years in  event hosting",
      colorClass: "highlight-orange",
    },
    {
      icon: "🏆",
      title: "Award Winner",
      desc: "Best motivational speaker",
      colorClass: "highlight-yellow",
    },
    {
      icon: "❤️",
      title: "Community Connect",
      desc: "Strong connection with  community",
      colorClass: "highlight-green",
    },
  ]

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
        {/* Header Section */}
        <div className="text-center  header-section">
          <div className="independence-badge mb-3">
            <span>⭐ Independence Day Event 2025  ✨</span>
          </div>
          <h1 className="main-title">
            Meet Your Event Host
          </h1>
          {/* <div className="title-underline"></div> */}
        </div>

        <div className="row align-items-center mt-4">
          {/* Left Profile Section */}
          <div className="col-lg-5 mb-4">
            <div className="profile-card">
              <div className="profile-glow"></div>

              {/* Profile Image */}
              <div className="profile-image-container">
                <div className="profile-ring"></div>
                <div className="profile-image">
                  <img src={require("../assets/images/gopal dave.jpeg")} alt="RJ Akash Profile" className="img-fluid" style={{ objectPosition: "top center" }} />
                </div>

                {/* Badge */}
                <div className="host-badge">
                  <span>🏆 EVENT HOST</span>
                </div>

                {/* Floating Stats */}
                <div className="floating-stat stat-1">
                  <span>👥 5+ Years</span>
                </div>
                <div className="floating-stat stat-2">
                  <span>📅 100+ Events</span>
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center profile-info">
                <h2 className="profile-name">
   Gopal Dave
                </h2>
              
                <p className="profile-quote">"Bringing patriotic spirit to every celebration"</p>

                {/* Tricolor Line */}
                <div className="tricolor-line">
                  <div className="line-orange"></div>
                  <div className="line-white"></div>
                  <div className="line-green"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-lg-flex d-md-flex gap-3 mt-4">
                <div className="btn btn-custom btn-orange flex-fill w-100"> Motivational Speaker </div>
                <div className="btn btn-custom btn-green flex-fill w-100 mt-3 mt-lg-0 mt-md-0"> Event Host</div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-7">
            <div className="content-card p-4">
              {/* Header */}
              {/* <div className="content-header">
                <h3 className="content-title">
                  About Our <span className="text-orange">Independence Day</span>{" "}
                  <span className="text-green">Event Host</span>
                </h3>
                <div className="content-underline"></div>
              </div> */}

              {/* Description */}
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

              {/* Highlights */}
              <div className="highlights-section">
                {highlights.map((highlight, index) => (
                  <div className={`highlight-card ${highlight.colorClass}`}>
                    <div className="highlight-icon">
                      <span>{highlight.icon}</span> {/* 👈 Only this will animate */}
                    </div>
                    <div className="highlight-content">
                      <h4>{highlight.title}</h4>
                      <p>{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Independence Day Message */}
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
        </div>
      </div>
    </div>
  )
}

export default Host
