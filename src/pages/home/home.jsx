import React, { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/movie-list";
import Slider from "../../components/slider/slider";
import LoadingBar from "react-top-loading-bar";

const Home = () => {
	const [loadingComplete, setLoadingComplete] = useState(false);

	useEffect(() => {
		const loadingTimeout = setTimeout(() => {
			setLoadingComplete(true);
		}, 1000);

		return () => clearTimeout(loadingTimeout);
	}, []);

	return (
		<div>
			<LoadingBar
				color="#f11946"
				progress={loadingComplete ? 100 : 0}
				onLoaderFinished={() => {}}
			/>
			<Slider />
			{loadingComplete && <MovieList />}
		</div>
	);
};

export default Home;
