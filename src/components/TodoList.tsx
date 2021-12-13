import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import TodayTime from "./TodayTime";
import ToDo from "./ToDo";
import ToDoOptions from "./ToDoOptions";

const Container = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
`;

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 70vh;
`;

const ToDoList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90%;
  border: 2px solid ${(props) => props.theme.textColor};
  overflow-y: scroll;
`;

function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const toDosValue = useRecoilValue(toDoState);

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(toDosValue));
  }, [toDosValue]);

  return (
    <>
      <h1>To Dos</h1>
      <hr />
      <Container>
        <ToDoListContainer>
          <ToDoOptions />
          <CreateToDo />
          <ToDoList>
            {toDos.map((toDo) => (
              <ToDo key={toDo.id} {...toDo} />
            ))}
          </ToDoList>
        </ToDoListContainer>
        <TodayTime />
      </Container>
    </>
  );
}

export default TodoList;
