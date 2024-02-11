import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./pages/movie/movie";
import MovieList from "./components/MovieList/movie-list";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home";
import SearchList from "./components/SearchList/search-list";
import TvList from "./components/TvList/tv-list";
import Tv from "./pages/tv/tv";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<h1 style={{ color: "Red" }}>Error</h1>} />
				<Route path="movie/:id" element={<Movie />} />
				<Route path="movies/:type" element={<MovieList />} />
				<Route path="movies/search/:query" element={<SearchList />} />
				<Route path="tv/" element={<TvList />} />
				<Route path="tv/:id" element={<Tv />} />
			</Routes>
		</BrowserRouter>
	</>
);
