import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Topic from './pages/Topic';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:id" element={<Topic />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
