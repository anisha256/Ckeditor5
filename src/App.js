import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
