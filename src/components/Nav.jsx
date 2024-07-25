import { useState, useEffect } from "react";

function Nav() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      let app = document.getElementById("App");
      app.classList.add("dark");
      document.body.style.background = "#1a1a19";
    } else {
      document.getElementById("App").classList.remove("dark");
      document.body.style.background = "#f1ab66";
    }
  }, [theme]);

  function changeTheme() {
    setTheme((prev) => {
      return !prev;
    });
  }
  return (
    <>
      <nav>
        <li className="nav">
          <h2
            className="emoji"
            aria-label="toggle dark mode"
            onClick={changeTheme}
          >
            {theme ? "☀️" : "🌑"}
          </h2>
        </li>
      </nav>
    </>
  );
}

export default Nav;
