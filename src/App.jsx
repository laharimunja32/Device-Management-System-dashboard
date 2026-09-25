import React, { useState } from "react";

function App() {
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        if (loginId === "admin" && password === "Admin@123") {
            setError("");
            alert("Login successful!");
        } else {
            setError("Invalid Login ID or Password.");
        }
    };

    return (
        <div className="login-page">

            {/* Left Branding Section */}

            <div className="branding-section">

                <div className="brand-content">

                    {/* Actual CTPL Logo */}

                    <div className="company-logo">
                        <img
                            src="/ctpl-logo.png"
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


            {/* Login Section */}

            <div className="login-section">

                <div className="login-card">

                    <div className="login-header">

                        <h2>
                            Welcome Back
                        </h2>

                        <p>
                            Sign in to access the Device Management System
                        </p>

                    </div>


                    <form onSubmit={handleLogin}>

                        {/* Login ID */}

                        <div className="input-group">

                            <label htmlFor="loginId">
                                Login ID
                            </label>

                            <input
                                id="loginId"
                                type="text"
                                placeholder="Enter your Login ID"
                                value={loginId}
                                onChange={(event) => {
                                    setLoginId(event.target.value);
                                    setError("");
                                }}
                                autoComplete="username"
                                required
                            />

                        </div>


                        {/* Password */}

                        <div className="input-group">

                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="password-wrapper">

                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                        setError("");
                                    }}
                                    autoComplete="current-password"
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>

                            </div>

                        </div>


                        {/* Error Message */}

                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}


                        {/* Login Button */}

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Sign In
                        </button>

                    </form>


                    {/* Footer */}

                    <div className="login-footer">

                        <p>
                            Authorized users only
                        </p>

                        <span>
                            © 2026 Containe Technologies Ltd
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default App;