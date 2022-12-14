import styles from "../styles/menu.module.css";
import Button from "../ui/button";
import MenuContext from "../contexts/menu";
import { useContext, useRef, useEffect, useState} from "react";
import StateContext from "../contexts/state";
import actions from "../reducers/actions";
import { useNavigate } from "react-router-dom";
import { FcPlus } from 'react-icons/fc';
import {
    onGetTasks,
  } from "../database/firebase.js";
function Menu() {
    useEffect(() => {
        // const querySnapshot = await getTasks();
        // querySnapshot.forEach((doc) => {
        //   console.log(doc.data());
        // });
        onGetTasks((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const task = doc.data();
            console.log(task);
          });
        });
      }, []);
    const inputs = useRef([]);
    const meals = useContext(MenuContext);
    const { dispatch } = useContext(StateContext);
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(true);
    function addMeal(index) {
        const meal = meals[index];
        const input = inputs.current[index];
        if (input.value) {
            if(input.value < 0)
            {
                setIsValid(false);
                return;
            }
            else
            {
                setIsValid(true);
                dispatch({
                    type: actions.ADD_MEAL,
                    payload: { meal, quantity: parseInt(input.value) },
                });
            }
            input.value = "";
        }
    }
    // Redirección a nivel de programación
    function goToMeal(id) {
        navigate(`/meal/${id}`);
    }
    return (
        <div id="menu-container" className={styles["menu-container"]}>
            <section className={styles.menu}>
                {meals.map((item, index) => (
                    <article key={item.id}>
                        <div className={styles["menu-item"]}>
                            <div className="container">
                                <div className="row">
                                    <div className="col" onClick={() => goToMeal(item.id)}>
                                        <div className="col">
                                            <img className={styles["img-meal"]} src={item.imageURL} alt={"Imagen de "+item.name+" no disponible.".toString()}></img>
                                        </div>
                                        <div className="col">
                                        <h1>{item.name}</h1>
                                        <p>{item.description}</p>
                                        <small>$ {item.price}</small>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div>
                                <div className={`${styles["input-container"]} ${!isValid && styles.invalid}`}>
                                    <span>Cantidad</span>
                                    <input
                                    className="input-style"
                                        type="number"
                                        min="1"
                                        max="20"
                                        ref={(el) => (inputs.current[index] = el)}
                                    />
                                </div>
                                <Button onClick={() => addMeal(index)}><FcPlus size="50px"/></Button>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}
export default Menu;