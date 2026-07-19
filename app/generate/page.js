"use client"
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

    const searchParams = useSearchParams()

    // const [link, setlink] = useState("")
    // const [linktext, setLinktext] = useState("")
    const [links, setLinks] = useState([{link:"",linktext:""}])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const handleChange = (index, link, linktext)=>{
        setLinks((initialLinks)=>{
           return initialLinks.map((item, i)=>{
                if(i==index){
                    return {link,linktext}
                }
                else{
                    return item
                }
            })

            
        })

        }
    
    const addLink = () =>{
        setLinks(links.concat([{link:"",linktext:""}]))
    }

    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            links,
            handle,
            pic,
            desc
        });

        console.log(raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if(result.success){
            toast.success(result.message)
            setLinks([{link:"",linktext:""}])
            sethandle("")
            setpic("")
            setdesc("")
        }
        else{
            toast.error(result.message)
        }
        // bleow code helps to clear filds of form after submitting
    }

    return (
        <div className='bg-purple-700 min-h-screen grid grid-cols-2'>

          
            <div className="col1 flex justify-center items-center flex-col text-gray-900">
                <div className="flex flex-col gap-5 my-8">
                    <h1 className='font-bold text-4xl'>Create Your BitTree</h1>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 1: Claim your handle</h2>
                        <div className="mx-4">
                            <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} className='px-4 py-2 my-2 focus:outline-purple-950 rounded-full bg-white' type="text" placeholder='Choose your handle' />

                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 2: Add link's</h2>
                        {links && links.map((item, index)=>{
                            return <div key={index} className="mx-4">
                            <input value={item.linktext || ""} onChange={e=>{handleChange(index, item.link, e.target.value )}} className='px-4 py-2 my-2 mr-4 focus:outline-purple-950 rounded-full bg-white' type="text" placeholder='Enter link text' />
                            <input value={item.link || ""} onChange={e=>{handleChange(index, e.target.value, item.linktext)}} className='px-4 py-2 my-2 focus:outline-purple-950 rounded-full bg-white' type="text" placeholder='Enter link' />
                        </div>
                        })}
                        <button onClick={()=>addLink()} className=' p-5 py-2 mx-2 bg-slate-800 text-white font-bold rounded-3xl'> + Add Link</button>
                        
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 3: Add Your Picture</h2>
                        <div className="mx-4 flex flex-col">
                            <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className='px-4 py-2 my-2 focus:outline-purple-950 rounded-full bg-white' type="text" placeholder='Add Your Picture Link' />
                            <input value={desc || ""} onChange={e=>{setdesc(e.target.value)}} className='px-4 py-2 my-2 focus:outline-purple-950 rounded-full bg-white' type="text" placeholder='Enter short Description' />

                            {/* disabling a create btn no empty entry should be added to db and by adding this validation here this called front-end validation but you do it in the back-end too */}
                            <button disabled={pic === "" || handle === "" || links.length === 0 || links[0].linktext == ""} onClick={()=>{submitLinks()}} className=' disabled:bg-slate-600 p-5 py-2 mx-2 my-5 w-fit bg-slate-800 text-white font-bold rounded-3xl'>Create Your BitLink</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-purple-700">
                <img className='h-full object-contain' src="/generate.png" alt="generate-image" />
                  <ToastContainer />
            </div>

        </div>
    )
}

export default Generate
