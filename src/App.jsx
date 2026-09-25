import React, { useState } from "react";
import SldDashboard from "./SldDashboard";

function App() {
    const [page, setPage] = useState("login");
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        const trimmedLoginId = loginId.trim();
        const loginIdRegex = /^[a-zA-Z0-9]+$/;

        if (!trimmedLoginId) {
            setError("Please enter your login ID.");
            return;
        }

        if (!loginIdRegex.test(trimmedLoginId)) {
            setError("Login ID can only contain letters and numbers.");
            return;
        }

        if (!password) {
            setError("Please enter your password.");
            return;
        }

        setError("");
        setShowSuccessModal(true);
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
        setPage("dashboard");
    };

    const handleSignOut = () => {
        setLoginId("");
        setPassword("");
        setError("");
        setShowSuccessModal(false);
        setPage("login");
    };

    if (page === "dashboard") {
        return (
            <SldDashboard
                loginId={loginId.trim()}
                onSignOut={handleSignOut}
            />
        );
    }

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

                    <div className="login-header">
                        <h2>Welcome Back</h2>
                        <p>
                            Sign in to access the Device Management System
                        </p>
                    </div>

                    <form onSubmit={handleLogin}>

                        <div className="input-group">
                            <label htmlFor="loginId">Login ID</label>
                            <input
                                id="loginId"
                                type="text"
                                placeholder="Enter your login ID"
                                autoComplete="username"
                                value={loginId}
                                onChange={(e) => {
                                    setLoginId(e.target.value);
                                    setError("");
                                }}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <div className="password-wrapper">
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
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="error-message">{error}</div>
                        )}

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>Authorized users only</p>
                    </div>

                </div>

                <div className="copyright">
                    © 2026 Containe Technologies Ltd
                </div>

            </div>

            {showSuccessModal && (
                <div className="modal-overlay" role="presentation">
                    <div
                        className="modal-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="success-modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-icon" aria-hidden="true">
                            ✓
                        </div>
                        <h3 id="success-modal-title">Login successful!</h3>
                        <p>You are signed in to the Device Management System.</p>
                        <button
                            type="button"
                            className="modal-button"
                            onClick={closeSuccessModal}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default App;
