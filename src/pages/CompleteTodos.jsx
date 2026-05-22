import React from "react";
import NavBar from "../components/NavBar";
import CompletedTodoList from "../components/CompletedTodoList";
import { getLoginInfo } from "../utils/LoginInfo";
import custom_axios from "../axios/AxiosSetup";
import { ApiConstants } from "../api/ApiConstants";
import { toast } from "react-toastify";

const CompeletedTodos = () => {
  const [todos, setTodos] = React.useState([]);

  const getAllCompletedTodos = async () => {
    const userId = getLoginInfo()?.sub;
    if (userId != null) {
      const response = await custom_axios.get(ApiConstants.TODO.FIND_COMPLETED(userId), { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
      setTodos(response.data.data);
    } else {
      toast.info("Sorry you are not authenticated");
    }
  };

  React.useEffect(() => {
    const fetchCompletedTodos = async () => {
      await getAllCompletedTodos();
    };
    fetchCompletedTodos();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <h1 className=" text-center text-5xl p-4">Completed Todos</h1>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <CompletedTodoList
                key={todo.id}
                dateTime={todo.date}
                deleteTodo={async () => {
                  const response = await custom_axios.delete(ApiConstants.TODO.DELETE(todo.id), { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
                  getAllCompletedTodos();
                  toast.success(response.data.message || "Todo Deleted Successfully!!");
                }}
                id={todo.id}
                todo={todo.title}
              />
            ))
          ) : (
            <span className="text-gray-500 text-xl">No Completed Todos Found!!</span>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CompeletedTodos;