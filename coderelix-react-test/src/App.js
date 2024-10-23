import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration'; // Ensure this is correctly imported
import Post from './components/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/post' element={<Post />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
