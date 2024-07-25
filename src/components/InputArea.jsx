import { useState } from "react";

function InputArea(props) {
  const [value, setValue] = useState("");

  function change(e) {
    let userInput = e.target.value;
    setValue(userInput);
  }

  return (
    <form>
      <input
        onChange={change}
        className="input"
        type="text"
        name="todo"
        required
        placeholder="Enter Todo"
        value={value}
      />
      <button
        type="submit"
        onClick={ (e) => {
          props.done(e, value);
          setValue("")
        }}
      >
        Add
      </button>
    </form>
  );
}

export default InputArea;
