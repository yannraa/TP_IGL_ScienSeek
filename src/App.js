

import './App.css';
import CreateAccountPage from './components/CreateAccountPage';
import LoginPage from './components/LoginPage';
import PageAdmin from './components/PageAdmin';
import PageRechPage from './components/PageRechPage';
import { Link } from 'react-router-dom';
import CreateModeraPage from './components/CreateModeraPage';
import { BrowserRouter , Routes , Route } from 'react-router-dom'; 
function App() {
  return (
   <div>  
   <BrowserRouter>
        <Routes>
          <Route index element ={<LoginPage/>}/>
          <Route path="/PageAdmin" element ={<PageAdmin/>}/>
          <Route path="/LoginPage" element ={<LoginPage/>}/>
          <Route path="/CreateAccountPage" element ={<CreateAccountPage/>}/>
          <Route path="/PageRechPage" element ={<PageRechPage/>}/>
          <Route path="/CreateModeraPage" element ={<CreateModeraPage/>}/>
        </Routes>
    </BrowserRouter>

   </div>
   

  );
}

export default App;
