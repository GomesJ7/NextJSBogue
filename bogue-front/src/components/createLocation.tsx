import { useState } from 'react';
import { fetchCreateLocationData } from '../services/Locations/locationService'
import styles from  "../../styles/form.module.css"


const CreateLoc = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            let data= {name: name}
            let res = await fetchCreateLocationData(data)
            setMessage(res.statusText)
        } catch (err) {
            console.log(err)
            if (err.response.data.message){
                setMessage(err.response.data.message)
            } else {
                setMessage(err.message);
            }
        }
    };

    return (
        <>
            <h1>création localisation</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="name">Nom</label>
                <input
                    required
                    className={styles.input}
                    type="text"
                    value={name}
                    placeholder="mer noire"
                    onChange={(e) => setName(e.target.value)}
                />
                <button className={styles.submit} type="submit">Créer</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </>
    )
}

export default CreateLoc;