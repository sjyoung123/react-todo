import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoSelector } from "../atom";

const Options = styled.select`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  border: none;
  margin: 10px 0;
  font-family: Fuzzy Bubbles;
  :hover {
    cursor: pointer;
  }
`;
const Option = styled.option`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  font-family: Fuzzy Bubbles;
`;

function ToDoOptions() {
  const [category, setCategory] = useRecoilState(categoryState);
  const toDos = useRecoilValue(toDoSelector);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as Categories);
  };

  return (
    <Options onInput={onInput} value={category}>
      <Option value={Categories.TO_DO}>To Do({toDos.length})</Option>
      <Option value={Categories.DOING}>Doing({toDos.length})</Option>
      <Option value={Categories.DONE}>Done({toDos.length})</Option>
    </Options>
  );
}

export default ToDoOptions;
