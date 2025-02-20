import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../Data/Api";

function Home(){
    const navigate = useNavigate();
    const movePage = ()=>{
        navigate('/board')
    }
    const [posts,setPosts]=useState([]);
    const listPosts=async()=>{
        const data=await getPost();
        setPosts(data);
    }
    useEffect(()=>{
        listPosts();
    },[]);

    return(
        <div>
           <div>
                <button onClick={movePage}>글 작성</button>
           </div>

           <div>
            <h2>글 목록</h2>
            <ul>
                    {posts.map((post)=>(
                        <li key={post.id}
                            onClick={()=>navigate(`/board/${post.id}`)}
                        >{post.title}</li>
                ))}

            </ul>
           </div>
           
        </div>
    );
}

export default Home;