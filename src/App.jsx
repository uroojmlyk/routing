import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';
import Stats from './pages/dashboard/Stats';
import Posts from './pages/dashboard/Posts';
import PostDetail from './pages/dashboard/PostDetail';
function App() {
  return (
    <div>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Parent Route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested Routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="stats" element={<Stats />} />
           <Route path="posts" element={<Posts />} />
           <Route path="posts/:id" element={<PostDetail />} /> 
        </Route>
      </Routes> </div>
  );
}

export default App;