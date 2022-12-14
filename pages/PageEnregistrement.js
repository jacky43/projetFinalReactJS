import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const PageEnregistrement = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [allUsers,setAllUsers] = useState([]);
    const [errorCorrectPassword,setErrorCorrectPassword] = useState("");
    const [errorEmailUser,setErrorEmailUser] = useState("");
    const [errorPassword,setErrorPassword] = useState("");
    const URL = "http://localhost:3005";
    const history = useHistory();


    useEffect(() => {
        axios.get("http://localhost:3005/users").then((res) => setAllUsers(res.data));
    },[]);

    const handleSubmit = (e) => {

        e.preventDefault();
    
        if(allUsers.filter((user) => user.email.includes(email)).length == 1){
            setErrorEmailUser(true);
            constructor();
        }else if(password.length < 12){
            setErrorPassword(true);
            constructor();
        }else if(password != passwordConfirm){
            setErrorCorrectPassword(true);
            constructor();
        }else{
            axios.post("http://localhost:3005/users",{
                firstName : firstName,
                lastName : lastName,
                email : email,
                dateBorn : date,
                address : address,
                password : password,
                   
            }).then(() => {
                setDate("");
                setAddress("");
                setPassword("");
                setEmail("");
                setFirstName("");
                setLastName("");
                window.alert("votre compte a été créé avec success");
            })
        }
    }
    const constructor = () => {
        setTimeout( () => {
        setErrorEmailUser(false);
        }, 4000
        );
        }

    return (
        <div className="page-enregistrement">
            <img src="logoCollege.jpg" alt="logo" />
               <div className="form-group">
                    <form  className="formulaire"  onSubmit={(e) => handleSubmit(e)} >
                        <h1>Create an account</h1>
                        <div className="champ">
                            <input 
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter first name"
                            className="form-control"
                            required
                            />
                        </div>
                        <div className="champ">
                            <input 
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter last name"
                            className="form-control"
                            required
                            />
                        </div>
                        <div className="champ">
                            <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="form-control"
                            required
                            />
                        </div>
                        {errorEmailUser && <p className='error'> Cette adresse mail existe deja veuillez le changer </p>}
                        <div className="champ">
                            <input 
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="aaaa-mm-jj"
                            className="form-control"
                            required
                            />
                        </div>
                        <div className="champ">
                            <input 
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter address"
                            className="form-control"
                            required
                            />
                        </div>
                        <div className="champ">
                            <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="form-control"
                            required
                            />
                        </div>
                        {errorPassword && <p className='error'> Le mot de passe doit contenir au moins 12 caractéres </p>}
                        <div className="champ">
                            <input 
                            type="password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            placeholder="Enter password confirmation"
                            className="form-control"
                            required
                            />
                        </div>
                        {errorCorrectPassword && <p className='error'> Le mots de passe ne correspondent pas </p>}
                        <div className="champ">
                            <input 
                            className="btn btn-success"
                            type="submit"
                            value="Register"
                            />
                        </div>
                        <div className="champ">
                            <button onClick={() => history.push("/") } className="btn btn-danger">Go to login</button>
                        </div>
                        
                    </form>
               </div>
        </div>
    )
}

export default PageEnregistrement;