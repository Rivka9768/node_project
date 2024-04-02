import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/Login';
import Register from './components/register/Register';
import './App.css'
import Posts from './components/posts/Posts';
import Todos from './components/todos/Todos';
import Comments from './components/posts/comments/Comments';
import Layout from './components/Layout';
import Error from './components/error';
import Info from './components/info/Info';

export const UserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const user=(data)=>{
    return{
      id: data.id,
      name: data.name,
      email: data.email,
      street: data.address.street,
      city: data.address.city,
      zipcode: data.address.zipcode,
      phone: data.phone,
      website: data.website
    }
  }
  useEffect(() => {
   
    const currntUser = JSON.parse(localStorage.getItem("currentUser"))
    currntUser && fetch(`http://localhost:8080/users/${currntUser.id}`)
      .then(async response => {
        const data = await response.json() ;
        response.ok && setCurrentUser( ()=>user( data ))
      })
  }, []);


  return (
    <>
      <UserContext.Provider value={[currentUser, setCurrentUser]}>
        <Router>
          <Routes >
            <Route path='/' element={<Navigate to={'/login'} />} />
            <Route path='/home/users/:userId' element={<Home />}>
              <Route path="posts" element={<Layout />} >
                <Route index element={<Posts />} />
                <Route path=":postId/comments" element={<Comments />} />
              </Route>
              <Route path='todos' element={<Todos />} />
              <Route path='info' element={<Info/>} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/error' element={<Error />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App

