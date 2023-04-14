import React from "react";
import Posting from "./Posting";
import { postings } from "../postings";

export default function Gallery() {
    return <div className="gallery">
        <h1>Muh Gallery</h1>
        {
        postings.map(function(post) {
            return <Posting post={post} /> 
        })
    }
    </div>
}