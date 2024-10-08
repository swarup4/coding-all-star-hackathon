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
import EditSubmission from './pages/EditSubmission'
import ApiDetails from './pages/ApiDetails'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import Review from './pages/Review'
import ProfileInfo from './pages/ProfileInfo'
import ChangePassword from './pages/ChangePassword'
import Settings from './pages/Settings'
import Admin from './components/admin/Admin'
import SendEmail from './components/admin/SendEmail'
import AddPrize from './components/admin/AddPrize'
import HackathonList from './components/admin/HackathonList'
import UserApiList from './components/admin/UserApiList'
import CodeView from './components/admin/CodeViw'


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
                    path: 'submission/edit/:id',
                    element: <EditSubmission />
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
                    element: <HackathonList />,
                    errorElement: <Error />
                }, {
                    path: 'hackathon',
                    element: <Admin />
                }, {
                    path: 'editHackathon/:id',
                    element: <Admin />,
                    errorElement: <Error />
                }, {
                    path: 'sendEmail',
                    element: <SendEmail />
                }, {
                    path: 'apis',
                    element: <UserApiList />
                }, {
                    path: 'prize',
                    element: <AddPrize />
                }, {
                    path: 'profile',
                    element: <Profile />,
                    errorElement: <Error />
                }, {
                    path: 'profile/edit',
                    element: <ProfileInfo />,
                    errorElement: <Error />
                }, {
                    path: 'settings',
                    element: <Settings />,
                    errorElement: <Error />
                }]
            }],
        }, {
            path: 'login',
            element: <Login />,
            errorElement: <Error />
        }, {
            path: 'codeView/:id',
            element: <CodeView />,
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