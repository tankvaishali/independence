import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { RiArrowRightDoubleLine } from 'react-icons/ri'
 
function Aboutus() {
    return (
        <>
                    <div className=' overflow-hidden'>
                <div className='clientmain'>
                    <div className='container'>
                        <div className="row align-items-center align-content-center justify-content-center py-5 gx-5">
                            <div className=' col-lg-7 col-sm-12  z-2 pb-4' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1800">
                                <div className="independence-badge mb-3">
            <span>⭐ About
Col. Rajeev Bharwan ✨</span>
          </div>
                                <p className='pera pt-3 lh-base' style={{ color: "#b9b8b8", textAlign: "justify" }}>Accomplished, professionally qualified, and results-oriented
Indian Army Veteran (Colonel) with 21 years of progressively
higher leadership and management skills. Commanded elite
Special Forces and Infantry Regiments with success. Has
extensive expertise in Counter-Terrorism and CounterInsurgency in active combat zones, as well as considerable
exposure to Strategic Planning and Decision Making, Crisis
Management, and Conflict Resolution.</p>
                                <div className='pera' style={{ color: "#b9b8b8" }}>
                                    <div className='pb-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> His
only goal is to get the next generation ready to devote their life
to serving the country with honour and respect.</div>
                                    <div className='py-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> It is
commendable that he has given back to the Indian Army by
coaching and mentoring aspiring CDS/SSB candidates.</div>
                                    <div className='py-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> He served in the Indian army for 21 years. He possesses a wide
variety of knowledge and skills in his area of expertise.</div>
                                    <div className='py-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> Now he
gives his extensive knowledge to prospective candidates.</div>
                                    <div className='py-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> His
only goal is to get the next generation ready to devote their life
to serving the country with honour and respect.</div>
                                    
                                </div>
                                 <p className='pera pt-3 lh-base' style={{ color: "#b9b8b8", textAlign: "justify" }}><span className='fs-5'><FaQuoteLeft/></span> PUSH YOURSELF BEFORE LIFE PUSHES YOU AROUND.
EVERYTHING YOU WANT IS ON THE OTHER SIDE OF THE FEAR.
GROW OVER SELF-IMPOSED LIMITS & SIGN UP FOR THE LIFE YOU
WANT TO LIVE. TAKE YOUR LIFE TO THE NEXT LEVEL <span className='fs-5'><FaQuoteRight/></span></p>
                            </div>
                            <div className=" col-lg-5 col-sm-12  pb-4">
                                <div className="client_bg ms-auto" ></div>
                                <div style={{ marginTop: "-400px" }}>
                                    <div className="client_image test-shine" >
                                        <img src={require("../assets/images/4copy.jpg")} className="img-fluid " alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
 
export default Aboutus