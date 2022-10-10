import { useContext } from "react";
import { useParams } from "react-router-dom";
import StateContext from "../contexts/state";
import useHttp from "../hooks/useHttp";
import actions from "../reducers/actions";
import { useEffect, useState } from "react";

function Meal() {
	const { id } = useParams();
	const { dispatch, state } = useContext(StateContext);

	//const { meal, setMeal } = useState();

	const { request } = useHttp();

	useEffect(() => {

        const BASE_URL = "https://react-http-e1a33-default-rtdb.firebaseio.com/";

        const fetchMeal = async () => {

            const url = `${BASE_URL}/dishes.json?orderBy="$key"&startAt="${id}"&endAt="${id}"`;

            const data = await request({ url });
			//setMeal(data[0].name);

            dispatch({

                type: actions.SET_MEAL,

                payload: data,

            });
			console.log(state.meal[0].name);

        };



        fetchMeal();

    }, [request]);

	return (
		<>
		<h1>{state.meal[0].name}</h1>
		<h4>{state.meal[0].description}</h4>
		</>
	)
	
}

export default Meal;