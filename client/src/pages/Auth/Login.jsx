import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Trigger the animation after a short delay to allow component rendering
        const timeoutId = setTimeout(() => setShowForm(true), 100);
        return () => clearTimeout(timeoutId);
    }, []);

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className={`hero min-h-screen bg-base-200 flex justify-center items-center transition-opacity ${showForm ? 'opacity-100' : 'opacity-0'}`}>
            <div className="card shadow-md bg-base-100 w-full md:w-1/2 lg:w-1/3 transition-transform transform-gpu duration-500 ease-in-out" style={{ transform: showForm ? 'translateY(0)' : 'translateY(-20px)' }}>
                <form onSubmit={handleSubmit} className="card-body p-8 space-y-4">
                    <p className="btn btn-error text-center font-semibold text-2xl">Sign In</p>
                    <div className="form-control">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
