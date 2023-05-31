import { fetchMarineAnimalData } from "../services/MarineAnimals/marineAnimalsService";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/DetailMarineAnimal.module.css";
import { deleteMarineAnimal } from "../services/MarineAnimals/marineAnimalsService";

const DetailAnimal = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchMarineAnimalData(id).then((response) => {
      setData(response);
    });
  }, []);

  const deleteAnimal = (id) => {
    deleteMarineAnimal(id).then((response) => {
      setData(response);
      window.location.href="/";
    });
  }

  return (
    <>
      {data && (
        <div key={data._id} className={styles.detailAnimal}>
          <div className={styles.nameAnimal}>{data.name}</div>
          <div className={styles.nameLatinAnimal}>{data.latinName}</div>
          <div className={styles.informationsAnimal}>
            <div className={styles.imageDetailMarineAnimal}>
              <Image
                src={data.img}
                alt={data.name}
                layout="fill"
                priority="true"
              />
            </div>
            <div className={styles.rightInformations}>
              <div>Classe: {data.class}</div>
              <div>Taille minimum: {data.minSize}cm</div>
              <div>Taille maximum: {data.maxSize}cm</div>
              <div>Localisations:</div>
              {data.locations.map((location) => {
                return <ul key={location._id}>{location.name}</ul>;
              })}
            </div>
          </div>
          <button className={styles.delete} onClick={()=> deleteAnimal(data._id)}>Supprimer cet animal (action irréversible)</button>
        </div>
      )}
    </>
  );
};

export default DetailAnimal;
