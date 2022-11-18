import { Fragment } from "react";
import CardTodo from "./components/CardTodo";
import MySimpleList from "./components/MySimpleList";

function App() {
  return (
    <Fragment>
      <CardTodo>
        <MySimpleList />
      </CardTodo>
    </Fragment>
  );
}

export default App;
