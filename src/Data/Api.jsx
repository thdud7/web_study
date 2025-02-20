import axios from "axios";

const baseUrl="http://localhost:8080/api"

export const createPost=async(data)=>{
    const response=axios.post(`${baseUrl}/posts`,data);
    return response.data;
}

export const getPost=async()=>{
    const response=axios.get(`${baseUrl}/posts`);
    return (await response).data;
}

export const getPostById=async(id)=>{
    const response=axios.get(`${baseUrl}/posts/${id}`)
    return (await response).data;
}