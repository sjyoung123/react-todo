import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atom";

const CreateForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 28%;
  margin-bottom: 10px;
`;

const CreateInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.textColor};
  font-family: Fuzzy Bubbles;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  width: 0;
  transition: all ease-in-out 0.5s;
  &:focus {
    border: 1px solid ${(props) => props.theme.textColor};
    display: flex;
    width: 100%;
    transition: all ease-in-out 0.5s;
  }
`;

const PlusBtn = styled.label`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [{ text: toDo, category, id: Date.now() }, ...prev]);
    setValue("toDo", "");
  };
  return (
    <CreateForm onSubmit={handleSubmit(onSubmit)}>
      <CreateInput
        id="createToDo"
        type="text"
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="Write a To Do"
      />
      <PlusBtn htmlFor="createToDo">
        <FontAwesomeIcon icon={faPlus} />
      </PlusBtn>
    </CreateForm>
  );
}

export default CreateToDo;
