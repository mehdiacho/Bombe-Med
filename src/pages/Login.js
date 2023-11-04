import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../config/auth-context";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(2000);

        try {
            await signIn(email, password)
            alert("Sign in successful")
            navigate('/homepage')
        } catch (e) {

            alert("Sign in Unsuccessful")
        }
    };

    function signUpClick() {
        navigate("/signup")
    }

    return (
        <div className="container-fluid min-vh-100 bg-light d-flex flex-column">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 col-lg-4 mx-auto my-16 p-4 border">
                    <div className="card-body bg-light">
                        <form id="login-form" onSubmit={handleSubmit}>
                            <h1 className="text-center text-3xl text-dark">Login</h1>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label text-dark">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control text-bg-light border border-dark border-3"
                                    id="inputEmail"
                                    aria-describedby="emailHelp"
                                    style={{ borderRadius: '20px' }}
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label text-dark">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control text-bg-light border border-dark border-3"
                                    id="inputPassword"
                                    style={{ borderRadius: '20px' }}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                            <div className=" gap-2">
                                <button
                                    type="submit"
                                    className={`btn btn-outline-success`}
                                    style={{ borderRadius: '20px' }}
                                >
                                    Log In
                                </button>
                                <div></div>
                                <button
                                    type="button"
                                    className={`btn btn-outline-primary`}
                                    onClick={signUpClick}
                                    style={{ borderRadius: '20px' }}
                                >
                                    Create An Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login