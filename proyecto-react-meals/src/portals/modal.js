import Modal from "../ui/modal";
import ReactDOM from "react-dom";

const root = document.getElementById("modal");

function ModalPortal({ children }) {
	return ReactDOM.createPortal(<Modal>{children}</Modal>, root);
}

export default ModalPortal;