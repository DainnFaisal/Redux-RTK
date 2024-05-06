import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReadPosts from './Components/ReadPosts';
import Headers from './Components/Headers';
import CreatePosts from './Components/CreatePosts';

function App() {
  return (
    <>
      <Router>
        <Headers/>
        <Routes>
          <Route path='/ReadPosts' exact Component={ReadPosts} />
          <Route path='/CreatePost' exact Component={CreatePosts} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
