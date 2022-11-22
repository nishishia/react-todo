import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import { useState } from "react";

export default function App() {
  const [todoText, setTodoText] = useState();
  const [incomplete, setIncomplete] = useState([]);
  const [complete, setComplete] = useState([]);

  const onChangeAdd = (event) => {
    const newText = event.target.value;
    setTodoText(newText);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    setIncomplete([...incomplete, todoText]);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomplete];
    newTodos.splice(index, 1);
    setIncomplete(newTodos);
  };

  const onClickComplete = (index) => {
    setComplete([...complete, incomplete[index]]);

    onClickDelete(index);
  };

  const onClickBack = (index) => {
    const newTodos = [...complete];
    newTodos.splice(index, 1);
    setComplete(newTodos);

    setIncomplete([...incomplete, complete[index]]);
  };

  return (
    <div>
      <InputTodo
        todoText={todoText}
        onChange={onChangeAdd}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        todos={incomplete}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todos={complete} onClick={onClickBack} />
    </div>
  );
}
