import {
  faCheckCircle,
  faExclamationCircle,
  faSyncAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atom";

const ToDoItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const SpanText = styled.span`
  margin-right: 20px;
  max-width: 70%;
  overflow-x: scroll;
`;

const BtnContainer = styled.div``;

const ToDoBtn = styled.button`
  border: none;
  background-color: transparent;
  svg {
    color: ${(props) => props.theme.textColor};
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

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
        (toDos) => toDos.id !== Number(parentElement?.parentElement?.id)
      );

      return deletedToDos;
    });
  };
  return (
    <ToDoItem id={id as any}>
      <SpanText>{text}</SpanText>
      <BtnContainer>
        {category !== Categories.DOING && (
          <ToDoBtn name={Categories.DOING} onClick={onClick}>
            <FontAwesomeIcon icon={faSyncAlt} />
          </ToDoBtn>
        )}
        {category !== Categories.TO_DO && (
          <ToDoBtn name={Categories.TO_DO} onClick={onClick}>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </ToDoBtn>
        )}
        {category !== Categories.DONE && (
          <ToDoBtn name={Categories.DONE} onClick={onClick}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </ToDoBtn>
        )}
        <ToDoBtn onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </ToDoBtn>
      </BtnContainer>
    </ToDoItem>
  );
}

export default ToDo;
