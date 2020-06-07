import React, {useState, useEffect} from 'react';
import Buttons from './Buttons';
import Overlay from "./Overlay";
import TodoList from './TodoList';
import Form from './Form';
import AppHeader from './AppHeader';
import {Context} from './context';

function App() {
  const dataCond = JSON.parse(localStorage.getItem("todoData")) || [];
  const [todoData, setTodoData] = useState(dataCond);

  const formCond = localStorage.getItem("formVisible") || true;
  const [formVisible, setFormVisible] = useState(formCond === "true" || formCond === true);

  const [inputValue, setInputValue] = useState("");

  const tipsCond = localStorage.getItem("tipsVisible") || false;
  const [tipsVisible, setTipsVisible] = useState(tipsCond === "true");

  const onFormSubmit = ({key}) => {
    if (key === "Enter") {
      if (inputValue.trim()) {
        if (todoData[0]) {
          const newArray = [...todoData];
          newArray.push({label: inputValue, done: false, id: newArray.slice(-1)[0].id + 1});
          setTodoData(newArray);
          setInputValue("");
        } else {
          const newArray = [...todoData];
          newArray.push({label: inputValue, done: false, id: 1});
          setTodoData(newArray);
          setInputValue("");
        }
      } else {
        setInputValue("");
      }
    }
  };

  const onInputChange = ({target: {value}}) => {
    setInputValue(value);
  };

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  const clearAllList = () => {
    setTodoData([]);
  };

  const onToggleDone = id => {
    let newArray = [...todoData];
    newArray.find((value, idx) => {
      if (value.id === id) {
        newArray[idx].done = !newArray[idx].done;
      }
      return value;
    });
    setTodoData(newArray);
  };

  const removeTodoItem = id => {
    setTodoData(todoData.filter(el => el.id !== id));
  };

  const saveTodoList = () => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  };

  useEffect(() => {
    localStorage.setItem("formVisible", formVisible.toString());
  }, [formVisible]);

  useEffect(() => {
    localStorage.setItem("tipsVisible", tipsVisible.toString());
  }, [tipsVisible]);

  return (
    <Context.Provider value={{
        onFormSubmit,
        inputValue,
        onInputChange,
        todoData,
        formVisible,
        toggleForm,
        clearAllList,
        setTipsVisible,
        tipsVisible,
        onToggleDone,
        removeTodoItem,
        saveTodoList
    }}>
      <div id="todo">
        <AppHeader />
        <Form />
        <TodoList />
        <Buttons />
        <Overlay />
      </div>
    </Context.Provider>
  );
}

export default App;
