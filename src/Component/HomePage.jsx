import React from 'react'

// import Titlecom from '../HOC/Titlecom'
import { Link } from 'react-router-dom'
import Host from './Host'
import TicketsCard from './TicketsCard.jsx'
import Footer from './Footer.jsx'
import Sponser from './Sponser.jsx'
import Photos from './Photos.jsx'
import EventGift from './Aboutus.jsx'
import About from './Aboutus.jsx'

function HomeCarousel() {
    return (
        <>
            <div className="carobgimg overflow-hidden fstyle w-100">
                <div className='container-lg'>
                    <div className='row align-items-center pt-5'>
                        <div className='col-md-7 lh-lg mx-auto  col-11 text-light animate__animated animate__bounceInLeft animate__slower d-flex  align-items-center'>
                            <div className=''>
                            <div className='text-center '>
                                <img src={require("../assets/images/2.png")} alt="" className='img-fluid  ' width={150}/>
                            </div>
                                <h1 className=' pt-4 fw-bold  text-center animate__animated tricolor-text'>आज़ादी का रंग, फौजी के संग  
                                2.0 </h1>
                               
                            </div>
                        </div>
                        <div className='col-md-5 col-11 mx-auto animate__animated animate__bounceInRight animate__slower text-center text-lg-start' style={{ marginTop: 'auto' }}>
                            <img src={require('../assets/images/fauji png.png')} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
    
<Host/>
<Photos/>
<TicketsCard/>
<Sponser/>
{/* <About/> */}
<Footer/>

        </>
    )
}

export default HomeCarousel