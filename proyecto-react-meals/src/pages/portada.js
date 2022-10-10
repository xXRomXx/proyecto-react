import styles from "../styles/portada.module.css";
const portadaimg = "https://www.debate.com.mx/__export/1568828029652/sites/debate/img/2019/09/18/shutterstock_626682854_crop1568828006451.jpg_673822677.jpg";
function Portada() {
    return (
        <div id="portada-container" className={styles["portada-container"]}>
            <div className={styles["title"]}>
                <h1>Bienvenido a React Alimentos</h1>
            </div>
            <div className={styles["container-image"]}>
                <img src={portadaimg} alt={"Imagen de portada no disponible.".toString()}></img>
            </div>
            <div className={styles["container-image"]}>
                <a href="http://localhost:3000/menu" className={styles["container-link"]}><h1>Ver menu</h1></a>
            </div>
        </div>
    );
}
export default Portada;