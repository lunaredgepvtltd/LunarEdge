import axios from 'axios'
const BASE_URL = 'http://localhost:3000'

export const API = axios.create({
    baseURL : BASE_URL,
    responseType : 'json'
})

export const apiRequest = async({url,method,data})=>{
    console.log('api request')
    try{
        const result = await API({
            url,
            method : method || 'GET',
            data : data,
        })
        return result;
    }
    catch(error){
        console.log('error in apiRequest')
        return {status : 400 , message : 'error in fetching request'}
    }
}

