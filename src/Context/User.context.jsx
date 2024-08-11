import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
export const Usercontext = createContext("")
export default function UserProvider({ children }) {
    const expirationDays = 1;
    const [token, SetToken] = useState(Cookies.get("authToken")) // State Handel the authentication token using Cookies 
    const [tokenInfo, SetTokenInfo] = useState(JSON.parse(localStorage.getItem("tokeninfo"))) // State Handle Token Data to display it in the profile component
    async function SendData({ EndpointPath, values, onSuccess }) {
        try {
            const options = {
                url: `https://dev.backend-api.goldady.com/user-api/${EndpointPath}`,
                method: "POST",
                data: values,
            }
            const { data } = await axios.request(options)
            toast.success(data.message.en)
            if (onSuccess) onSuccess() // for navigate user between components
            if (data.data) {
                console.log(data.data.accessToken);
                Cookies.set('authToken', data.data.accessToken, { expires: expirationDays })
                SetToken(Cookies.get("authToken"))
                localStorage.setItem("tokeninfo", JSON.stringify(data.data.user))
                SetTokenInfo(data.data.user)
                console.log(JSON.parse(localStorage.getItem("tokeninfo")));
            }

        } catch (error) {
            console.log(error);
            toast((t) => (
                <div className="flex flex-col gap-2 rounded-md ">
                    {error.response.data.message.email ? <span className="text-red-500 text-center  font-light">
                        <i className="fa-solid m-1  fa-xmark text-red-500 "></i>
                        {error.response.data.message.email[0].en}
                    </span> : ""}
                    {error.response.data.message.phone ? <span className="text-red-500 text-center  font-light">
                        <i className="fa-solid m-1 fa-xmark text-red-500"></i>
                        {error.response.data.message.phone[0].en}
                    </span> : ""}
                    {error.response.data.message.username ? <span className="text-red-500 text-center  font-light">
                        <i className="fa-solid m-1 fa-xmark text-red-500"></i>
                        {error.response.data.message.username[0].en}
                    </span> : ""}
                    {error.response.data.message ? <span className="text-red-500 text-center font-light">
                        {error.response.data.message.en}
                    </span> : ""}
                    <button className="border-[2px]" onClick={() => toast.dismiss(t.id)}>
                        Dismiss
                    </button>
                </div>
            )) // toast for messages to explain the requests from Api
        }

    } // Function to post data to Api With a BaseUrl and dynamic values , Endpoints and navigate user between  login and registration components.
    async function logout() {
        try {
            const options = {
                url: `https://dev.backend-api.goldady.com/user-api/auth/logout`,
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }
            const { data } = await axios.request(options)
            SetToken(null)
            Cookies.remove('authToken')
            toast.success(data.message.en)
        } catch (error) {
            console.log(error);
        }

    } // Function Handel Logout with api and return User to the Login page
    return <Usercontext.Provider value={{ SendData, token, logout, tokenInfo }}>
        {children}
    </Usercontext.Provider>
}

// Make this context for the 