import React from "react";
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./styledComponents/header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from  "./Pages/AboutPage.jsx";
import { HomePage } from "./Pages/HomePage";
import { PhotosPage } from "./Pages/PhotosPage";
import { ProjectsPage } from "./Pages/ProjectsPage";

function App() {
  return (
   <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="'*'" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
