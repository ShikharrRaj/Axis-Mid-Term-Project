import './App.css';
import AddEmp from './components/AddEmp';
import AddUser from './components/AddUser';
import WebsiteNavigation from './components/WebsiteNavigation';
import Emplist from './components/Emplist';
import UserLogin from './components/UserLogin';
import UpdateEmp from './components/UpdateEmp';
import DeleteEmp from './components/DeleteEmp';
import { Route,Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import EmpView from './components/EmpView';
import Home from './components/Home';
import UpdateByUser from './components/UpdateByUser'
 
function App() {
  return (
    <div>
      
      <WebsiteNavigation/>
     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AddUser" element={<AddUser/>} />
      <Route path="/UpdateEmp" element={<UpdateEmp/>} />
      <Route path="/DeleteEmp" element={<DeleteEmp/>} />
      <Route path="/UserLogin" element={<UserLogin/>} /> 
      <Route path="/UpdateByUser" element={<UpdateByUser />} />
      <Route path="/EmpView" element={<EmpView/>} />
      <Route path="/AddEmp" element={<AddEmp/>} />
      <Route path="/Emplist" element={<Emplist/>} />
      <Route path="/SearchBar" element={<SearchBar/>} />
      <Route path="/UserProfile" element={<UserProfile/>} />
       
      </Routes>
      
    </div>
  );
}


export default App;
   