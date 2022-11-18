import classes from "./CardTodo.module.css";

const CardTodo = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CardTodo;
