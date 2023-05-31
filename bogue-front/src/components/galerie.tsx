import styles from "../../styles/Galerie.module.css";
import { fetchMarineAnimalsData } from "../services/MarineAnimals/marineAnimalsService";
import { useEffect, useState } from "react";

const Galerie = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchMarineAnimalsData().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <main className={styles.main} id="Galerie">
      <h1 className={styles.title}>
        Galeries <a>d'Animaux</a>
      </h1>
      <div className={styles.animaux}>
        {data && data.map((animal) => {
            return (
                <a key={animal._id} href={"marineAnimal/"+animal._id} className={styles.animalCase}>
                    <div className={styles.containerImg}>
                        <img className={styles.animalImg} src={animal.img} height="150px" width="150px"></img>
                        <h2 className={styles.animalName}>{animal.name}</h2>
                    </div>

                </a>
            )
        })}
      </div>
    </main>
  );
};

export default Galerie;
