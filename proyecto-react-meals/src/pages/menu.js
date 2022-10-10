import Menu from "../components/menu";
import { useState, useEffect } from "react";
import MenuContext from "../contexts/menu";
import useHttp from "../hooks/useHttp";

function MenuPage() {
	const [meals, setMeals] = useState([]);

	const { request } = useHttp();

    useEffect(() => {

        const BASE_URL = "https://react-http-e1a33-default-rtdb.firebaseio.com/";

        const fetchMeals = async () => {



            const url = `${BASE_URL}/dishes.json?orderBy="$key"`;

            const data = await request({ url });

            setMeals(data || []);

            console.log(data);

        };



        fetchMeals();

    }, [request]);

	return (
		<MenuContext.Provider value={meals}>
			<Menu />
		</MenuContext.Provider>
	);
}

export default MenuPage;