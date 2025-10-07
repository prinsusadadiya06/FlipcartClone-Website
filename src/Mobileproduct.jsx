import React from 'react'
import { cards } from './Card1'
import { Link } from 'react-router-dom'

const Mobileproduct = () => {
    let mobiles = cards.map((v, i) => {


        return (
            <>
                <Link to={"/card/Singlecomponent"} style={{"textDecoration":"none", "color":"black"}}>
                    <div className="col-12 bg-white rounded-3">
                        <div className="d-flex p-4">
                            <div>
                            <img src={v.url} alt=""/>
                        </div>
                            <div className="w-50 mx-5">
                                <h2>{v.title}</h2>
                                <p>{v.body}</p>
                            </div>
                            <div>
                                <h2 className=''>{v.price}</h2>
                            </div>
                        </div>
                    </div><br />
                </Link >
            </>
        )

    })
    return (
        <div className="container-fluid bg-body-secondary">
            <div className="container">
                {mobiles}
            </div>
        </div>
    )
}

export default Mobileproduct
