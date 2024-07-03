import { useState } from "react";
import "./App.css";
import TasksProvider from "./providers/TasksProvider";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { ThemeContext } from "./contexts/themeContext";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Header/>
        <TasksProvider>
          <div className={`min-h-[500px] mt-24 max-w-screen-2xl mx-auto flex justify-center items-center rounded-md ${darkMode ? "dark" : ""}`}>
            <div>
              <h1 className="text-center text-3xl font-semibold my-10">Day off in Kyoto</h1>
              <AddTask />
              <TaskList />
            </div>
          </div>
        </TasksProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
