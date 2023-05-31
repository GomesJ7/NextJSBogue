import styles from '../../styles/Header.module.css'
import { useState } from 'react'


    
const Header = () => {

   const queryhandler = () =>{
        const [query, setQuery] = useState("")
    } 

    return(
        <div className={styles.headers}>
            <a href="/">
              <h1>BOGUE</h1>
            </a>
                <div className={styles.searchBar}>
                    <form action={"/marineAnimals"} method="get">
                        <input type="text" name="name" onChange={queryhandler}/>
                        <button type="submit">Search</button>
                    </form>
                    
                </div>
                
            <button className={styles.userButton}>Connexion</button>
        </div>
        
    )
}

export default Header