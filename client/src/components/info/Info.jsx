import React, { useContext, useEffect } from "react";
import { UserContext } from '../../App'
import "./info.css"
const Info = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);


  return (
    <>
      <div className="info_item">
        <h1>info</h1>
        <p><span>id:</span> {currentUser.id}</p>
        <p><span>name:</span> {currentUser.name}</p>
        <p><span>email:</span> {currentUser.email}</p>
        <label ><span>address:</span></label>
        <p><span>street:</span> {currentUser.street}</p>
        <p><span>city: </span>{currentUser.city}</p>
        <p><span>zipcode:</span> {currentUser.zipcode}</p>
        <p><span>phone: </span>{currentUser.phone}</p>
        <p><span>website:</span> {currentUser.website}</p>
      </div>
    </>
  )
}
export default Info