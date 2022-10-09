import styles from "../styles/button.module.css";
import classNames from "classnames";

function Button({ children, outline, square, onClick }) {
	return (
		<button
			className={classNames(
				styles.btn,
				outline ? styles["btn-outline"] : null,
				square ? styles["btn-square"] : null
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;