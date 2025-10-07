import React from 'react'
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Section2 = () => {
    return (
        <div className='bg-body-secondary'>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="sec-2 d-flex justify-content-around ">
                        <div className='position-relative ' onMouseEnter={() => setindex(1)} onMouseLeave={() => setindex(false)}>
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100" alt="" />
                            <div className={index == 1 ? "d-block" : "d-none"}>
                                <div className='position-absolute bg-white p-3  z-3' style={{ "width": "170px" }}>
                                    <p>Audio</p>
                                    <p>Electronics & Accessories</p>
                                    <p>Gaming</p>
                                    <p>Computer Peripherals</p>
                                    <p>Health & Personal Care</p>
                                    <p>Lapotop Accessories</p>
                                    <p>Mobile Accessory</p>
                                    <p>PowerBank</p>
                                    <p>Smart Home automation</p>
                                    <p>Smart Wearables</p>
                                </div>
                            </div>
                        </div>



                        <div className="img">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" alt="" />
                        </div>

                        <div className="img">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/a22a213ca6221b65.png?q=100" alt="" />
                        </div>

                        <div className='position-relative ' onMouseEnter={() => setindex(3)} onMouseLeave={() => setindex(false)}>
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" alt="" />
                            <div className={index == 3 ? "d-block" : "d-none"}>
                                <div className='position-absolute bg-white p-3  z-3' style={{ "width": "170px" }}>
                                    <p>Mem's Top Wear</p>
                                    <p>Women Ethnic</p>
                                    <p>Men Footwear</p>
                                    <p>Women Footwear</p>
                                    <p>Women Westrern</p>
                                    <p>Kids</p>
                                    <p>Winter</p>
                                    <p>Bags,Suitcases & Luggage</p>
                                    <p>Essentials</p>
                                </div>
                            </div>
                        </div>


                        <div className='position-relative ' onMouseEnter={() => setindex(2)} onMouseLeave={() => setindex(false)}>
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100" alt="" />
                            <div className={index == 2 ? "d-block" : "d-none"}>
                                <div className='position-absolute bg-white p-3  z-3' style={{ "width": "170px" }}>
                                    <p>Home Furnishings</p>
                                    <p>Furniture</p>
                                    <p>Kitchen & Dining</p>
                                    <p>Bedroom Furniture</p>
                                    <p>Home Decor</p>
                                    <p>Clwaning & Bath</p>
                                    <p>Kiids Furniture</p>
                                    <p>Space Saving Furniture</p>
                                </div>
                            </div>
                        </div>

                        <div className="img">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100" alt="" />
                        </div>

                        <div className="img">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100" alt="" />
                        </div>
                        <div className="img">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section2
