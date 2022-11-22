const style = {
  backgroundColor: "#c1ffff",
  widows: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <div style={style}>
      <input
        id="add-text"
        placeholder="TODOを入力する"
        value={todoText}
        onChange={onChange}
      />
      <button id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
