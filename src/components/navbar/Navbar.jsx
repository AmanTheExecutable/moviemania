import { NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css";

const Navbar = () => {
	const [query, setQuery] = React.useState("");

	return (
		<div className="header">
			<div className="headerLeft">
				<NavLink exact to={"/"} activeClassName="active">
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
			</div>
		</div>
	);
};

export default Navbar;
