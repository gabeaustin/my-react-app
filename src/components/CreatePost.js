import React, { useState, useEffect } from "react";
import "../App.css"
import Axios from "axios";
import axios from "axios";


export default function CreatePost() {

    // creating STATEs
    const [userName, setUserName] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    // this makes request to the backend
    const submitPost = () => {
        Axios.post("http://localhost:3306/api/create", {userName: userName, title: title, text: text})

        axios.post({userName: "hi", title: "this my title", text: "text long"})
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)})
    };

    

    return (
            <div className="CreatePost">
                <div className="uploadPost border m-5 p-3">
                    <div class="mb-3">
                        <label class="form-label">Author</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Who Wrote It Best" 
                            onChange={(e) => { setUserName(e.target.value); 
                        }}/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Your Title" 
                            onChange={(e) => { setTitle(e.target.value);
                        }}/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Blog Text</label>
                        <textarea 
                            class="form-control" 
                            placeholder="What do you want to blog about?" 
                            onChange={(e) => { setText(e.target.value)
                        }}/>
                    </div>

                    <button className="btn btn-primary" onClick={submitPost}>Submit Post</button>
                </div>
            </div>
    )
}

