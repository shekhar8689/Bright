import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Hero() {
    return (
        <div className=' grid lg:grid-cols-2  px-9 py-14 gap-4 bg-slate-200 rounded-t-2xl'>
            {/* <div className='bg-green-300 text-center lg:text-left text-black'>
                <div className=''>
                    <h3 className='text-2xl mb-2 font-semibold'>Enjoy the benefits of purchasing solar panels</h3>
                    <h1 className='text-4xl text-yellow-400 mb-7 font-semibold  uppercase'>Without having to buy them!</h1>
                    <h5 className='mb-7 text-lg'>We invest in the photovoltaic system for you.</h5>
                    <h5 className='mb-12 text-lg'>Reduce your electricity bill by <span className='font-semibold'> up to 98% </span> and only pay one monthly fee for the energy you use.</h5>
                </div>
                <div className='flex mb-7 justify-center lg:justify-start'>
                    <div className='flex gap-10 '>
                        <div>
                            <span className='text-3xl font-semibold'>+4,000</span>
                            <p>Subscribers</p>
                        </div>
                        <div>
                            <span className='text-3xl font-semibold'>+20</span>
                            <p>State</p>
                        </div>
                        <div>
                            <span className='text-3xl font-semibold'>+60</span>
                            <p>Cities</p>
                        </div>
                    </div>

                </div>
                <div>
                    <button className='text-white text-lg bg-purple-900 rounded-lg px-10 py-2'>Request a quote</button>
                </div>
            </div> */}

            <div className='bg-green-300 text-black'>
                <div className='bg-red-600 place-item-center'>
                    <h3 className='text-2xl mb-2 font-semibold'>Enjoy the benefits of purchasing solar panels</h3>
                    <h1 className='text-4xl text-yellow-400 mb-7 font-semibold uppercase'>Without having to buy them!</h1>
                    <h5 className='mb-7 text-lg'>We invest in the photovoltaic system for you.</h5>
                    <h5 className='mb-12 text-lg'>
                        Reduce your electricity bill by <span className='font-semibold'>up to 98%</span> and only pay one monthly fee for the energy you use.
                    </h5>
                </div>
                <div className='flex mb-7 justify-center lg:justify-start'>
                    <div className='flex gap-10'>
                        <div>
                            <span className='text-3xl font-semibold'>+4,000</span>
                            <p>Subscribers</p>
                        </div>
                        <div>
                            <span className='text-3xl font-semibold'>+20</span>
                            <p>State</p>
                        </div>
                        <div>
                            <span className='text-3xl font-semibold'>+60</span>
                            <p>Cities</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center lg:justify-start'>
                    <button className='text-white text-lg bg-purple-900 rounded-lg px-10 py-2'>Request a quote</button>
                </div>
            </div>
            <div className='bg-orange-700'>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block h-full"
                            src={"./src/assets/logo.svg"}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                          <p>hi</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-full "
                            src={"./src/assets/logo.svg"}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <p>hi</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
}

export default Hero