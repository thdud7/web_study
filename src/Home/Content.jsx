import { useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../Data/Api";
import { useEffect, useState } from "react";

function Content(){
    const {id}=useParams();
    const navigate=useNavigate();
    const [post,setPost]=useState({title:"",content:""});
    
    const getContent=async()=>{
            const data=await getPostById(id);
            setPost(data);
            console.log(data);
        }

    useEffect(()=>{
        getContent();
    },[id]);

    return(
        <div>
            <h2>{post.title}</h2>
            <div>{post.content}</div>
            <button onClick={()=>navigate("/home")}>home</button>
        </div>
    );
}

export default Content;