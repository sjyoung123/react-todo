import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import ToDoOptions from "./ToDoOptions";

function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const toDosValue = useRecoilValue(toDoState);

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(toDosValue));
  }, [toDosValue]);

  return (
    <>
      <div>
        <h1>To Dos</h1>
        <hr />
        <ToDoOptions />
        <CreateToDo />
        <ul>
          {toDos.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
