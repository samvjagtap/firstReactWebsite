import React, { useState } from 'react'

function Contact() {
    const [data, setData] = useState({
        fullname : '',
        email : '',
        mobile : '',
        msg : ''
    })
    const fOnChangeEve = (e) => {
        const {name, value} = e.target
        setData((prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }
    const fSubmitContactForm = (e) => {
        e.preventDefault()
        alert(`hello my name is ${data.fullname} my mobile no is ${data.mobile} my email is ${data.email} my message is ${data.msg}`);
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-6 mx-auto'>
                        <form onSubmit={fSubmitContactForm}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input name="fullname" value={data.fullname} onChange={fOnChangeEve} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input name="email" value={data.email} onChange={fOnChangeEve} type="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile</label>
                                <input name="mobile" value={data.mobile} onChange={fOnChangeEve} type="tel" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea type="text" name='msg' value={data.msg} onChange={fOnChangeEve} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
