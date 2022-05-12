import './App.css';
import Header from './components/GeneralComponents/Header';
import AboutUs from './components/AboutUs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AssignmentsPage from './components/AssignmentComponents/AssignmentsPage';
import ProgressPage from './components/ProgressPage';
import UploadProjectPage from './components/CodeUploadComponents/UploadMethodList';
import HomePage from './components/HomePage';
import Footer from './components/GeneralComponents/Footer';
import AssignmentDetailPage from './components/AssignmentComponents/LearningOutcomes';
import UploadMethodList from './components/CodeUploadComponents/UploadMethodList';
import GitUpload from './components/CodeUploadComponents/GitUploadPage';
import FolderUpload from './components/CodeUploadComponents/FolderUploadPage';
import AssignmentInProgress from './components/AssignmentComponents/AssignmentsInProgress';
import Login from './components/LoginComponents/Login';
import CodeFeedbackPage from './components/CodeFeedbackComponents/CodeFeedbackPage';
import LearningOutcomes from './components/AssignmentComponents/LearningOutcomes';


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
          <Route path='/login' element={<Login/>}/>
          <Route path='/learningOutcomes' element={<LearningOutcomes/>}/>

          <Route path='/edit' element={<CodeFeedbackPage/>}/>
          
          <Route path='/upload' element={<UploadProjectPage/>}/>
          <Route path='/progress' element={<ProgressPage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/assignment-details' element={<AssignmentDetailPage/>}/>
          <Route path='/studentassignments' element={<AssignmentInProgress/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
