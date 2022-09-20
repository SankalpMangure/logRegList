import React, { useState } from "react";

function Register() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [name_msg, setName_msg] = useState("");
    let [email_msg, setEmail_msg] = useState("");
    let [password_msg, setPassword_msg] = useState("");
    let [confirm_password, setConfirm_password] = useState("");
    let [con_msg, setCon_msg] = useState("");

    function submit(e) {
        e.preventDefault();
        setName_msg("");
        setEmail_msg("");
        setPassword_msg("");
        setCon_msg("");

        let isValidate = true;
        if (name.trim() === "") {
            setName_msg("Name is required");
            isValidate = false;
        }
        if (email.trim() === "") {
            setEmail_msg("Email is required");
            isValidate = false;
        }
        if (password.trim() === "") {
            setPassword_msg("Password is required");
            isValidate = false;
        }
        if (confirm_password.trim() === "") {
            setCon_msg("Confirm Password is required");
            isValidate = false;
        }
        var filter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!filter.test(email)) {
            setEmail_msg("Please provide a valid email address");
            isValidate = false;
        }

        if (password !== confirm_password) {
            setCon_msg("Confirm msg not matching to password");
            isValidate = false;
        }

        if (isValidate) {
            var users = [];
            if (localStorage.getItem('users') === null) {
                users.push({ name: name, email: email, password: password });
                localStorage.setItem("users", JSON.stringify(users));
                console.log(users);
            } else {
                users = localStorage.getItem('users');
                console.log("users" + users);
                users = JSON.parse(localStorage.getItem('users'));
                users.forEach(function (arrayItem) {
                    if (arrayItem.email === email) {
                        isValidate = false;
                        alert("Email is already taken");
                    }
                });
                if (isValidate) {
                    users.push({ name: name, email: email, password: password });
                    console.log(users);
                }
            }
        }
    }

    return (
        <div>
            {/* <section className="vh-100" style={{ backgroundColor: '#eee' }}> */}
            {/* <div className="container h-100"> */}
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{ borderRadius: 25 }}>
                        <div className="card-body p-md-3">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                                    <p className="text-center h1 fw-bold mb-1 mx-1 mx-md-4 mt-1">Register</p>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="name">Your Name</label><br />
                                            <span className="text-danger">{name_msg}</span>
                                            <input type="text" id="name" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="email">Your Email</label><br />
                                            <span className="text-danger">{email_msg}</span>
                                            <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="password">Password</label><br />
                                            <span className="text-danger">{password_msg}</span>
                                            <input type="password" id="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="confirm_password">Confirm Password</label><br />
                                            <span className="text-danger">{con_msg}</span>
                                            <input type="password" id="confirm_password" className="form-control" value={confirm_password} onChange={(e) => { setConfirm_password(e.target.value) }} />
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
                                        <button type="button" className="btn btn-primary btn-lg" onClick={(e) => { submit(e); }}>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* </section> */}
        </div >
    )
}

export default Register;