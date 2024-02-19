import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import React from "react";
import "./navbar.css";

const Navbar = () => {
	const [query, setQuery] = React.useState("");
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			await doSignOut();
			navigate("/", { replace: true });
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	return (
		<div className="header">
			<div className="headerLeft">
				<NavLink exact to={"/home"} activeClassName="active">
					<img
						className="header__icon"
						src="https://ik.imagekit.io/xcuqahb2st38/rand/logo.png?updatedAt=1706619838623"
						alt=""
					/>
					<h1 id="name">MovieMania</h1>
				</NavLink>
				<NavLink to={"/movies/popular"} activeClassName="active">
					<span>Popular</span>
				</NavLink>
				<NavLink to={"/movies/top_rated"} activeClassName="active">
					<span>Top Rated</span>
				</NavLink>
				<NavLink to={"/movies/upcoming"} activeClassName="active">
					<span>Upcoming</span>
				</NavLink>
				<NavLink to={"/movies/now_playing"} activeClassName="active">
					<span>Now Playing</span>
				</NavLink>
				<NavLink to={"/tv"} activeClassName="active">
					<span>TV Shows</span>{" "}
				</NavLink>
				<NavLink to={"/fav"} activeClassName="active">
					<span>Favourites</span>
				</NavLink>
			</div>
			<div className="headerRight">
				<input
					type="text"
					value={query}
					placeholder="Search Here"
					className="searchInput"
					onChange={e => setQuery(e.target.value)}
				/>
				<NavLink
					to={`/movies/search/${query}`}
					activeClassName="active"
					onClick={() => setQuery("")}
				>
					Search
				</NavLink>
				<NavLink className="logout" onClick={handleLogout}>
					Logout
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
