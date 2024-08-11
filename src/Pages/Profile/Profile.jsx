import React, { useContext } from 'react'
import { Usercontext } from '../../Context/User.context'

export default function Profile() {
    const {tokenInfo} = useContext(Usercontext)
   const {id , firstName , lastLogin , username , phone , originalEmail } = tokenInfo
    return (
        <>
        <section className='min-h-[100vh] pt-[70px] p-3 flex justify-center items-center bg-black'>
        <div className="container grid grid-cols-12 text-white justify-center items-center">
            <div className='col-span-12 lg:col-span-8 flex flex-col justify-center gap-2  text-center'>
            <h1 className='font-extrabold mt-2 text-4xl'>Welcome {firstName} To Your Profile with GOLDADY </h1>
            <p className='font-semibold text-2xl'>Some information for your account with us </p>
            <ul>
                <li>ID : #{id}</li>
                <li>User name : {username}</li>
                <li>last Login time : {lastLogin}</li>
                <li>phone number : {phone}</li>
                <li>Mail : {originalEmail.email}</li>
            </ul>
            </div>
            <div className='col-span-12 lg:col-span-4 flex justify-center items-center'>
                <picture>
                    <img src="https://cdn.goldady.com/images/front-end/1708167707.webp" className='w-[500px] ' alt="goldady logo" />
                </picture>
            </div>
        </div>
        </section>
        </>
    )
}
