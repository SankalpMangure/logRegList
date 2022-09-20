import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function Login() {
    let [email, setEmail] = useState("");
    let [password, serPassword] = useState("");
    let navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        let isValidate = true;
        if (email === "") {
            alert("email is required");
            isValidate = false;
        }
        if (password === "") {
            alert("password is required");
            isValidate = false;
        }
        if (isValidate) {
            let isLogin = false;
            let name = "";
            let users = JSON.parse(localStorage.getItem("users"));
            users.forEach(element => {
                if (element.email === email && element.password === password) {
                    name = element.name;
                    isLogin = true;
                }
            });
            if (isLogin) {
                alert("Login success");
                localStorage.setItem("usertype", "user");
                localStorage.setItem("email", email);
                localStorage.setItem("name", name);
                navigate("/users");
            } else {
                alert("Not matching email & password");
            }
        }
    }
    return (
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                    <div className="card-body p-md-3">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                                <p className="text-center h1 fw-bold mb-1 mx-1 mx-md-4 mt-1">Login</p>
                                <form className="mx-1 mx-md-12">
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="form3Example1c">Email</label>
                                            <input type="email" id="form3Example1c" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                                            <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e) => { serPassword(e.target.value) }} />
                                        </div>
                                    </div>
                                    {/* <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-key fa-lg me-3 fa-fw" />
                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                    <input type="password" id="form3Example4cd" className="form-control" />
                                </div>
                            </div> */}
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="button" className="btn btn-primary btn-lg" onClick={(e) => { submit(e); }}>Login</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;