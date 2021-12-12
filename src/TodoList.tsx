import React, { useState } from "react";

function TodoList() {
  const [toDo, setTodo] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={toDo}
            placeholder="Write"
            onChange={onChange}
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}

export default TodoList;
