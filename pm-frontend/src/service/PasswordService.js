import axios from "axios";

const BASE_URL= "http://localhost:8080/passwords";

export default BASE_URL;
export const listPasswords =()=> axios.get(BASE_URL);
export const  addPassword=(pass)=> axios.post(BASE_URL,pass);
export const  getPassword=(id)=> axios.get(BASE_URL + "/" + id);
export const  updatePassword=(id,pass)=> axios.put(BASE_URL + "/" + id,pass);
export const  deletePassword=(id)=> axios.delete(BASE_URL + "/" + id);