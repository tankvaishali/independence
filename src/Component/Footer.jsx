import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaSquareWhatsapp } from 'react-icons/fa6';

function Footer() {
    const phoneNumbers = [
        ["9067665653", "8153827482"],
        ["9998608451", "9033403025"],
        ["9924402005", "8469129147"]
    ];

    const openWhatsApp = (number) => {
        window.open(`https://wa.me/91${number}`, '_blank');
    };

    const makeCall = (number) => {
        window.location.href = `tel:${number}`;
    };

    return (
        <div className='text-center py-5 text-light footerbg'>
            <div className='container'>
                <div style={{ fontFamily: "Sora, Sans-serif" }}>
                    <div className="venue-card text-center text-md-start mb-2" data-aos="zoom-in" data-aos-duration="1200">
                        <h3 className="venue-heading text-center">
                            📍<span className="venue-text fw-bold">Venue</span>
                        </h3>
                        <p className="venue-location text-center mt-4 fw-bold">
                            Sampada Festivity, Kosmada Ring Road, Surat.
                        </p>
                    </div>

                    <p className='h3 p-4 pb-0 mb-3 Call_tittle'>
                        <span className="p-1 px-3 rounded-4" style={{ backgroundColor: "#f17f00" }}>
                            TO BOOK YOUR SEAT CALL NOW
                        </span>
                    </p>

                    <div className="row g-0 g-lg-3 d-flex justify-content-center align-items-center">
                        {phoneNumbers.map((column, colIndex) => (
                            <div key={colIndex} className="col-12 col-md-6 col-lg-3">
                                {column.map((number, rowIndex) => (
                                    <div key={rowIndex} className='bg-light text-dark p-2 fw-bold rounded-3 rounded-top-0 mt-lg-2 mt-1 d-flex align-items-center justify-content-between'>
                                        <div className='text-dark' onClick={() => makeCall(number)} style={{ cursor: 'pointer' }}>
                                            {`+91 ${number}`}
                                        </div>
                                        <div className='d-flex'>
                                            <div
                                                className='text-danger fs-3 d-flex align-items-center justify-content-center me-1 cursor-pointer'
                                                onClick={() => makeCall(number)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <BiSolidPhoneCall />
                                            </div>
                                            <div
                                                className='text-success fs-3 d-flex align-items-center justify-content-center ms-2 cursor-pointer'
                                                onClick={() => openWhatsApp(number)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <FaSquareWhatsapp />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
