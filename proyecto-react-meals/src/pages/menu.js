import Menu from "../components/menu";
import { useState, useEffect } from "react";
import MenuContext from "../contexts/menu";
import useHttp from "../hooks/useHttp";

function MenuPage() {
	const [meals, setMeals] = useState([]);

	const { request } = useHttp();

	useEffect(() => {
		async function fetchMeals() {
			const data = await request({ url: "http://localhost:8080/meals" });
			setMeals(data || []);
		}

		fetchMeals();
	}, [request]);

	return (
		<MenuContext.Provider value={meals}>
			<Menu />
		</MenuContext.Provider>
	);
}

export default MenuPage;