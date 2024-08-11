import React, { useContext } from 'react'
import { Usercontext } from '../../Context/User.context'
import { Navigate } from 'react-router-dom'
export default function Protectedroute({children}) {
    const {token} = useContext(Usercontext) 
    if(token){
        return children ;
    }else{
        return <Navigate to="/auth/login"/>
    }

}
