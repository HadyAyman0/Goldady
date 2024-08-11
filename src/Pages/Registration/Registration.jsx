import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { Usercontext } from '../../Context/User.context'
import * as Yup from 'yup'

export default function Registration() {
    const { SendData  } = useContext(Usercontext)
    const navigate = useNavigate()
    const EndpointPath = "auth/register"
    const PhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
    const validationSchema = Yup.object({
        first_name: Yup.string().required(" First name is required ").min(3, "First name should be at leaset 3 char").max(16, "First name should be max 16 char"),
        last_name: Yup.string().required("Last name is required ").min(3, "Last name should be at leaset 3 char").max(16, "Last name should be max 16 char"),
        phone: Yup.string().required("Phone number is required ").matches(PhoneRegex, "phone number is not vaild"),
        email: Yup.string().required("Email is required ").email("email should be follow email syntax"),
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required ").matches(passwordRegex, "Your password must include at least one uppercase letter, one lowercase letter, one symbol, and one number."),
        password_confirmation: Yup.string().required("password_confirmation is required ").oneOf([Yup.ref("password")], "passsowrd and password_confirmation should be the same")
    })
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            username: "",
            password: "",
            password_confirmation: ""
        },
        validationSchema,
        onSubmit: function (values) {
            SendData({ EndpointPath, values , onSuccess: () => setTimeout(() => {
                navigate('/auth/login') 
            }, 2000) })
        }
    })

    return (
        <>
            <section className=' min-h-[100vh] pt-[70px] p-3 flex justify-center items-center backroundImage    '>
                <div className=" container  shadow-2xl text-white flex flex-col items-center   p-5  rounded-2xl border-[2px] gap-3   md:max-w-[55%]  ">
                    <h1 className='font-extrabold text-3xl '>Sign up  </h1>
                    <p className='text-center'>Build your gold wallet from the comfort of your home</p>
                    <form onSubmit={formik.handleSubmit} className=' text-white p-3 flex flex-col gap-3 w-full' >
                        <div className='flex gap-2'>
                            <div className='w-full '>
                                <TextField
                                label="First Name" onBlur={formik.handleBlur} type='text' name='first_name' value={formik.values.first_name} onChange={formik.handleChange} className='custom-textfield' />
                                {formik.errors.first_name && formik.touched.first_name ? <div>
                                    <p className='mt-3 text-red-500 font-semibold text-center'> * {formik.errors.first_name}</p>
                                </div> : ""}  
                            </div>
                            <div className='w-full'>
                                <TextField label="Last Name" onBlur={formik.handleBlur} type='text' name='last_name' value={formik.values.last_name} onChange={formik.handleChange} className='custom-textfield' />
                                {formik.errors.last_name && formik.touched.last_name ? <div>
                                    <p className='mt-3 text-red-500 font-semibold text-center'> * {formik.errors.last_name}</p>
                                </div> : ""}
                            </div>
                        </div>
                        <div>
                            <TextField label="phone" onBlur={formik.handleBlur} type='tel' name='phone' value={formik.values.phone} onChange={formik.handleChange} className='custom-textfield'/>
                            {formik.errors.phone && formik.touched.phone ? <div>
                                    <p className='mt-3 text-red-500 font-semibold '> * {formik.errors.phone}</p>
                                </div> : ""}
                        </div>
                        <div >
                            <TextField label="Email" onBlur={formik.handleBlur} type='email' name='email' value={formik.values.email} onChange={formik.handleChange} className='custom-textfield' />
                            {formik.errors.email && formik.touched.email ? <div>
                                    <p className='mt-3 text-red-500 font-semibold '> * {formik.errors.email}</p>
                                </div> : ""}
                        </div>
                        <div >
                            <TextField label="User Name" onBlur={formik.handleBlur} type='text' name='username' value={formik.values.username} onChange={formik.handleChange} className='custom-textfield' />
                            {formik.errors.username && formik.touched.username ? <div>
                                    <p className='mt-3 text-red-500 font-semibold '> * {formik.errors.username}</p>
                                </div> : ""}
                        </div>
                        <div>
                            <TextField label="Password" onBlur={formik.handleBlur} type='password' name='password' value={formik.values.password} onChange={formik.handleChange} className='custom-textfield' />
                            {formik.errors.password && formik.touched.password ? <div>
                                    <p className='mt-3 text-red-500 font-semibold '> * {formik.errors.password}</p>
                                </div> : ""}
                        </div>
                        <div>
                            <TextField label="password_confirmation" onBlur={formik.handleBlur} type='password' name='password_confirmation' value={formik.values.password_confirmation} onChange={formik.handleChange} className='custom-textfield' />
                            {formik.errors.password_confirmation && formik.touched.password_confirmation ? <div>
                                    <p className='mt-3 text-red-500 font-semibold '> * {formik.errors.password_confirmation}</p>
                                </div> : ""}
                        </div>
                        <div className='flex flex-col gap-2 text-center lg:flex-row lg:justify-between items-center'>
                            <p>Already have an account ? <Link className='underline font-extrabold' to="/"> Login now </Link>  </p>
                            <Button type='submit' variant='contained' >Register</Button>
                        </div>
                    </form>
                </div>


            </section>
        </>
    )
}
