import React, {  useEffect ,useContext} from "react";

import { UserContext } from '../../App'
// import Style from './todosStyle.module.css'
const AddTodo = ({ setIsAdd, getTodos }) => {

    const [currentUser, setCurrentUser] = useContext(UserContext);

    

    const addNewTodo = (element) => {

        element.preventDefault();
        const todo = {
            userId: currentUser.id,
            title: element.target[0].value,
            // completed: element.target[1].checked
            completed: false
        }
        console.log(todo);

        fetch('http://localhost:8080/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
            .then(response => {
                (!response.ok) ? alert("oops somthing went wrong... please try again!") : (setIsAdd(false), getTodos())
            })

    }
    return (
        <>
 
        <form onSubmit={addNewTodo} >
                <input type="text" placeholder="title..." /><br />
                <input type="submit" value='+' /><br />

            </form>
        </>
    )
}
export default AddTodo