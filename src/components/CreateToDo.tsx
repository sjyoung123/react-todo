import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [
      { text: toDo, category: "TO_DO", id: Date.now() },
      ...prev,
    ]);
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
