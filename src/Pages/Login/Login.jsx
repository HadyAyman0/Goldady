import React, { useContext } from 'react'
import { Button, Input, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import UserProvider, { Usercontext } from '../../Context/User.context'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
    const {SendData} = useContext(Usercontext)
    const EndpointPath = "auth/login"
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required ").matches(passwordRegex, "Your password must include at least one uppercase letter, one lowercase letter, one symbol, and one number."),
    })
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema,
        onSubmit: function (values) {
            SendData({
                EndpointPath, values, onSuccess: () => setTimeout(() => {
                   navigate("/")
                }, 2000)
            })
        }
    })
    return (
        <>
            <section className=' min-h-[100vh] pt-[70px] p-3 flex justify-center items-center backroundImage    '>
                <div className=" container   shadow-2xl text-white flex flex-col items-center   p-5  rounded-2xl border-[2px] gap-3  md:w-[60%]  ">
                    <h1 className='font-extrabold text-3xl '>Sign In  </h1>
                    <p>Get your gold safely delivered to your door</p>
                    <form onSubmit={formik.handleSubmit} className=' text-white p-3 flex flex-col gap-3 w-full' >
                        <div>
                            <TextField label="User Name" onBlur={formik.handleBlur} type='text' name='username' value={formik.values.username} onChange={formik.handleChange} className='custom-textfield' />
                            {formik.errors.username && formik.touched.username ? <div>
                                <p className='mt-3 text-red-500 font-semibold '> * {formik.errors.username}</p>
                            </div> : ""}
                        </div>
                        <div >
                            <TextField label="Password" onBlur={formik.handleBlur} type='password' name='password' value={formik.values.password} onChange={formik.handleChange} className='custom-textfield' />
                            {formik.errors.password && formik.touched.password ? <div>
                                <p className='mt-3 text-red-500 font-semibold '> * {formik.errors.password}</p>
                            </div> : ""}
                        </div>

                        <Button type='submit' variant='contained' sx={{ width: "20px", ml: "auto" }} >Login</Button>
                    </form>
                </div>


            </section>
        </>
    )
}
