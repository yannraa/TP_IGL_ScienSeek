import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import PageRechPage from './components/PageRechPage';
import PageAdmin from './components/PageAdmin';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageRechPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<PageAdmin />} />
          <Route path="/articlePage" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;