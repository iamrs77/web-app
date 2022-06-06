import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>The Web App</h1>
        <div className="links">
          <a href="/" style={{
            color: 'white',
            backgroundColor: '#275ae6',
            borderRadius: '4px' 
          }}>Home</a>
        </div>
      </nav>

      <div className='content'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
      </div>

    </div>
  );
}

export default App;
