import { useState } from "react";
import TodoItem from "./TodoItem";
import Nav from "./Nav";
import InputArea from "./InputArea";

function App() {
  let [item, setItem] = useState( () => {
    const set = localStorage.getItem("todo");
    const data = JSON.parse(set);
    return data || []
  });

  localStorage.setItem("todo", JSON.stringify(item))

  function done(e, value) {
    e.preventDefault();

    if (value) {
      setItem((prev) => {
        return [...prev, { id: item.length + 1, todo: value }];
      });
    } else {
      setItem((prev) => {
        return [...prev];
      });
    }
  }

  function click(e) {
    let userId = parseInt(e.target.id);
    console.log(e.target.id);
    let newItem = item.filter((item) => {
      return userId !== item.id;
    });
    setItem(newItem);
  }

  return (
    <>
      <Nav />
      <div className="App" id="App">
        <h1>
          <span>To-do List</span>
        </h1>
        <InputArea done={done} />

        {item.map((list) => {
          return (
            <TodoItem
              id={list.id}
              click={click}
              key={list.id}
              todo={list.todo}
            />
          );
        })}

        <h3 className="totalTodo">Total To-dos: {item.length}</h3>
      </div>
    </>
  );
}

export default App;
