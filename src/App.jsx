import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AITools from './pages/AITools';
import Insights from './pages/Insights';
import UseCases from './pages/UseCases';
import Community from './pages/Community';
import About from './pages/About';
import BlogPost from './pages/BlogPost'; 
import BlogPostChatbots from './pages/BlogPostChatbots'; 
import BlogPostInjury from './pages/BlogPostInjury'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<AITools />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/post" element={<BlogPost />} />
          <Route path="/post-chatbots" element={<BlogPostChatbots />} />
          <Route path="/post-injury" element={<BlogPostInjury />} />
          <Route path="/usecases" element={<UseCases />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
