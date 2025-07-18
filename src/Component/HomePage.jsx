import React from 'react'
import Host from './Host'
import TicketsCard from './TicketsCard.jsx'
import Footer from './Footer.jsx'
import Sponser from './Sponser.jsx'
import Photos from './Photos.jsx'
import Aboutus from './Aboutus.jsx'

function HomeCarousel() {
    return (
        <>
            <div className="carobgimg overflow-hidden fstyle w-100">
                <div className='container-lg'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-6 py-5 lh-lg mx-auto  col-11 text-light animate__animated animate__bounceInLeft animate__slower d-flex  align-items-center'>
                            <div className='mx-auto'>
                                <div className='text-center'>
                                    <img src={require("../assets/images/2.png")} alt="" className='img-fluid  ' width={150} />
                                </div>
                                <div className='mt-3'>
                                    <img src={require("../assets/images/Social_Army_poster_july_2025_7_-_Copy-removebg-preview.png")} className='img-fluid' alt="" />
                                </div>
                                {/* <h1 className=' pt-4 fw-bold  text-center animate__animated tricolor-text'>आज़ादी का रंग, फौजी के संग 2.0 </h1> */}
                            </div>
                        </div>
                        <div className='col-md-6 col-11 mx-auto animate__animated animate__bounceInRight animate__slower text-center' style={{ marginTop: 'auto' }}>
                            <img src={require('../assets/images/WhatsApp_Image_2025-07-18_at_12.14.20_fa460f97-removebg-preview.png')} alt="" className='img-fluid homepage_image' />
                        </div>
                    </div>
                </div>
            </div>

            <Host />
            <Aboutus/>
            <Photos />
            <TicketsCard />
            <Sponser />
            <Footer />

        </>
    )
}

export default HomeCarousel