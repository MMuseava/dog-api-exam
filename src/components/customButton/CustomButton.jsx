import React, { useState, useEffect } from "react";
import DodCard from "../dogCard/DodCard";

const getBreedName = (dogUrl) => {
	console.log("dogUrl", dogUrl);
	if (!dogUrl) return "";
	const breedName = dogUrl.split("/")[4];
	return breedName;
};

const url = "https://dog.ceo/api/breeds/image/random";
const CustomButton = () => {
	const [dog, setDog] = useState("");
	const [breeds, setBreeds] = useState([]);

	const fetchRandomDog = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setDog(data.message);
		} catch (error) {
			console.log("Error fetching random dog:", error);
		}
	};

	useEffect(() => {
		const fetchBreeds = async () => {
			try {
				const response = await fetch("https://dog.ceo/api/breeds/list/all");
				const data = await response.json();
				const breedsList = Object.keys(data.message);
				setBreeds(breedsList);
			} catch (error) {
				console.log("Error fetching breeds:", error);
			}
		};

		fetchBreeds();
		fetchRandomDog();
	}, []);

	const handleButtonClick = () => {
		fetchRandomDog();
	};

	return (
		<div>
			<select>
				{breeds.map((breed, index) => (
					<option key={index} value={breed}>
						{breed}
					</option>
				))}
			</select>
			<button onClick={handleButtonClick}>Get Dog</button>

			{dog && (
				<div>
					<img src={dog} alt="dog" width={"200px"} />
					<p>{getBreedName(dog)}</p>
				</div>
			)}
		</div>
	);
};

export default CustomButton;
