import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState } from "../atom";

const Options = styled.select`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  border: none;
  margin: 10px 0;
  font-family: Fuzzy Bubbles;
`;
const Option = styled.option`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  font-family: Fuzzy Bubbles;
`;

function ToDoOptions() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as Categories);
  };

  return (
    <Options onInput={onInput} value={category}>
      <Option value={Categories.TO_DO}>To Do</Option>
      <Option value={Categories.DOING}>Doing</Option>
      <Option value={Categories.DONE}>Done</Option>
    </Options>
  );
}

export default ToDoOptions;
