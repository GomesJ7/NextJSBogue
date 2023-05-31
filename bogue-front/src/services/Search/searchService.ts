import { api } from '../ServiceHelper'

export const fetchSearchAnimalData = async(name:String) => {
    return await api.get("marineAnimals/"+name).then((response) => response.data)
}