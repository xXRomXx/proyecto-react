import Backdrop from "../portals/backdrop";
import Modal from "../portals/modal";
import Button from "../ui/button";
import styles from "../styles/cart-modal.module.css";
import StateContext from "../contexts/state";
import { useContext } from "react";
import actions from "../reducers/actions";
import { Link } from "react-router-dom";
import { AiFillMinusCircle } from "react-icons/ai";
import { FcPlus } from 'react-icons/fc';
import 'rc-slider/assets/index.css';


function CartModal() {
	const { state, dispatch } = useContext(StateContext);

	function closeModal(bol) {
		dispatch({
			type: actions.CLOSE_MODAL,
		});
	}

	function cancelarCarrito() {
		closeModal();
		dispatch({
			type: actions.DELETE_MEAL
		})
	}

	function increment(id) {
		dispatch({
			type: actions.UPDATE_MEAL,
			payload: { id, quantity: 1 },
		});
	}

	function decrement(id) {
		dispatch({
			type: actions.UPDATE_MEAL,
			payload: { id, quantity: -1 },
		});
	}

	function validarCantidad(cartItem){
		console.log(cartItem);
		if (cartItem.quantity > 0) {
			decrement(cartItem.meal.id);
		}
	}

	return state.isOpen ? (
		<>
			<Backdrop />
			<Modal>
				<ul className={styles["cart-modal"]}>
					<div className="container">
						<div class="col-11">{state.cart.map((cartItem) => (
						<li>
							<section className={styles["cart-item"]}>
								<article>
									{/*</section><img className={styles["img-meal"]} src={cartItem.meal.imageURL} alt={"Imagen de "+cartItem.meal.name+" no disponible.".toString()}></img>*/}
									<h2>{cartItem.meal.name}</h2>
									<div>
										<h4>$ {cartItem.meal.price}</h4>
										<figure>
											<h4>x {cartItem.quantity}</h4>
										</figure>
									</div>
								</article>
								<article>
									<AiFillMinusCircle
										className={styles["minus-button"]}
										size='40px'
										outline
										square
										onClick={() => validarCantidad(cartItem)}
									>
										-
									</AiFillMinusCircle>
									<FcPlus
										className={styles["plus-button"]}
										size='40px'
										outline
										square
										onClick={() => increment(cartItem.meal.id)}
									>
										+
									</FcPlus>
								</article>
							</section>
						</li>
					))}
					<li>
						<Button outline onClick={closeModal}>
							Cerrar
						</Button>
						<Link to="/checkout" onClick={closeModal}>
							<Button>Ordenar</Button>
						</Link>
						<Button outline onClick={cancelarCarrito}>
							Borrar
						</Button>
					</li>
					</div>
					</div>
					
				</ul>
			</Modal>
		</>
	) : null;
}

export default CartModal;