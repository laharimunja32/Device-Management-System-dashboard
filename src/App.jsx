import React, { useState } from "react";

function App() {
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(loginId)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Please enter your password.");
            return;
        }

        setError("");
        alert("Login successful!");
    };

    return (
        <div className="login-page">

            <div className="branding-section">

                <div className="brand-content">

                    <div className="company-logo">
                        <img
                            src="/Device-Management-System-dashboard/ctpl-logo.png"
                            alt="Containe Technologies Limited"
                        />
                    </div>

                    <h1>
                        Containe Technologies Ltd
                    </h1>

                    <p className="brand-subtitle">
                        Industrial Technology & Smart Mobility Solutions
                    </p>

                    <div className="brand-divider"></div>

                    <h2>
                        Device Management System
                    </h2>

                    <p className="description">
                        A centralized platform for monitoring,
                        configuring and managing connected devices.
                    </p>

                    <div className="feature-list">

                        <div className="feature-item">
                            <span>✓</span>
                            <p>Device Monitoring</p>
                        </div>

                        <div className="feature-item">
                            <span>✓</span>
                            <p>Device Configuration</p>
                        </div>

                        <div className="feature-item">
                            <span>✓</span>
                            <p>Device Diagnostics</p>
                        </div>

                    </div>

                </div>

                <div className="branding-footer">
                    Device Management Platform
                </div>

            </div>


            <div className="login-section">

                <div className="login-card">

                    <h2>Welcome Back</h2>

                    <p className="login-subtitle">
                        Sign in to access the Device Management System
                    </p>

                    <form onSubmit={handleLogin}>

                        <div className="form-group">

                            <label htmlFor="loginId">
                                Email Address
                            </label>

                            <input
                                id="loginId"
                                type="text"
                                placeholder="Enter your email address"
                                value={loginId}
                                onChange={(e) => {
                                    setLoginId(e.target.value);
                                    setError("");
                                }}
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="password-container">

                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError("");
                                    }}
                                />

                                <button
                                    type="button"
                                    className="show-password"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>

                            </div>

                        </div>


                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}


                        <button
                            type="submit"
                            className="login-button"
                        >
                            Sign In
                        </button>

                    </form>

                    <p className="login-footer">
                        Authorized users only
                    </p>

                </div>

                <div className="copyright">
                    © 2026 Containe Technologies Ltd
                </div>

            </div>

        </div>
    );
}

export default App;
