import React from "react";

const DodCard = ({ dog, getBreedName }) => {
	return (
		<div>
			<img src={dog} alt="dog" width={"200px"} />
			<p>{getBreedName}</p>
		</div>
	);
};

export default DodCard;
