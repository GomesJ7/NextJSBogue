import { api } from '../ServiceHelper'

export const fetchMarineAnimalsData = async() => {
  return await api.get("marineAnimals").then((response) => response.data)
}

export const fetchMarineAnimalData = async(id:String) => {
  return await api.get("marineAnimal/"+id).then((response) => response.data)
}

export const deleteMarineAnimal = async(id:String) => {
  return await api.delete("marineAnimal/"+id).then((response) => response.data)
}

export const fetchCreateMarineAnimal = async(data: JSON) => {
  return await api.post("marineAnimal/",data).then((response) => response.data)
}