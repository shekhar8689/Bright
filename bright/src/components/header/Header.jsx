import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

function header() {
    return (
        <div className='bg-008080 flex justify-between items-center p-2 px-4  '>
            <div className='flex items-center gap-4'>
                <div>
                    <img className='h-10 items-center py-1  ' src={'./src/assets/logo.svg'} alt="" />
                </div>
                <div className=' hidden lg:block'>
                    <ul className='flex gap-4 text-white text-2xl'>
                        <li>Coverage</li>
                        <li>Job Board</li>
                        <li>Us</li>
                        <li className=''>
                            <NavDropdown className=' relative' title="Solutions" id="nav-dropdown">
                                <NavDropdown.Item className='flex bg-gray-600' eventKey="4.1">Bright Home</NavDropdown.Item>
                                <NavDropdown.Item className='flex' eventKey="4.2">Bright Business</NavDropdown.Item>
                                <NavDropdown.Item className='flex' eventKey="4.3">Bright Industry</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </li>
                        <li className=''>
                            <NavDropdown className='  relative' title="Further" id="nav-dropdown">
                                <NavDropdown.Item className='flex bg-gray-600' eventKey="4.1">Bright Home</NavDropdown.Item>
                                <NavDropdown.Item className='flex' eventKey="4.2">Bright Business</NavDropdown.Item>
                                <NavDropdown.Item className='flex' eventKey="4.3">Bright Industry</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='hidden lg:block'>
            <div className='flex gap-4 items-center '>
                <img className='h-10 rounded-full object-cover' src={'./src/assets/whatsapp.svg'} alt="" />
                <p className='text-blue-700  text-xl px-3'>Log in</p>
                <button className='text-white l text-xl px-3'>Quote</button>
            </div>
            </div>
            <div className='lg:hidden' >
                <img src="" alt="B" />
            </div>
        </div>
    )
}

export default header