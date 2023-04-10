import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
    const navigate = useNavigate()
    let checklogin = (localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")!) : false
    if (checklogin.users?.role == "member" || checklogin == false) {
        navigate("/")
        alert("bạn k có quyền vào admin")
    }

    return (
        <div>DashBoard</div>
    )
}

export default DashBoard