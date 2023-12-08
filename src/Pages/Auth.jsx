import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allApi'
import Header from '../Components/Header'



function Auth({ register }) {

    const navigate = useNavigate()

    const registerForm = register ? true : false

    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const handleRegister = async (e) => {
        e.preventDefault()
        const { userName, email, password } = userData
        if (!userName || !email || !password) {
            alert("Please fill all fields")
        }
        else {
            const result = await registerAPI(userData)
            console.log(result);
            if (result.status === 200) {
                alert("User Registered Successfull")
                navigate('/login')
                setUserData({
                    userName: "",
                    email: "",
                    password: ""
                })
            }
            else {
                alert("Email already exists")
            }
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = userData
        if (!email || !password) {
            alert('please fill all the fields')
        }
        else {
            const result = await loginAPI(userData)
            console.log(result);
            if (result.status === 200) {
                alert("Login Successfull")
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token", result.data.token)
                navigate('/')
                setUserData({
                    email: "",
                    password: ""
                })
            } else {
                alert("Login failed")
            }
        }
    }

    return (
        <>

        <Header/>
            <div style={{ width: '100%' }} className='d-flex justify-content-center align-items-center my-5'>
                <div className="container">
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <i className='fa-solid fa-arrow-left'></i> Back to home
                    </Link>
                    <div className='card shadow p-5 bg-dark'>
                        <div className='row'>
                            <div className='col pic2'>
                                <img width={'100%'} src="https://www.planstudyabroad.com/images/login.png" alt="" />
                            </div>
                            <div className='col text-center'>
                                <div className='d-flex justify-content-center flex-column' >
                                    <h2 style={{ color: 'white', fontFamily: 'Oswald', fontWeight: '500' }}>Image Uploader</h2>
                                    <h5 className='mt-2' style={{ color: 'white', fontFamily: 'Oswald', fontWeight: '400' }}>
                                        {
                                            registerForm ? "Sign up" : "Login to your account"
                                        }</h5>

                                    <form>
                                        {
                                            registerForm &&
                                            <input
                                                value={userData.userName}
                                                onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                                                type="text"
                                                placeholder='Name'
                                                className='form-control mt-3' />
                                        }

                                        <input
                                            value={userData.email}
                                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                            type="text"
                                            placeholder='E-mail'
                                            className='form-control my-2' />

                                        <input
                                            value={userData.password}
                                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                            type="password"
                                            placeholder='Password'
                                            className='form-control' />

                                        {
                                            registerForm ?
                                                <div className="text-center m-3">
                                                    <MDBBtn onClick={handleRegister}>Register</MDBBtn>
                                                    <p className='mt-3' style={{ color: 'white' }}>Already have an account?
                                                        <Link to={'/login'}>
                                                            Login
                                                        </Link>
                                                    </p>
                                                </div> :
                                                <div className="text-center m-3">
                                                    <MDBBtn onClick={handleLogin}>Login</MDBBtn>
                                                    <p className='mt-4' style={{ color: 'white' }}>New user?
                                                        <Link to={'/register'}>
                                                            Register
                                                        </Link>
                                                    </p>
                                                </div>
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth