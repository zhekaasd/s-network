import React from "react";
import "./post.scss";
import avatar from "./../../other/images/1920x.webp"

export function Post() {
    return <div className='post'>
        <div style={{display: "flex"}}>
            <img style={{width: '35px', height: '35px', borderRadius: '100%', marginRight: "10px"}} src={avatar} alt="photo"/>
            <div style={{display: "flex", flexDirection: "column", padding: 0}}>
                <span style={{display: "inline-block"}}><b>John Doe</b></span>
                <span>{new Date().toLocaleTimeString()}</span>
            </div>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ducimus in iste itaque, laboriosam
                laborum maiores nisi
                quasi voluptatum! Architecto aut corporis eos eum perferendis qui quo! Aut, perferendis,
                reprehenderit.</p>
        </div>
        <div style={{width: "100%", padding: 0, border: "1px solid burlywood", margin: "5px 0"}}></div>
        <div>
            <span style={{marginRight: "10px"}}>like {Math.floor(Math.random() * 100)}</span>
            <span>comment {Math.floor(Math.random() * 10)}</span>
        </div>
    </div>
}