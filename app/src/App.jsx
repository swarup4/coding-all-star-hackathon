import './App.scss';
import React from 'react';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';

import ProtectedRoute from './routes/ProtectedRoute';
// import Home from './components/home/Home';
// import HomePage from './components/home/HomePage';
// import Login from './components/user/Login';
// import Signup from './components/user/Signup';
// import Error from './components/common/Error';
// import AddProject from './components/admin/AddProject';
// import AddCategory from './components/admin/AddCategory';
// import ProductDetails from './components/product/ProductDetails';
// import Cart from './components/cart/Cart';
// import OrderList from './components/order/OrderList';

function App() {

    const route = createBrowserRouter([{}
        // {
        //     path: 'admin',
        //     element: <Home />,
        //     errorElement: <Error />,
        //     children: [
        //         {
        //             path: '',
        //             element: <AddProject />
        //         }, {
        //             path: 'category',
        //             element: <AddCategory />
        //         }
        //     ]
        // }, {
        //     path: 'dashboard',
        //     element: <Home />,
        //     errorElement: <Error />,
        //     children: [
        //         {
        //             path: '',
        //             element: <HomePage />
        //         // }, {
        //         //     path: 'product/details',
        //         //     element: <ProductDetails />
        //         }, {
        //             path: 'user',
        //             element: <ProtectedRoute><Outlet /></ProtectedRoute>,
        //             // children: [
        //             //     {
        //             //         path: 'order',
        //             //         element: <OrderList />
        //             //     }, {
        //             //         path: 'cart',
        //             //         element: <Cart />
        //             //     }
        //             // ]
        //         }
        //     ]
        // }, {
        //     path: '',
        //     element: <Login />
        // }, {
        //     path: 'signup',
        //     element: <Signup />
        // }
    ])
    return (
        <RouterProvider router={route}></RouterProvider>
    );
}
export default App;