import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { HOST_URL } from '../../constants'
import Editor from './Editor'

export default function CodePanel(props) {
    const [apiCodes, setApiCodes] = useState('')
    // const submission = useSelector(store => store.submission.data)

    return (
        <Editor code={apiCodes} setCode={setApiCodes} />
    )
}
