import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Registration from './Pages/Registration/Registration'
import Login from './Pages/Login/Login'
import UserProvider from './Context/User.context'
import { Toaster } from 'react-hot-toast'
import Profile from './Pages/Profile/Profile'
import Protectedroute from './components/Protectedroute/Protectedroute'

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Protectedroute>
        <Layout />
      </Protectedroute>, 
      children: [
        { index: true, element: <Profile/> }
      ]
    },
    {
      path:"/auth" , element: <Layout/> , 
      children : [
        {path : "login" , element: <Login/>},
        {path: "register" , element:<Registration/>}
      ]
    }
  ])

  return (
    <>
      <UserProvider>
        <RouterProvider router={routes} />
        <Toaster />
      </UserProvider>
    </>
  )
}

export default App
