import styles from "../styles/navbar.module.css";
import StateContext from "../contexts/state";
import { useContext } from "react";
import actions from "../reducers/actions";
import { Link } from "react-router-dom";

function Navbar(){

    const { state, dispatch } = useContext(StateContext);
	const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    function openModal() {
		dispatch({
			type: actions.OPEN_MODAL,
		});
	}

    return (
        <nav className={styles.navbar}>
            <Link to="/menu" className="nav-link">
				<h2>React Alimentos</h2>
			</Link>
			<figure onClick={openModal}>
				<span>Carrito</span>
				<small>{total}</small>
			</figure>
        </nav>
    );
}

export default Navbar;