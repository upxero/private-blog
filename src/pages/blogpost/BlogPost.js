import React from 'react';
import posts from '../../data/posts.json';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

function BlogPost() {
    const id = useParams();

    const currentPost = posts.find((post) => {
        return post.id === id.id;
    })

    return (
        <div className="blogpost-container">
            <article>
                <h1>{currentPost.title}</h1>
                <h3>{currentPost.date}</h3>
                <p>{currentPost.content}</p>
            </article>
            <article>
                <Link to="/">Terug naar Home</Link>
            </article>
        </div>
    );
}

export default BlogPost;