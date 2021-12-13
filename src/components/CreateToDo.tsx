import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atom";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("toDo", { required: "Please write a toDo" })}
        placeholder="Write a toDo"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
