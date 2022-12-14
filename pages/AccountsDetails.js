import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const AccountDetails = () => {

    const id = JSON.parse(localStorage.getItem("id"));
   const [utilisateur, setUtilisateur] = useState({});
   const [newPassword,setNewPassword] = useState("");
   const [isEditing,setIsEditing] = useState(false);
    const history = useHistory();
    
    const handleEdit = () => {
        const data = {
            firstName : utilisateur.firstName,
            lastName : utilisateur.lastName,
            email : utilisateur.email,
            dateBorn : utilisateur.dateBorn,
            address : utilisateur.address,
            password: newPassword ? newPassword : utilisateur.password,
          };
    
         
        axios.put("http://localhost:3005/users/" + id, data)
        .then(() => {
            utilisateur.password = newPassword;
            setIsEditing(false);
        })
    }

   const handleDelete = () => {
    axios.delete(`http://localhost:3005/users/${id}`); 
        history.push("/") ;
   }
   
   const logOut = () => {
        localStorage.removeItem('id');
        history.push("/") ;
   }

    useEffect(() => {
        axios.get(`http://localhost:3005/users/${id}`).then((res) => setUtilisateur(res.data));
    },[id]);
    console.log(utilisateur);
    console.log(utilisateur.firstName); 
    return (
        <div className="account-details" >
            <div className="container-logo">
                <div className="left">
                    <img src="logoCollege.jpg" alt="logo" />
                    <button onClick={() => history.goBack()} className="btn btn-secondary">Back</button>
                </div>
                <div className="right">
                    <button onClick={() => history.push("/home")} className="btn btn-primary">Home</button>
                    <button onClick={logOut} className="btn btn-danger">Log out</button>
                </div>
           </div>
            <div className="information">
                <h3>Account details</h3>
                <p><u>Fist name</u>: {utilisateur.firstName} </p> 
                <p><u>Last name</u>: {utilisateur.lastName} </p>
                <p><u>Email name</u>: {utilisateur.email} </p>
                <p><u>Adress name</u>: {utilisateur.address} </p>
                <p><u>Date of birth</u>: {utilisateur.dateBorn} </p>
                <p><u>Password</u>: {utilisateur.password} </p>
              
                {isEditing  && 
                     <input
                     type="password"
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                     />
                   }
                <div className="btn">
                 
                    {isEditing ? (
                       <button onClick={handleEdit} className="btn btn-primary">Valide modification</button> 
                    ):(
                         <button  onClick={() => setIsEditing(true)} className="btn btn-primary">Modify account</button>
                          
                    )}
                    {isEditing ? (
                        <button onClick={() => setIsEditing(false)} className="btn btn-danger">Cancel modification</button>
                    ):(
                        <button onClick={() => {
                            if(window.confirm("voulez vous vraiment supprimer votre compte")){
                                         handleDelete();
                                }
                             }} className="btn btn-danger">Delete account</button>
                    ) }
                   
                </div>
            </div>
            
        </div>
    )
}

export default AccountDetails;