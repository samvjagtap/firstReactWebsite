import React from 'react'
import Card from './Card'
import sData from './sData'

function Service() {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            {
                                sData.map((curVal, i) => {
                                    return <Card key = {i} img = {curVal.img} title = {curVal.title} desc = {curVal.desc} btnText = {curVal.btnText} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
