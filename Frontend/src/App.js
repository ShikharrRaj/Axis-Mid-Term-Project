import './App.css';
import AddEmp from './components/AddEmp';
import AddUser from './components/AddUser';
import WebsiteNavigation from './components/WebsiteNavigation';
import Emplist from './components/Emplist';
import UserLogin from './components/UserLogin';
import UpdateEmp from './components/UpdateEmp';
import DeleteEmp from './components/DeleteEmp';
import { Route,Routes } from 'react-router-dom';
import img1 from  './images/employee.png'
import SearchBar from './components/SearchBar';

 
function App() {
  return (
    <div>
      <WebsiteNavigation/>
      <Routes>
      <Route path="/AddEmp" element={<AddEmp/>} />
      <Route path="/AddUser" element={<AddUser/>} />
      <Route path="/Emplist" element={<Emplist/>} />
      <Route path="/UpdateEmp" element={<UpdateEmp/>} />
      <Route path="/DeleteEmp" element={<DeleteEmp/>} />
      <Route path="/UserLogin" element={<UserLogin/>} />
      <Route path="SearchBar" element={<SearchBar/>} />
      </Routes>
      <SearchBar/>
      <img src={img1} height={400} width={500} style={{position: 'relative', top: '20px', left: '30px'}} alt=""/>
    </div>
  );
}


export default App;
    // <div className='App'>