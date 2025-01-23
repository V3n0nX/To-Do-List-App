import React from "react";
import tickIcon from "../assets/tick.png";
import notTickIcon from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoItems = ({ id, text, deleteBtn, isComplete, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img className="w-7" src={isComplete ? tickIcon : notTickIcon} alt="" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <img
        className="w-4 cursor-pointer"
        src={deleteIcon}
        alt=""
        onClick={() => deleteBtn(id)}
      />
    </div>
  );
};

export default TodoItems;
