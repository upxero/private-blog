import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import BlogOverview from "./pages/blogoverview/BlogOverview";
import BlogPost from "./pages/blogpost/BlogPost";

function App() {

    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    function handleAuthentication() {
        toggleIsAuthenticated(!isAuthenticated);
    }

    return (
        <>
            <Navigation isAuthenticated={isAuthenticated} toggleIsAuthenticated={handleAuthentication}/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login toggleIsAuthenticated={handleAuthentication}/>}/>
                <Route path="/blogposts" element={ isAuthenticated ? <BlogOverview /> : <Navigate to="/login"/> } />
                <Route path="/blog/:id" element={ isAuthenticated ? <BlogPost /> : <Navigate to="/login"/> } />
            </Routes>
        </>
    );
}

export default App;
