import React from 'react'

function Card(props) {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto g-5'>
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <a href={'/'} className="btn btn-primary">{props.btnText}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
