import React, { useState } from "react";
import { useForm } from "react-hook-form";

function TodoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <>
      <div>
        <form>
          <input {...register("toDo")} type="text" placeholder="Write" />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}

export default TodoList;
