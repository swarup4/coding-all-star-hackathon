import './App.scss'
import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProtectedRoute from './routes/ProtectedRoute'
import Notification from './components/common/Notification'

import UserLayout from './layout/UserLayout'
import AdminLayout from './layout/AdminLayout'
import HomePage from './pages/HomePage'
import Error from './components/common/Error'
import Login from './pages/Login'
import Register from './pages/Register'
import Hackathon from './pages/Hackathon'
import Dashboard from './pages/Dashboard'
import Submission from './pages/Submission'
import ApiDetails from './pages/ApiDetails'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import Review from './pages/Review'
import ProfileInfo from './pages/ProfileInfo'
import ChangePassword from './pages/ChangePassword'
import Admin from './components/admin/Admin'
import SendEmail from './components/admin/SendEmail'


function App() {

    const notification = useSelector(store => store.notification.popup)

    const route = createBrowserRouter([
        {
            path: '',
            element: <HomePage />,
            errorElement: <Error />
        }, {
            path: 'dashboard',
            element: <ProtectedRoute><Outlet /></ProtectedRoute>,
            errorElement: <Error />,
            children: [{
                path: '',
                element: <UserLayout />,
                children: [{
                    path: '',
                    element: <Dashboard />
                }, {
                    path: 'hackathon/:id',
                    element: <Hackathon />
                }, {
                    path: 'leaderboard',
                    element: <Leaderboard />,
                    errorElement: <Error />
                }, {
                    path: 'profile',
                    element: <Profile />,
                    errorElement: <Error />
                }, {
                    path: 'profile/edit',
                    element: <ProfileInfo />,
                    errorElement: <Error />
                }, {
                    path: 'submission/:id',
                    element: <Submission />
                }, {
                    path: 'details/:id',
                    element: <ApiDetails />
                }, {
                    path: 'review',
                    element: <Review />
                }]
            }]
        }, {
            path: 'admin',
            element: <AdminLayout />,
            children: [{
                path: '',
                element: <ProtectedRoute><Outlet /></ProtectedRoute>,
                children: [{
                    path: '',
                    element: <Admin />
                }, {
                    path: 'sendEmail',
                    element: <SendEmail />
                }]
            }],
        }, {
            path: 'login',
            element: <Login />,
            errorElement: <Error />
        }, {
            path: 'signup',
            element: <Register />,
            errorElement: <Error />
        }, {
            path: 'changePassword/:id',
            element: <ChangePassword />,
            errorElement: <Error />
        }, {
            path: 'user',
            element: <ProfileInfo />,
            errorElement: <Error />
        }
    ])
    return (
        <>
            <Notification notification={notification} />
            <RouterProvider router={route}></RouterProvider>
        </>
    );
}
export default App;