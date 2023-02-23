import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { FilterValuesType } from "./App";
import s from "./Todolist.module.css";

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string) => void;
  changeFilter: (value: FilterValuesType) => void;
  addTask: (newTaskTitle: string) => void;
};

export function Todolist(props: PropsType) {
  const [title, setTitle] = useState("");
  // const [error, setError] = useState("");

  const onClickButtonHandler = () => {
    if (title.trim() !== "") {
      props.addTask(title);
      setTitle("");
    }
  };
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onChangeKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickButtonHandler();
    }
  };
  const tsarChangeFilter = (value: FilterValuesType) => {
    props.changeFilter(value);
  };
  const removeButtonHandler = (taskId: string) => {
    props.removeTask(taskId);
  };
  const mappedTasks = props.tasks.map((t) => {
    return (
      <li key={t.id}>
        <input type="checkbox" checked={t.isDone} />
        <span>{t.title}</span>
        <button onClick={() => removeButtonHandler(t.id)}>x</button>
      </li>
    );
  });

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          className={s.error}
          onChange={onChangeInputHandler}
          value={title}
          onKeyDown={onChangeKeyDownHandler}
        />
        <button onClick={onClickButtonHandler}>+</button>
      </div>
      <ul>{mappedTasks}</ul>
      <div>
        <button onClick={() => tsarChangeFilter("all")}>All</button>
        <button onClick={() => tsarChangeFilter("active")}>Active</button>
        <button onClick={() => tsarChangeFilter("completed")}>Completed</button>
      </div>
    </div>
  );
}
