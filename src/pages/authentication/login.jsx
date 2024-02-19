import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	doSignInWithEmailAndPassword,
	doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import "./login.css";
import { Navigate } from "react-router-dom";
import GoogleLogo from "../../assets/googleLogo.png";

const Login = () => {
	const userLoggedIn = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSigningIn, setIsSigningIn] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const onSubmit = async e => {
		e.preventDefault();
		if (!isSigningIn) {
			setIsSigningIn(true);
			try {
				await doSignInWithEmailAndPassword(email, password);
				navigate("/home", { replace: true });
			} catch (error) {
				setErrorMessage(error.message);
				setIsSigningIn(false);
			}
		}
	};

	const onGoogleSignIn = async e => {
		e.preventDefault();
		if (!isSigningIn) {
			setIsSigningIn(true);
			try {
				await doSignInWithGoogle();
				navigate("/home", { replace: true });
			} catch (error) {
				setErrorMessage(error.message);
				setIsSigningIn(false);
			}
		}
	};

	return (
		<div className="login-container">
			{userLoggedIn && <Navigate to={"/home"} replace={true} />}

			<main>
				<div>
					<div className="login-title">
						<h3>Welcome Back</h3>
					</div>
					<form onSubmit={onSubmit}>
						<div className="input-container">
							<label className="input-label">Email</label>
							<input
								type="email"
								className="input-field"
								autoComplete="email"
								required
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>

						<div className="input-container">
							<label className="input-label">Password</label>
							<input
								type="password"
								className="input-field"
								autoComplete="current-password"
								required
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>

						{errorMessage && (
							<p className="error-message">*Invalid Credentials</p>
						)}

						<button
							type="submit"
							className="submit-button"
							disabled={isSigningIn}
						>
							{isSigningIn ? "Signing In..." : "Sign In"}
						</button>
						<button
							onClick={onGoogleSignIn}
							className="google-signin-button"
							disabled={isSigningIn}
						>
							<img src={GoogleLogo} alt="Google Logo" />
							{isSigningIn ? "Signing In..." : "Sign In with Google"}
						</button>
					</form>
					<p className="signup-link">
						Don't have an account? <Link to={"/register"}>Sign up</Link>
					</p>
				</div>
			</main>
		</div>
	);
};

export default Login;
