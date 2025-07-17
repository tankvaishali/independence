import React from 'react';
import { LuPointer } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function TicketsCard() {
    return (
        <>
            <div className="ticket_bg py-5">
                <div className="container">
                    <div className="row g-3 py-2 py-lg-4 d-flex align-items-center justify-content-center">
                        <div className="col-12 col-lg-6 ">
                            <div className="h-100 shadow bg-white rounded-4 p-3 d-flex flex-column justify-content-between">
                                <div className='text-center rounded p-3 py-4 text-white' style={{ backgroundColor: "rgb(0, 66, 20)" }}>
                                    <div className='fw-bold display-6'>
                                        Token Amount
                                    </div>

                                    <div className='fw-bold display-6'>
                                        ₹ 100
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <Link to={"/buynow"} className='text-decoration-none bg-white'>
                                        <button className='buttons w-100 btn ' type="button" style={{ fontFamily: "Sora, Sans-serif", fontWeight: 700 }}><span className='fs-5'><LuPointer /></span> Register Now</button>
                                    </Link>
                                </div>
                                <div className='mt-3 fw-bold text-center text-secondary' style={{ fontSize: "12px" }}>નોંધ - જે પણ રાશિ એકત્રિત થશે, તે સંપૂર્ણ રીતે શહીદ પરિવારને સન્માનરૂપે અર્પણ કરવામાં આવશે.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketsCard;