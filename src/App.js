
import './App.css';
import CreateAccountPage from './components/CreateAccountPage';
import LoginPage from './components/LoginPage';
import PageAdmin from './components/PageAdmin';
import TabModera from './components/TabModera';
import { Link } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
function App() {
  return (
   
    <Router>
      <div className="App">
        <PArticlePage />
      </div>
    </Router>
  


  );
}

export default App;
