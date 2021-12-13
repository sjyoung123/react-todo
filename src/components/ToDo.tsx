import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atom";

function ToDo({ text, category, id }: IToDo) {
  let targetIndex: number;

  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as IToDo["category"] };
      const newToDos = [...prev];
      newToDos.splice(targetIndex, 1, newToDo);
      return newToDos;
    });
  };
  const onDelete = (event: React.FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { parentElement },
    } = event;
    setToDos((prevToDos) => {
      const deletedToDos = prevToDos.filter(
        (toDos) => toDos.id !== Number(parentElement?.id)
      );

      return deletedToDos;
    });
  };
  return (
    <li id={id as any}>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ToDo;
