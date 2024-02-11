import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";

const Navbar = () => {
	const [query, setQuery] = React.useState("");

	return (
		<div className="header">
			<div className="headerLeft">
				<Link to={"/"}>
					<img
						className="header__icon"
						src="https://ik.imagekit.io/xcuqahb2st38/rand/logo.png?updatedAt=1706619838623"
						alt=""
					/>
					<h1 id="name">MovieMania</h1>
				</Link>
				<Link to={"/movies/popular"}>
					<span>Popular</span>
				</Link>
				<Link to={"/movies/top_rated"}>
					<span>Top Rated</span>
				</Link>
				<Link to={"/movies/upcoming"}>
					<span>Upcoming</span>
				</Link>
				<Link to={"/movies/now_playing"}>
					<span>Now Playing</span>
				</Link>
				<Link to={"/tv"}>
					<span>TV Shows</span>{" "}
				</Link>
			</div>
			<div className="headerRight">
				<input
					type="text"
					value={query}
					placeholder="Search Here"
					className="searchInput"
					onChange={e => setQuery(e.target.value)}
				/>
				<Link to={`/movies/search/${query}`} onClick={() => setQuery("")}>
					Click here
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
