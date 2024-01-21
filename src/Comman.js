import React from 'react'
import { NavLink } from 'react-router-dom'

function Comman(props) {
    return (
        <>
            <div id='header' className='d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-6 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1 className='brand-title'>{props.brandTitle}<strong className='brand-name'> {props.brandName}</strong></h1>
                                    <h2 className='my-3 brand-desc'>
                                        {props.brandDesc}
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn btn-primary btn-get-started'>{props.btnTitle}</NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img ms-auto'>
                                    <img src={props.imgHomeHeader} className='img-fluid animated' alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comman
