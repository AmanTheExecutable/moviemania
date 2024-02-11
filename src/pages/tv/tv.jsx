import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./tv.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Tv = () => {
	const { id } = useParams();
	const [tv, setTv] = useState({});

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/tv/${id}?api_key=c8a65028465c18a0af0841ac79b572fd&language=en-US`
		)
			.then(response => response.json())
			.then(data => setTv(data));
	}, []);

	return (
		<div className="movie">
			<div className="movie__intro">
				<img
					className="movie__backdrop"
					src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
					alt=""
				/>
			</div>
			<div className="movie__detail">
				<div className="movie__detailLeft">
					<div className="movie__posterBox">
						<img
							className="movie__poster"
							src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
							alt=""
						/>
					</div>
				</div>
				<div className="movie__detailRight">
					<div className="movie__detailRightTop">
						<div className="movie__name"> {tv.original_name} </div>
						<div className="movie__rating">
							<span className="movie__voteavg">{tv.vote_average}</span>
							<FontAwesomeIcon icon={faStar} />
						</div>
						<div className="movie__releaseDate">
							Release date: {tv.first_air_date}{" "}
						</div>
						<div className="movie__genres">
							{tv &&
								tv.genres &&
								tv.genres.map(genre => (
									<span className="movie__genre" key={genre.id}>
										{genre.name}
									</span>
								))}
						</div>
					</div>
					<div className="movie__detailRightBottom">
						<div className="synopsisText">Synopsis</div>
						<div>{tv.overview}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tv;
