import React, { useState } from 'react'
import Slider from './Slider'
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Last from './Last';
import Footer from './Footer';

const Home = () => {

    let [index, setindex] = useState(false);

    return (
        <>
            {/* section 1 */}
            <div className='bg-body-secondary'>
                <div className='container-fluid my-2 bg-light'>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div className="img">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
                        </div>
                        <div className="search w-50 mb-1">
                            <input type="search" placeholder='search' className='ms-5  mt-1 form-control' />
                        </div>
                        <div className="login">
                            <ul className='list-unstyled'>
                                <li><Link to={"/login"} className='text-decoration-none text-black'>Login</Link></li>
                            </ul>
                        </div>
                        <div className="card1">
                            <ul className='list-unstyled'>
                                <li><Link className='text-decoration-none text-black' to={"/card"}>Card</Link></li>
                            </ul>
                        </div>
                        <div className="login">
                            <ul className='list-unstyled'>
                                <li> <Link to={"/Becomeaseller"} className='text-decoration-none text-black '>Become a seller</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* section 2 */}
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

                {/* section 3 */}
                <Slider />

                {/* scetion 4 */}
                <div className="container-fluid background">
                    <div className='mt-3'><h4><b className='ms-3'>Beauty,Food,Toys,&More</b></h4></div>
                    <div className="container d-flex align-items-center justify-content-between image">
                        <div className='image space'>
                            <img src="https://rukminim1.flixcart.com/image/240/240/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=60" alt="" />
                            <p className='mt-4'>Coffee Powder <br /><b>Upto 80% Off</b></p>
                        </div>

                        <div className='image space'>
                            <img src="https://rukminim1.flixcart.com/image/240/240/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=60" alt="" />
                            <p className='mt-4'>Top Selling Stationery <br /><b>From ₹49</b></p>
                        </div>

                        <div className='image space'>
                            <img src="https://rukminim1.flixcart.com/image/240/240/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=60" alt="" />
                            <p className='mt-4'>Dry Fruits <br /><b>Upto 75% Off</b></p>
                        </div>

                        <div className='image space'>
                            <img src="https://rukminim1.flixcart.com/image/240/240/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=60" alt="" />
                            <p className='text'>Geared Cycles <br /><b>Upto 70% Off</b></p>
                        </div>

                        <div className='image space'>
                            <img src="https://rukminim1.flixcart.com/image/240/240/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=60" alt="" />
                            <p className='mt-2'>Soft Toys<br /><b>Upto 70% Off</b></p>
                        </div>
                    </div>
                </div>

                {/* section 5 */}
                <div className="container-fluid background">
                    <div className='mt-3'><h4><b className='ms-3'>Top Deals On TVs & Appliances</b></h4></div>
                    <div className="container d-flex align-items-center justify-content-between image">
                        <div className='image space'>
                            <img src="https://rukminim2.flixcart.com/image/240/240/xif0q/refrigerator-new/n/v/q/-original-imahdzzyngnhfadz.jpeg?q=60" alt="" />
                            <p className='mt-4'>Godrej Refrigerators <br /><b>From ₹7,240</b></p>
                        </div>

                        <div className='image space'>
                            <img src="https://rukminim2.flixcart.com/image/240/240/xif0q/washing-machine-new/v/8/l/-original-imahf5wf99xxavtt.jpeg?q=60" alt="" />
                            <p className='mt-4'>Semi Automatic Washingmachine <br /><b>Buynow</b></p>
                        </div>

                        <div className='image space'>
                            <img src="https://rukminim2.flixcart.com/image/240/240/xif0q/washing-machine-new/n/g/y/-original-imah2d6gj2butauy.jpeg?q=60" alt="" />
                            <p className='mt-4'>Front Load Washingmachine <br /><b>Buy now</b></p>
                        </div>

                        <div className='image space'>
                            <img src="https://rukminim2.flixcart.com/image/240/240/xif0q/refrigerator-new/s/q/i/-original-imahf8wv9j335gee.jpeg?q=60" alt="" />
                            <p className='mt-4'>Double Door Refrigerators <br /><b>From ₹16,999</b></p>
                        </div>

                        <div className='image space'>
                            <img src="https://rukminim2.flixcart.com/image/240/240/xif0q/refrigerator-new/a/s/f/-original-imah4c6p6gzzh9bz.jpeg?q=60" alt="" />
                            <p className='mt-4'>Samsung Refrigerators <br /><b>From ₹12,999</b></p>
                        </div>
                    </div>
                </div>

                {/* section 6 */}
                <div className="container-fluid background">
                    <div className='mt-3'><h4><b className='ms-3'>Best of Electronics</b></h4></div>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between image space">
                            <div className='image'>
                                <img src="https://rukminim2.flixcart.com/image/240/240/kb9ou4w0/tv-entertainment-unit/f/x/h/particle-board-za0022wh-barewether-white-with-walnut-original-imafsnnntmvsysap.jpeg?q=60" alt="" />
                                <p className='mt-4'>Tv Units <br /><b>From ₹4900</b></p>
                            </div>

                            <div className='image space'>
                                <img src="https://rukminim2.flixcart.com/image/240/240/xif0q/sofa-bed/3/q/4/-original-imagm9ckhma9u8a3.jpeg?q=60" alt="" />
                                <p className='mt-4'>Sofa Beds <br /><b>From ₹4900</b></p>
                            </div>

                            <div className='image space'>
                                <img src="https://rukminim2.flixcart.com/image/240/240/jm9hfgw0/bed/h/g/g/king-na-rosewood-sheesham-bkwl05nhbs0401d1p-flipkart-perfect-original-imaf97cwhvgnwg95.jpeg?q=60" alt="" />
                                <p className='mt-4'>Beds <br /><b>From ₹4900</b></p>
                            </div>

                            <div className='image space'>
                                <img src="https://rukminim2.flixcart.com/image/240/240/xif0q/sofa-set/x/o/p/blue-cotton-3-2-1-1-sofa-set-blue-amorini-aqua-blue-original-imagwgmtf5gu4ycc.jpeg?q=60" alt="" />
                                <p className='mt-4'>Sofas Set <br /><b>From ₹4900</b></p>
                            </div>

                            <div className='image space'>
                                <img src="https://rukminim2.flixcart.com/image/240/240/xif0q/office-study-chair/z/t/2/1-teak-sagun-58-42-js-29-beaatho-121-92-original-imagrwgshgp2bhwv.jpeg?q=60" alt="" />
                                <p className='mt-4'>Office Study Chairs<br /><b>From ₹2300</b></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* scetion 7 */}
                <div className="d-flex">
                    <div className="container mt-4 d-flex gap-2 ">
                        {/* card 1 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/t-shirt/q/i/t/xl-6002-never-gm-trends-original-imahara8zfcvzjjj.jpeg?q=60"
                                className="card-img-top card-img"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/t-shirt/q/i/t/xl-6002-never-gm-trends-original-imahara8zfcvzjjj.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* card 3 */}

                    <div className="container mt-4 d-flex gap-2">
                        <div className="card" style={{ width: "13rem", }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/shirt/w/j/x/3xl-met-veb-formal-s-grey-m-jadouncreation-original-imah5bzp7dqyb4zp.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/shirt/w/j/x/3xl-met-veb-formal-s-grey-m-jadouncreation-original-imah5bzp7dqyb4zp.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-4 d-flex gap-2">
                        {/* card 5 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/t-shirt/q/i/t/xl-6002-never-gm-trends-original-imahara8zfcvzjjj.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                        {/* card 6 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/t-shirt/q/i/t/xl-6002-never-gm-trends-original-imahara8zfcvzjjj.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                    </div>
                </div><br />


                <div className="d-flex">
                    <div className="container mt-4 d-flex gap-2">
                        {/* card 1 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/t-shirt/q/i/t/xl-6002-never-gm-trends-original-imahara8zfcvzjjj.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/t-shirt/q/i/t/xl-6002-never-gm-trends-original-imahara8zfcvzjjj.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* card 3 */}

                    <div className="container mt-4 d-flex gap-2">
                        <div className="card" style={{ width: "13rem", }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/shirt/w/j/x/3xl-met-veb-formal-s-grey-m-jadouncreation-original-imah5bzp7dqyb4zp.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/shirt/w/j/x/3xl-met-veb-formal-s-grey-m-jadouncreation-original-imah5bzp7dqyb4zp.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-4 d-flex gap-2">
                        {/* card 5 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/t-shirt/q/i/t/xl-6002-never-gm-trends-original-imahara8zfcvzjjj.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                        {/* card 6 */}
                        <div className="card" style={{ width: "13rem" }}>
                            <img
                                src="https://rukminim2.flixcart.com/image/420/420/xif0q/t-shirt/q/i/t/xl-6002-never-gm-trends-original-imahara8zfcvzjjj.jpeg?q=60"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Men's T-Shirts</h5>
                                <p className="card-text text-success">
                                    In Focus Now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Last />
            <Footer />
        </>
    )
}
export default Home
