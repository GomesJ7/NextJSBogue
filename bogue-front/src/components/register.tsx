import { fetchCreateUser } from "../services/Users/usersService";
import styles from  "../../styles/form.module.css";
import { useState } from 'react';
import { useForm } from 'react-hook-form';





const Create_Users = () => {

const { register, handleSubmit, formState } = useForm();
const [message, setMessage] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

const onSubmit = async(e:any) => {
    e.preventDefault()
    const response = await fetchCreateUser({
        username:username,
        email:email,
        password:password
    })
    console.log (response)
    setMessage(response.statusText)


};

    return (
        <>
            <h1>Inscription</h1>
            <form className={styles.from} onSubmit={onSubmit}>
                <label htmlFor="name">Username</label>
                    <input className={styles.input} type="text" name="name" value={username} onChange={(event) => setUsername(event.target.value)} /><br></br>
                <label htmlFor="mail">Email</label>
                    <input className={styles.input} type="email" name="email" value={email}onChange={(event) => setEmail(event.target.value)} /><br></br> 
                <label htmlFor="password">Mot de passe</label>
                    <input className={styles.input} type="password" name="password" value={password}onChange={(event) => setPassword(event.target.value)} />
                    <input className={styles.submit} type="submit" />
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </>
    )
}

export default Create_Users