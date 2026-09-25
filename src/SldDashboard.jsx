import React from "react";
import "./SldDashboard.css";

const capabilityItems = [
    {
        title: "Data receiving from the SLD device",
        description:
            "Monitor incoming telemetry, status updates, and sensor readings from connected SLD units.",
    },
    {
        title: "Transmitting to the SLD device",
        description:
            "Push configuration updates, commands, and firmware packages to devices on the network.",
    },
    {
        title: "Calibration to the SLD device",
        description:
            "Apply and verify calibration profiles so SLD devices report accurate measurements.",
    },
    {
        title: "Live speed on the dashboard of vehicle",
        description:
            "View real-time vehicle speed and motion data on the fleet dashboard.",
    },
];

function SldDashboard({ loginId, onSignOut }) {
    return (
        <div className="sld-dashboard-page">
            <header className="sld-dashboard-header">
                <div>
                    <p className="sld-dashboard-eyebrow">Containe Technologies Ltd</p>
                    <h1>SLD Management System</h1>
                </div>
                <div className="sld-dashboard-user">
                    <span>Signed in as {loginId}</span>
                    <button type="button" onClick={onSignOut}>
                        Sign out
                    </button>
                </div>
            </header>

            <main className="sld-dashboard-main">
                <section className="sld-dashboard-section">
                    <h2>Types</h2>
                    <div className="sld-type-card">
                        <span className="sld-type-label">Parameter mode</span>
                        <p>Set parameters</p>
                    </div>
                </section>

                <section className="sld-dashboard-section">
                    <h2>Device operations</h2>
                    <ul className="sld-capability-list">
                        {capabilityItems.map((item) => (
                            <li key={item.title} className="sld-capability-card">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="sld-dashboard-section">
                    <h2>Live vehicle speed</h2>
                    <div className="sld-speed-panel">
                        <span className="sld-speed-value">62</span>
                        <span className="sld-speed-unit">km/h</span>
                        <p className="sld-speed-note">
                            Sample live reading for dashboard preview
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default SldDashboard;
