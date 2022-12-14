import React,{useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Acceuil = () => {
    
    const [allUsers,setAllUsers] = useState([]);
    const [emailUsers, setEmailUsers] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
   

    useEffect(() => {
        axios.get(`http://localhost:3005/users?email=${emailUsers}&password=${password}`).then((res) => setAllUsers(res.data));
    },[emailUsers,password]);
 
    console.log(allUsers);
    const handleSubmit = (e) => {

        e.preventDefault();

        if(allUsers.length == 1){
                localStorage.setItem("id", allUsers[0].id);
                history.push("/home");
                
        }else {
            window.alert(" Veuillez entrer des informations correctes ")
        }
       
    }
    
    return (
        <div className="acceuil">
               <img src="logoCollege.jpg" alt="logo" />
               <div className="form-group">
                    <form  className="formulaire" onSubmit={(e) => handleSubmit(e)} >
                        <h1>Login</h1>
                        <div className="champ">
                            <input 
                            type="email"
                            placeholder="Enter email"
                            className="form-control"
                            value={emailUsers}
                            onChange={(e) => setEmailUsers(e.target.value)}
                            required
                            />
                        </div>
                        <div className="champ">
                            <input 
                            type="password"
                            placeholder="Enter password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                        </div>
                        <div className="champ">
                            <input 
                            className="btn btn-success"
                            type="submit"
                            value="Open a session"
                            />
                        </div>
                        <div className="champ">
                            <button onClick={() => history.push("/page-enregistrement") } className="btn btn-primary">Create an account</button>
                        </div>
                        
                    </form>
               </div>
               
        </div>
    )
}

export default Acceuil;