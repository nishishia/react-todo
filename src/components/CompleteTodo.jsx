export const CompleteTodo = (props) => {
  const { todos, onClick } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul id="complete-list">
        {todos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
