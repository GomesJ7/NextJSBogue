import { api } from '../ServiceHelper'

export const fetchCreateLocationData = async(data: any) => {
  return await api.post("location",data).then((response) => response)
}

export const fetchLocationsData = async() => {
  return await api.get("locations").then((response) => response.data)
}
