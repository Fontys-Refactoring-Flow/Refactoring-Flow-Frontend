import './App.css';
import Header from './components/general/Header';
import AboutUs from './components/AboutUs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AssignmentsPage from './components/assignment/AssignmentsPage';
import UploadProjectPage from './components/code/codeUpload/UploadMethodList';
import HomePage from './components/HomePage';
import Footer from './components/general/Footer';
import UploadMethodList from './components/code/codeUpload/UploadMethodList';
import GitUpload from './components/code/codeUpload/GitUploadPage';
import FolderUpload from './components/code/codeUpload/FolderUploadPage';
import AssignmentInProgress from './components/assignment/AssignmentsInProgress';
import Login from './components/login/Login';
import CodeFeedbackPage from './components/code/codeFeedback/CodeFeedbackPage';
import AssignmentWorkspace from './components/assignment/AssignmentWorkspace';
import {AuthProvider} from "./components/context/AuthContext";
import PrivateRoute from "./components/security/PrivateRoute";
import GitHubCallback from "./components/code/codeUpload/github/GitHubCallback";


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
          <Route path='/github/callback' element={<PrivateRoute><GitHubCallback/></PrivateRoute>}/>
          <Route path='/assignment/:assignmentId' element={<PrivateRoute><AssignmentWorkspace/></PrivateRoute>}/>
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
