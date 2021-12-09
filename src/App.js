import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './screens/LandingPage';
import StudentDashBoard from './screens/student/StudentDashboard';
import AdminDashBoard from './screens/admin/AdminDashBoard';
import ForgotPassword from './screens/common/ForgotPassword';
import SignUp from './screens/common/SignUp'

import './App.css';

function App() {
  return (
    
    <BrowserRouter>

      <Routes>
     
      <Route path="/" element={<LandingPage/>} />
      <Route path="/StudentDashBoard" element={<StudentDashBoard/>} />
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      


      

      </Routes>

      

    </BrowserRouter>

   
    
  );
}

export default App;
