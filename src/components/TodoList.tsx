import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function TodoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [
      { text: toDo, category: "TO_DO", id: Date.now() },
      ...prev,
    ]);
    setValue("toDo", "");
  };

  return (
    <>
      <div>
        <h1>To Dos</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("toDo", { required: "Please write a toDo" })}
            placeholder="Write a toDo"
          />
          <button>Add</button>
        </form>
        <ul>
          {toDos.map((toDo) => (
            <li key={toDo.id}>{toDo.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
