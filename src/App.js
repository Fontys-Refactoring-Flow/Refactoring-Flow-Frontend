import './App.css';
import Header from './components/GeneralComponents/Header';
import AboutUs from './components/AboutUs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AssignmentsPage from './components/AssignmentComponents/AssignmentsPage';
import GradesPage from './components/GradesPage';
import HomePage from './components/HomePage';
import Footer from './components/GeneralComponents/Footer';
import AssignmentDetailPage from './components/AssignmentComponents/AssignmentDetailPage';
import UploadMethodList from './components/CodeUploadComponents/UploadMethodList';
import GitUpload from './components/CodeUploadComponents/GitUploadPage';
import FolderUpload from './components/CodeUploadComponents/FolderUploadPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/assignments' element={<AssignmentsPage/>}/>
          <Route path='/upload' element={<UploadMethodList/>}/>
          <Route path='/upload/github' element={<GitUpload gitPlatform='GitHub'/>}/>
          <Route path='/upload/gitlab' element={<GitUpload gitPlatform='GitLab'/>}/>
          <Route path='/upload/folder' element={<FolderUpload/>}/>
          
          <Route path='/grades' element={<GradesPage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/assignment-details' element={<AssignmentDetailPage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
