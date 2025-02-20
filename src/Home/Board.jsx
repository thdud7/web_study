import { useState } from "react";
import { createPost} from "../Data/Api";

function Board(){
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();

        const newPost={title,content};
        createPost(newPost);
        setTitle("");
        setContent("");
        window.location.replace('/home');
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <input 
                id="title"
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />                      
                </div>
                <div>
                <input
                id="content"
                type="text"
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                />                    
                </div>

                <button type="submit">
                    등록    
                </button>              
            </form>

            
        </div>
    );
}

export default Board;