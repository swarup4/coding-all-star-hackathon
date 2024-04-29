import './App.scss'
import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import ProtectedRoute from './routes/ProtectedRoute'

import UserLayout from './layout/UserLayout'
import AdminLayout from './layout/AdminLayout'
import HomePage from './pages/HomePage'
import Error from './components/common/Error'
import Login from './pages/Login'
import Register from './pages/Register'
import Hackathon from './pages/Hackathon'
import Dashboard from './pages/Dashboard'
import Submission from './pages/Submission'
import Admin from './pages/Admin'
import Leaderboard from './pages/Leaderboard'
import Panel from './pages/Panel'


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
                }, {
                    path: 'submission/:id',
                    element: <Submission />
                }, {
                    path: 'leaderboard',
                    element: <Leaderboard />,
                    errorElement: <Error />
                }]
            }]
        }, {
            path: 'admin',
            element: <AdminLayout />,
            children: [{
                path: '',
                element: <Admin />
            }, {
                path: 'panel',
                element: <Panel />
            }]
            
            // element: <UserLayout />,
            // errorElement: <Error />,
            // children: [{
            //     path: '',
            //     element: <ProtectedRoute><Outlet /></ProtectedRoute>,
            //     children: [{
            //         path: '',
            //         element: <Dashboard />
            //     }, {
            //         path: 'hackathon/:id',
            //         element: <Hackathon />
            //     }, {
            //         path: 'submission/:id',
            //         element: <Submission />
            //     }]
            // }]
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