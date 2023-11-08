import { useState } from "react";
import { TodoWrapper } from "./components/TodoWrapper";
import { TodoWrapperLocalStorage } from "./components/TodoWrapperLocalStorage";
import "./App.css";


export default function App() {
  return (
    <TodoWrapperLocalStorage />
  );
}
