import './App.css';
import Header from './components/GeneralComponents/Header';
import AboutUs from './components/AboutUs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AssignmentsPage from './components/AssignmentComponents/AssignmentsPage';
import UploadProjectPage from './components/CodeUploadComponents/UploadMethodList';
import HomePage from './components/HomePage';
import Footer from './components/GeneralComponents/Footer';
import UploadMethodList from './components/CodeUploadComponents/UploadMethodList';
import GitUpload from './components/CodeUploadComponents/GitUploadPage';
import FolderUpload from './components/CodeUploadComponents/FolderUploadPage';
import AssignmentInProgress from './components/AssignmentComponents/AssignmentsInProgress';
import Login from './components/LoginComponents/Login';
import Course from './components/CourseComponents/Course';
import CodeFeedbackPage from './components/CodeFeedbackComponents/CodeFeedbackPage';
import AssignmentWorkspace from './components/AssignmentComponents/AssignmentWorkspace';
import {AuthProvider, useAuth} from "./components/context/AuthContext";
import AuthorizedRoute from "./components/security/AuthorizedRoute";
import PrivateRoute from "./components/security/PrivateRoute";


function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Course' element={<PrivateRoute><Course/></PrivateRoute>}/>
          <Route path='/assignments' element={<PrivateRoute><AssignmentsPage/></PrivateRoute>}/>
          <Route path='/upload' element={<PrivateRoute><UploadMethodList/></PrivateRoute>}/>
          <Route path='/upload/github' element={<PrivateRoute><GitUpload gitPlatform='GitHub'/></PrivateRoute>}/>
          <Route path='/upload/gitlab' element={<PrivateRoute><GitUpload gitPlatform='GitLab'/></PrivateRoute>}/>
          <Route path='/upload/folder' element={<PrivateRoute><FolderUpload/></PrivateRoute>}/>
          <Route path='/upload' element={<PrivateRoute><UploadProjectPage/></PrivateRoute>}/>
          {/* <Route path='/progress' element={<ProgressPage/>}/> */}
          <Route path='/about' element={<PrivateRoute><AboutUs/></PrivateRoute>}/>
          {/* <Route path='/assignment-details' element={<AssignmentDetailPage/>}/> */}
          <Route path='/studentassignments' element={<PrivateRoute><AssignmentInProgress/></PrivateRoute>}/>
          <Route path='/assignment/:codeId' element={<PrivateRoute><AssignmentWorkspace/></PrivateRoute>}/>
          <Route path='/edit' element={<PrivateRoute><CodeFeedbackPage/></PrivateRoute>} />
          {/* <Route path='/learning_outcomes' element={<LearningOutcomes/>}/> */}
        </Routes>
        <Footer />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
