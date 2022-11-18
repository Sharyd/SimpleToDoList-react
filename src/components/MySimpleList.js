import classes from "./MySimpleList.module.css";
import { useEffect, useState } from "react";
const MySimpleList = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(
    localStorage.getItem("value") === null
      ? localStorage.setItem("value", JSON.stringify([]))
      : JSON.parse(localStorage.getItem("value"))
  );

  console.log(result);
  useEffect(() => {
    if (localStorage.getItem("value") === undefined) return;
  }, []);

  const submitValueHandler = (e) => {
    e.preventDefault();

    if (value.trim() === "") return;
    setResult((prev) => [
      ...prev,
      {
        value: value,
        id: new Date().toISOString(),
      },
    ]);
    setValue("");
  };

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(result));
  }, [result]);

  const removeItem = (id) => {
    setResult(result.filter((result) => result.id !== id));
  };

  const deleteAllHandler = () => {
    setResult([]);
    localStorage.clear();
  };
  console.log(result);
  return (
    <form className={classes.form} onSubmit={submitValueHandler}>
      <h2>Simple toDo List</h2>
      <label htmlFor="text">Write your ToDo</label>
      <input
        id="text"
        placeholder="ToDoList"
        value={value}
        name="text"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button>Send</button>
      <ul className={classes.valueContainer}>
        {result?.map((result) => (
          <li
            className={classes.value}
            key={result.id}
            onClick={() => removeItem(result.id)}
          >
            {result.value}
          </li>
        ))}
      </ul>
      {result?.length >= 1 && (
        <button onClick={deleteAllHandler}>Delete All</button>
      )}
    </form>
  );
};

export default MySimpleList;
