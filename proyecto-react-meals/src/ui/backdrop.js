import styles from "../styles/backdrop.module.css";
import StateContext from "../contexts/state";
import actions from "../reducers/actions";
import { useContext } from "react";

function Backdrop() {
	const { dispatch } = useContext(StateContext);

	function closeModal() {
		dispatch({
			type: actions.CLOSE_MODAL,
		});
	}

	return <div className={styles.backdrop} onClick={closeModal} />;
}

export default Backdrop;