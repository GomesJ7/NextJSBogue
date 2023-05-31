import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { fetchCreateLocationData } from '../services/Locations/locationService'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { fetchLocationsData } from '../services/Locations/locationService';
import { fetchCreateMarineAnimal } from "../services/MarineAnimals/marineAnimalsService";
import styles from  "../../styles/form.module.css"

const Create_Animal = () => {
    const { register, handleSubmit, control } = useForm();
    const [message, setMessage] = useState("");
    const [options_locations, setOptions_locations] = useState([])

    const onSubmit = async (data:any) => {
        data.locations = data.locations.map((loc:any) => loc.value)
        console.log(data.locations)
        try {
            let res = await fetchCreateMarineAnimal(data)
            setMessage("Animal créé")
        } catch (err:any) {
            console.log(err)
            if (err.response.data.message){
                setMessage(err.response.data.message)
            } else {
                setMessage(err.message);
            }
        }
    };


    useEffect(() => {
        fetchLocationsData().then((response) => {
            setOptions_locations(response.map(location => ({
                "value": location._id,
                "label": location.name

            })))
        })
    }, []);

    return (
        <>
            <h1>Création d'un animal</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Nom</label>
                <input className={styles.input} {...register("name", { required: true })} />
                <label htmlFor="class">Classe</label>
                <input className={styles.input} {...register("class", { required: true })} />
                <label htmlFor="latinName">Nom latin</label>
                <input className={styles.input} {...register("latinName", { required: true })} />
                <label htmlFor="img">Source image</label>
                <input className={styles.input} {...register("img", { required: true })} />
                <label htmlFor="minSize">Taille minimum</label>
                <input className={styles.input} {...register("minSize", { required: true })} />
                <label htmlFor="maxSize">Taille maximum</label>
                <input className={styles.input} {...register("maxSize", { required: true })} />
                <label htmlFor="locations">Localisation(s)</label>
                <Controller
                    name="locations"
                    control={control}
                    render={({ field: { onChange, value, } }) => (
                        <Select
                            className={styles.input}
                            instanceId="locations"
                            options={options_locations}
                            value={value}
                            onChange={onChange}
                            closeMenuOnSelect={false}
                            isMulti
                        />
                    )}
                />

                <input className={styles.submit} type="submit" />
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </>
    );
}

export default Create_Animal;
