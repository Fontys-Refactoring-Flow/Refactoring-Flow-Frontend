import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AssignmentsPage from './components/AssignmentComponents/AssignmentsPage';
import GradesPage from './components/GradesPage';
import UploadProjectPage from './components/UploadProjectPage';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/assignments' element={<AssignmentsPage/>}/>
          <Route path='/upload' element={<UploadProjectPage/>}/>
          <Route path='/grades' element={<GradesPage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
