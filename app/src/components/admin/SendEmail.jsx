import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../axiosInstance'
import { HOST_URL } from '../../constants'
import { setNotification } from '../../store/notification/notificationSlice'

export default function SendEmail() {

    const dispatch = useDispatch();
    const [userList, setUserList] = useState([])
    const [hackathonList, setHackathonList] = useState([])
    const [hackathon, setHackathon] = useState('')

    const [checked, setChecked] = useState([])

    const handleOnChange = (data) => {
        for (const x of userList) {
            if (data._id == x._id) {
                x.checked = !data.checked;
                if (x.checked) {
                    setChecked([...checked, x])
                } else {
                    let user = checked.filter(item => item.checked != x.checked)
                    setChecked(user)
                }
            }
        }
    };

    useEffect(() => {
        const url = `${HOST_URL}user/adminUserList`
        axios.get(url).then(res => {
            let user = res.data.map(x => {
                x.checked = false;
                return x
            })
            setUserList(user)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, []);

    useEffect(() => {
        const url = `${HOST_URL}hackathon/getHackathonList`
        axios.get(url).then(res => {
            setHackathonList(res.data)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, []);

    function sendMail() {
        let obj = {
            hackathon: hackathon
        }

        let userInfo = checked.map(x => {
            let obj = {
                email : x.email,
                name: x.name,
                password: x.password
            }
            return obj;
        })

        obj.user = userInfo;

        const url = `${HOST_URL}user/sendEmail`
        axios.post(url, obj).then(res => {
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: "Mail has snet"
            }))
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }


    return (
        <div>
            <section className="bg-white p-4">
                <div className="container mx-auto">
                    <div className="p-6 h-full overflow-hidden bg-white rounded-md">
                        <div className="pb-6 border-b border-coolGray-100">
                            <div className="flex flex-wrap items-center justify-between -m-2">
                                <div className="w-full md:w-auto p-2">
                                    <h2 className="text-coolGray-900 text-lg font-semibold">Send Email</h2>
                                    <p className="text-xs text-coolGray-500 font-medium">Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="w-full md:w-auto p-2">
                                    <div className="flex flex-wrap justify-between -m-1.5">
                                        <div className="w-full md:w-auto p-1.5">
                                            <button className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">
                                                <p>Cancel</p>
                                            </button>
                                        </div>
                                        <div className="w-full md:w-auto p-1.5">
                                            <button onClick={() => sendMail()} className="flex flex-wrap justify-center w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                                <p>Send Email</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='overflow-auto' style={{ height: 'calc(100vh - 238px)' }}>
                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/3 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Hackathon Name</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            <select name='panelist' onChange={(ev) => setHackathon(ev.target.value)} className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-yellow-500 rounded-lg shadow-input">
                                                <option value="">Select</option>
                                                {hackathonList.map((item, ind) => (
                                                    <option value={item.name} key={ind}>{item.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/3 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Name List</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            {userList.map((x, ind) => (
                                                <div className='flex p-3' key={ind}>
                                                    <div className="w-auto md:w-1/12">
                                                        <input name={x._id} checked={x.checked} onChange={() => handleOnChange(x)} value={x._id} type="checkbox" className="w-5 h-5 bg-white rounded" />
                                                    </div>
                                                    <p className="items-center flex md:flex-1 text-sm text-coolGray-800 font-semibold">{x.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
