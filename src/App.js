import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ChallengeList from './components/ChallengeList';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AssignmentsPage from './components/AssignmentsPage';
import GradesPage from './components/GradesPage';
import UploadProjectPage from './components/UploadProjectPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<AboutUs/>}/>
          <Route path='/assignments' element={<AssignmentsPage/>}/>
          <Route path='/upload' element={<UploadProjectPage/>}/>
          <Route path='/grades' element={<GradesPage/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
