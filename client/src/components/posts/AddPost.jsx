import React, { useContext } from "react";
import { UserContext } from '../../App'

const AddPost = ({ setIsAdd, getPosts }) => {
    const [currentUser, setCurrentUser] = useContext(UserContext);

    const addNewPost = (element) => {
        element.preventDefault();
        const post = {
            userId: currentUser.id,
            title: element.target[0].value,
            body: element.target[1].value
        }

        fetch(`http://localhost:8080/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => {
            response.ok ? (setIsAdd(false),getPosts()) : alert("oops somthing went wrong... please try again!")
        })
        
    }



    return (
        <>
            <h1>add</h1>

            <form onSubmit={addNewPost}>
                <input type="text" placeholder="title..." /><br />
                <textarea cols="25" rows="8" placeholder="body..." /><br />
                <input type="submit" value='add post' /><br />
            </form>

        </>
    )
}


export default AddPost