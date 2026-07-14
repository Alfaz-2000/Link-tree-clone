import React from 'react'

const Generate = () => {
  return (
    <div className='bg-purple-700 min-h-screen grid grid-cols-2'>
        <div className="col1 flex justify-center items-center flex-col text-gray-900">
          <div className="flex flex-col gap-5 my-8">
            <h1 className='font-bold text-4xl'>Create Your BitTree</h1>
          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 1: Claim your handle</h2>
            <div className="mx-4">
              <input className='px-4 py-2 my-2 focus:outline-purple-950 rounded-full bg-white' type="text" placeholder='Choose your handle' />
              
            </div>
          </div>
          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 2: Add link's</h2>
            <div className="mx-4">
              <input className='px-4 py-2 my-2 mx-4 focus:outline-purple-950 rounded-full bg-white' type="text" placeholder='Enter link text' />
              <input className='px-4 py-2 my-2 focus:outline-purple-950 rounded-full bg-white' type="text" placeholder='Enter link' />
              <button className=' p-5 py-2 mx-2 bg-slate-800 text-white font-bold rounded-3xl'>Add Link</button>
            </div>
          </div>
          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 3: Add Your Picture</h2>
            <div className="mx-4 flex flex-col">
              <input className='px-4 py-2 my-2 focus:outline-purple-950 rounded-full bg-white' type="text" placeholder='Add Your Picture Link' />
                <button className=' p-5 py-2 mx-2 my-5 w-fit bg-slate-800 text-white font-bold rounded-3xl'>Create Your BitLink</button>
            </div>
          </div>
          </div>
        </div>
        <div className="col2 w-full h-screen bg-purple-700">
            <img className='h-full object-contain' src="/generate.png" alt="generate-image" />
        </div>
      
    </div>
  )
}

export default Generate
