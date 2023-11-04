import { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../config/auth-context";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [setConfirmPassword] = useState("");
    const [setError] = useState("");
    const [setLoading] = useState(false)
    const [state, setState] = useState('not-visually-hidden')

    const navigate = useNavigate()
    const { createUser } = UserAuth();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState('visually-hidden')
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
        await delay(2000);
        try {
            setError("")
            setLoading(true)
            await createUser(email, password)
            console.log(auth?.currentUser?.email);
            alert("You have successfully created a new account")
            navigate("/home")
            setState('not-visually-hidden')
        } catch {
            alert("Failed to sign up")
            setState('not-visually-hidden')
        }
        setLoading(false)
    }

    function logInClick() {
        navigate("/")
    }
    return (
        <div className="container-fluid min-vh-100 bg-light d-flex flex-column">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 col-lg-4 mx-auto my-16 p-4 border">
                    <div className="card-body bg-light">
                        <form id="signup-form">
                            <h1 className="text-center text-3xl text-dark">Signup</h1>
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
                            <div className="mb-3">
                                <label
                                    htmlFor="confirmPassword"
                                    className="form-label text-dark"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control text-bg-light border border-dark border-3"
                                    id="confirmPassword"
                                    style={{ borderRadius: '20px' }}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="gap-2">
                                <button
                                    type="submit"
                                    className={`btn btn-outline-success ${state}`}
                                    onClick={handleSubmit}
                                    style={{ borderRadius: '20px' }}
                                >
                                    Sign Up
                                </button>
                                <div></div>
                                <button
                                    type="button"
                                    className={`btn btn-outline-primary ${state}`}
                                    onClick={logInClick}
                                    style={{ borderRadius: '20px' }}
                                >
                                    Log In To Existing Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Signup