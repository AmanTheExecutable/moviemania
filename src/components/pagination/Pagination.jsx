import React from "react";

function Pagination({ page, setPage, totalPages }) {
	const handlePageChange = newPage => {
		if (newPage >= 1 && newPage <= totalPages) {
			setPage(newPage);
		}
	};
	const generatePaginationButtons = () => {
		const buttons = [];
		const maxButtonsToShow = 10;
		const middleButton = Math.ceil(maxButtonsToShow / 2);

		let startButton = 1;
		let endButton = totalPages;

		if (totalPages > maxButtonsToShow) {
			if (page > middleButton) {
				startButton = Math.min(
					page - middleButton + 1,
					totalPages - maxButtonsToShow + 1
				);
				endButton = Math.min(page + middleButton - 1, totalPages);
			} else {
				endButton = maxButtonsToShow;
			}
		}

		for (let i = startButton; i <= endButton; i++) {
			buttons.push(
				<button
					key={i}
					onClick={() => handlePageChange(i)}
					className={page === i ? "active" : ""}
				>
					{i}
				</button>
			);
		}

		return buttons;
	};

	return (
		<>
			<button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
				Previous
			</button>
			{generatePaginationButtons()}
			<button
				onClick={() => handlePageChange(page + 1)}
				disabled={page === totalPages}
			>
				Next
			</button>
		</>
	);
}

export default Pagination;
