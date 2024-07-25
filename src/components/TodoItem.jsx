import { useState } from "react";

export default function TodoItem(props) {
  const [done, setDone] = useState(false);
  

  function toggleThrough() {
    setDone((prev) => {
      return !prev;
    });
  }
  return (
    <>
      <div className="item">
        <li className="todo"
          style={{ textDecoration: done ? "line-through" : "none" }}
          id={props.id}
          key={props.id}
        >
          {props.todo}
        </li>
        <div className="toggle">
          <button id={props.id} onClick={toggleThrough} className="click">
            {done ? "❌" : "✔️"}
          </button>
          {done && (
            <input type="checkbox" id={props.id} onClick={props.click} />
          )}
        </div>
      </div>
    </>
  );
}
