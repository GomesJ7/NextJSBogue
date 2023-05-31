import { api } from '../ServiceHelper'

export const fetchUsersData = async() => {
  return await api.get("Users").then((response) => response.data)
}

export const fetchUserData = async(id:String) => {
  return await api.get("User/"+id).then((response) => response.data)
}

export const deleteUser = async(id:String) => {
  return await api.delete("User/"+id).then((response) => response.data)
}

export const fetchCreateUser = async(data: any) => {
  return await api.post("user/register",data).then((response) => response)
}