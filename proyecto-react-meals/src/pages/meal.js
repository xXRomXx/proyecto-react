import { useContext } from "react";
import { useParams } from "react-router-dom";
import StateContext from "../contexts/state";
import useHttp from "../hooks/useHttp";
import actions from "../reducers/actions";
import { useEffect } from "react";

function Meal() {
	const { id } = useParams();
	const { dispatch, state } = useContext(StateContext);

	const { request } = useHttp();

	useEffect(() => {
		async function fetchMeal() {
			const data = await request({ url: `http://localhost:8080/meals/${id}`});
			dispatch({
				type: actions.SET_MEAL,
				payload: data,
			});
		}

		fetchMeal();
	}, [request]);

	return <h1>{state.meal.name}</h1>;
}

export default Meal;