import React from 'react'
 
function About() {
    return (
        <>
            <div className="about-section position-relative overflow-hidden">
                <div className="bubble bubble1"></div>
                <div className="bubble bubble2"></div>
                <div className="bubble bubble3"></div>
 
                <div className='container pt-5 pb-4'>
                    <div className="text-center  header-section">
                        <div className="independence-badge mb-3">
                            <span>⭐ Main Speaker ✨</span>
                        </div>
                        <h1 className="main-title">
                            COL. RAJEEV BHARWAN</h1>
                        <div className="title-underline"></div>
                    </div>
                    <div className='text-center my-3'>
                        <div className="d-inline-block rounded-5 px-3 py-1 mx-1 my-2 shadow" style={{ border: "2px solid rgba(249, 115, 22, 0.2)" }}>
                            <span className='pera'>AIRBORNE</span>
                        </div>
                        <div className="d-inline-block rounded-5 px-3 py-1 mx-1 my-2 shadow" style={{ border: "2px solid rgba(249, 115, 22, 0.2)" }}>
                            <span className='pera'>VETERAN</span>
                        </div>
                        <div className="d-inline-block rounded-5 px-3 py-1 mx-1 my-2 shadow" style={{ border: "2px solid rgba(249, 115, 22, 0.2)" }}>
                            <span className='pera'>SSB MENTOR</span>
                        </div>
                        <div className="d-inline-block rounded-5 px-3 py-1 mx-1 my-2 shadow" style={{ border: "2px solid rgba(249, 115, 22, 0.2)" }}>
                            <span className='pera'>MOTIVATOR</span>
                        </div>
                        <div className="d-inline-block rounded-5 px-3 py-1 mx-1 my-2 shadow" style={{ border: "2px solid rgba(249, 115, 22, 0.2)" }}>
                            <span className='pera'>SPEAKER</span>
                        </div>
                        <div className="d-inline-block rounded-5 px-3 py-1 mx-1 my-2 shadow" style={{ border: "2px solid rgba(249, 115, 22, 0.2)" }}>
                            <span className='pera'>LIFE COACH</span>
                        </div>
                        <div className="d-inline-block rounded-5 px-3 py-1 mx-1 my-2 shadow" style={{ border: "2px solid rgba(249, 115, 22, 0.2)" }}>
                            <span className='pera'>PERSONALITY AND CHARACTER DEVELOPER</span>
                        </div>
                        <div className="d-inline-block rounded-5 px-3 py-1 mx-1 my-2 shadow" style={{ border: "2px solid rgba(249, 115, 22, 0.2)" }}>
                            <span className='pera'>HEALER</span>
                        </div>
                    </div>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-12 col-lg-5 p-3 h-100'>
                            <div className='shadow h-100 overflow-hidden rounded-3' style={{ outline: '5px solid #f97316', outlineOffset: "-15px" }}>
                                <img
                                    src={require("../assets/images/4.jpg")}
                                    className='w-100 h-100'
                                    alt=""
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <div className='col-12 col-lg-7 p-3 d-flex align-items-center h-100'>
                            <div className='w-100 h-100'>
                                <div className='pera text-secondary' style={{ lineHeight: '25px' }}>
                                    Accomplished, professionally qualified, and results-oriented
                                    Indian Army Veteran (Colonel) with 21 years of progressively
                                    higher leadership and management skills. Commanded elite
                                    Special Forces and Infantry Regiments with success. Has
                                    extensive expertise in Counter-Terrorism and Counter
                                    Insurgency in active combat zones, as well as considerable
                                    exposure to Strategic Planning and Decision Making, Crisis
                                    Management, and Conflict Resolution.
                                </div>
                                <div className='pera text-secondary my-4' style={{ lineHeight: '25px' }}>
                                    He is a distinguished and honourable person. He has devoted
                                    his life to advancing the interests of the country. It is
                                    commendable that he has given back to the Indian Army by
                                    coaching and mentoring aspiring CDS/SSB candidates.
                                    He served in the Indian army for 21 years. He possesses a wide
                                    variety of knowledge and skills in his area of expertise. Now he
                                    gives his extensive knowledge to prospective candidates. His
                                    only goal is to get the next generation ready to devote their life
                                    to serving the country with honour and respect.
                                    Students are inspired to concentrate on their objectives by
                                    Colonel Rajeev's distinctive teaching approach.
                                </div>
                                <div className='pera rounded-3 p-3 text-center fw-medium shadow' style={{ border: "3px solid rgba(249, 115, 22, 0.2)" }}>
                                    "Push yourself before life pushes you around. Everything you want is on the other side of the fear. Grow over self-imposed limits & sign up for the life you want to live. Take your life to the next level"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default About