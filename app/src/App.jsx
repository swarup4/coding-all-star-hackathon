import './App.scss'
import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import ProtectedRoute from './routes/ProtectedRoute'

// import Login from './components/user/Login';
// import Signup from './components/user/Signup';
// import Error from './components/common/Error';
// import AddProject from './components/admin/AddProject';
// import AddCategory from './components/admin/AddCategory';
// import ProductDetails from './components/product/ProductDetails';
// import Cart from './components/cart/Cart';
// import OrderList from './components/order/OrderList';

import HomePage from './pages/HomePage'
import Error from './components/common/Error'
import Login from './pages/Login'
import Register from './pages/Register'
import Panels from './pages/Panels'
import Hackathon from './pages/Hackathon'
import Dashboard from './pages/Dashboard'
import UserLayout from './layout/UserLayout'


function App() {

    const route = createBrowserRouter([
        {
            path: '',
            element: <HomePage />,
            errorElement: <Error />
        }, {
            path: 'dashboard',
            element: <UserLayout />,
            errorElement: <Error />,
            children: [{
                path: '',
                element: <ProtectedRoute><Outlet /></ProtectedRoute>,
                children: [{
                    path: '',
                    element: <Dashboard />
                }, {
                    path: 'hackathon/:id',
                    element: <Hackathon />
                }]
            }]
        }, {
            path: 'panel',
            element: <Panels />,
            errorElement: <Error />,
        }, {
            path: 'hackathon',
            element: <Hackathon />
        }, {
            path: 'login',
            element: <Login />
        }, {
            path: 'signup',
            element: <Register />
        }
    ])
    return (
        <RouterProvider router={route}></RouterProvider>
    );
}
export default App;