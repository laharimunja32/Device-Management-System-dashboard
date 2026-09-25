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