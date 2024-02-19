import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import "./register.css"; // Import the CSS file

const Register = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");
	const [isRegistering, setIsRegistering] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const userLoggedIn = useAuth();

	const onSubmit = async e => {
		e.preventDefault();
		if (!isRegistering) {
			setIsRegistering(true);
			await doCreateUserWithEmailAndPassword(email, password);
			navigate("/", { replace: true });
		}
	};

	return (
		<div className="register-form">
			{userLoggedIn && <Navigate to={"/home"} replace={true} />}

			<main>
				<div className="register-title">
					<h3>Create a New Account</h3>
				</div>
				<form onSubmit={onSubmit} className="space-y-4">
					<div className="input-container">
						<label className="input-label">Email</label>
						<input
							type="email"
							autoComplete="email"
							required
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							}}
							className="input-field"
						/>
					</div>

					<div className="input-container">
						<label className="input-label">Password</label>
						<input
							disabled={isRegistering}
							type="password"
							autoComplete="new-password"
							required
							value={password}
							onChange={e => {
								setPassword(e.target.value);
							}}
							className="input-field"
						/>
					</div>

					<div className="input-container">
						<label className="input-label">Confirm Password</label>
						<input
							disabled={isRegistering}
							type="password"
							autoComplete="off"
							required
							value={confirmPassword}
							onChange={e => {
								setconfirmPassword(e.target.value);
							}}
							className="input-field"
						/>
					</div>

					{errorMessage && <p className="error-message">{errorMessage}</p>}

					<button
						type="submit"
						disabled={isRegistering}
						className={`submit-button ${isRegistering ? "disabled" : ""}`}
					>
						{isRegistering ? "Signing Up..." : "Sign Up"}
					</button>
					<div className="signin-link">
						Already have an account? <Link to={"/"}>Login</Link>
					</div>
				</form>
			</main>
		</div>
	);
};

export default Register;
