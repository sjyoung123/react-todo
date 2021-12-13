import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atom";

function ToDoOptions() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as Categories);
  };

  return (
    <select onInput={onInput} value={category}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
    </select>
  );
}

export default ToDoOptions;
