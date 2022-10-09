import Backdrop from "../ui/backdrop";
import ReactDOM from "react-dom";

const root = document.getElementById("backdrop");

function BackdropPortal() {
	return ReactDOM.createPortal(<Backdrop />, root);
}

export default BackdropPortal;