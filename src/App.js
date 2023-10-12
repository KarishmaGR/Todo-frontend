import { useEffect, useState } from "react";
import Todos from "./component/Todos";
import { GetAllTodo, UpdateTodo, AddTodo, deleteTodo } from "./Utils/ApiConnector";


function App() {
  const [isupdate, setisupdate] = useState(false)
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])
  const [todoId, setTodoId] = useState("")

  useEffect(() => {
    GetAllTodo(setTodo)
  }, [])

  const updateMode = (id, text) => {
    setisupdate(true)
    setText(text)
    setTodoId(id);

  }


  return (
    <div className="w-screen h-screen">
      <div className=" bg-richblack-900  w-screen min-h-full flex  justify-center   ">
        <div className=" border-richblack-500 shadow-sm shadow-richblue-400 flex mobile:flex-col  min-h-min rounded-md border px-10 my-16 h-auto ">
          <div className="flex laptop:flex-row desktop:flex-row gap-3  my-12 h-12 mobile:flex-col  ">
            <input className=" outline-none border px-5 py-3 border-richblack-400 rounded-md font-semibold  capitalize "
              type="text" name="text" id="" placeholder="Add Todo" onChange={(e) => setText(e.target.value)} value={text} />
            <button className=" bg-caribbeangreen-400  px-5 rounded-md mobile:py-2 font-semibold text-xl "
              onClick={isupdate ?
                () => UpdateTodo(text, setText, setisupdate, setTodo, todoId) :
                () => AddTodo(text, setText, setTodo)}>
              {isupdate ? "Update" : "Add"}</button>
          </div>
          <div>
            {todo.length === 0 ? (
              <div className=" my-10 flex justify-center items-center mobile:flex laptop:flex laptop:justify-center laptop:items-center mobile:justify-center mobile:items-center">
                <p className=" text-3xl font-semibold text-caribbeangreen-500  ">Nothing To Do</p>
              </div>

            )

              : (
                todo.map((item) => {
                  return <Todos text={item.text} key={item._id}
                    updateMode={() => updateMode(item._id, item.text)}
                    deleteTodo={() => deleteTodo(item._id, setTodo)}
                  />
                })

              )

            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
