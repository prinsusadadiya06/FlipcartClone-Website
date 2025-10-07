import React, { useState } from 'react'
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Section1 = () => {
    return (

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
        </div>
    )
}

export default Section1
