import axios from 'axios'
const BASE_URL = `https://todobakend.onrender.com`

const GetAllTodo = (setTodo) => {
    axios.get(BASE_URL)
        .then(({ data }) => {

            console.log("Data --->", data);
            setTodo(data);
        })
        .catch((err) => {
            console.log(err);
        });
};


const AddTodo = (text, setText, setTodo) => {
    axios.post(`${BASE_URL}/save`, { text }).then((data) => {
        setText("")
        GetAllTodo(setTodo)

    }).catch((err) => { console.log(err) })

}

const UpdateTodo = (text, setText, setisupdate, setTodo, todoId) => {
    axios.put(`${BASE_URL}/update`, { text: text, id: todoId }).then((data) => {
        setText("")
        setisupdate(false)
        GetAllTodo(setTodo)
        setText("")

    }).catch((err) => { console.log(err.message) })

}


const deleteTodo = (id, setTodo) => {
    axios.delete(`${BASE_URL}/delete`, { data: { _id: id } }).then(({ data }) => {
        console.log("Deleted Successfully")
        GetAllTodo(setTodo)
    }).catch((err) => {
        console.log(err.message)
    })

}


export { GetAllTodo, AddTodo, UpdateTodo, deleteTodo } 