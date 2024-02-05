import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import PageRechPage from './components/PageRechPage';
import PageAdmin from './components/PageAdmin';
import ArticlePage from './components/ArticlePage';
import ResultatRechPage from './components/ResultatRechPage';
import FavorisPage from './components/FavorisPage';
import { Link } from 'react-router-dom';
import CreateModeraPage from './components/CreateModeraPage';
import CreateAccountPage from './components/CreateAccountPage';
function App() {
  return (
   <div>  
   <BrowserRouter >
        <Routes >
          {<Route index element ={<LoginPage/>}/> }
          {<Route path="/PageAdmin" element ={<PageAdmin/>}/> }
          {<Route path="/LoginPage" element ={<LoginPage/>}/> }
          { <Route path="/CreateAccountPage" element ={<CreateAccountPage/>}/> }
          {<Route path="/PageRechPage" element ={<PageRechPage/>}/> }
          { <Route path="/CreateModeraPage" element ={<CreateModeraPage/>}/> }
          { <Route path="/ArticlePage" element ={<ArticlePage/>}/> }
          { <Route path="/ResultatRechPage" element ={<ResultatRechPage/>}/> }
          <Route path="/FavorisPage" element ={<FavorisPage/>}/>
        </Routes>
    </BrowserRouter>

   </div>
   

  );
}

export default App;