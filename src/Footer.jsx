import React from 'react'

const Footer = () => {
    let white={
        color:"white",
        fontSize:"11px"
    }
    let gray={
        color:'gray',
        fontSize:"12px"
    }
    return (
        <div className="container-fluid bg-black">
            <div className="container  py-4" style={white}>
                <div className='d-flex justify-content-between '>
                    <div className="f1" >
                        <h6 style={gray}>ABOUT</h6>
                        <p className='my-0'>Contact Us</p>
                        <p className='my-0'>About Us</p>
                        <p className='my-0'>Careers</p>
                        <p className='my-0'>FlipKard Stories</p>
                        <p className='my-0'>Press</p>
                        <p className='my-0'>Corporet</p>
                        <p className='my-0'>Information</p>
                    </div>
                    <div className="f2">
                        <h6 style={gray}>GROUP COMPANIES</h6>
                        <p className='my-0'>Myntra</p>
                        <p className='my-0'>Cleartrip</p>
                        <p className='my-0'>Shopsy</p>
                    </div>
                    <div className="f3">
                        <h6 style={gray}>HELP</h6>
                        <p className='my-0'>Payments</p>
                        <p className='my-0'>Shipping</p>
                        <p className='my-0'>Cancellation & Return</p>
                        <p className='my-0'>FAQ</p>
                    </div>
                    <div className="f4">
                        <h6 style={gray}>CONSUMER POLICY</h6>
                        <p className='my-0'>Cancellation & Return</p>
                        <p className='my-0'>Terms Of Use </p>
                        <p className='my-0'>Security</p>
                        <p className='my-0'>Privacy</p>
                        <p className='my-0'>Sitemap</p>
                        <p className='my-0'>Grievance Redressal</p>
                        <p className='my-0'>EPR Compliance</p>
                    </div>
                    <div className="hr"><hr /></div>
                    <div className="f5">
                        <h6 style={gray}>Mail Us:</h6>
                        <p className='my-0'>Flipkard Internet Private Limited,<br />Buildings Alyssa,begonia & <br />
                            Clove Embassy Tech Village,<br /> Outer Ring Road , Devarabeesanahalli Village,
                            Bengaluru, 560103,<br />Karnatala,India</p>
                        {/* <h6 style={gray}>Social:</h6>
                    <div className="flex"></div> */}
                    </div>
                    <div className="f6">
                        <h6 style={gray}>Register Office Address:</h6>
                        <p className='my-0'>Flipkard Internet Private Limited,<br />Buildings Alyssa,begonia & <br />
                            Clove Embassy Tech Village,<br /> Outer Ring Road , Devarabeesanahalli Village,
                            Bengaluru, 560103,<br />Karnatala,India <br />CIN : U51109KA2012PTC066107 <br />Telephone: 044-45614700 / 044-67415800</p>
                    </div>
                </div>
                <hr className='text-white'/>
                <div className="d-flex text-white justify-content-between">
                    <div>Become a Seller</div>
                    <div>Advertise</div>
                    <div>Gift Cards</div>
                    <div>Help Center</div>
                    <div>&copy; 2007-2025 Filpkard.com</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Footer