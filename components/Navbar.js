import React from 'react'


const Navbar = () => {
    return (
        <nav className='flex justify-between bg-white w-[80vw] fixed  top-10 right-[10] rounded-full p-5 px-7'>
            <div className="logo flex gap-20 items-center">
                {/* <img className='w-28 h-16' src="/logo.png" alt="" /> */}
                <ul className='flex gap-10'>
                    <li>Products</li>
                    <li>Templates</li>
                    <li>Marketplace</li>
                    <li>Learn</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="flex gap-3">
                <button className='login bg-gray-400 p-4 rounded-lg'>Login</button>
                <button className='signup bg-gray-900 text-white rounded-full p-4'>Sign Up Free</button>
            </div>
        </nav>
    )
}

export default Navbar
