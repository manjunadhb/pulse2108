import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './screens/LandingPage';
import StudentDashBoard from './screens/student/StudentDashboard';
import AdminDashBoard from './screens/admin/AdminDashBoard';
import ForgotPassword from './screens/common/ForgotPassword';
import SignUp from './screens/common/SignUp'
import Home from './screens/student/Home';

import '../src/sass/App.css';
import DailyStausUpdate from './screens/student/DailyStausUpdate';
import Task from './screens/student/Task';
import Messages from './screens/student/Messages';
import CreateRequest from './screens/student/CreateRequest';
import ApplyLeave from './screens/student/ApplyLeave';
import Curriculam from './screens/student/Curriculam';
import LogOut from './screens/student/LogOut';
import Dashboard from './screens/admin/Dashboard';
import Student from './screens/admin/Student';
import Batches from './screens/admin/Batches';
import Holidays from './screens/admin/Holidays';
import Courses from './screens/admin/Courses';
import AppSearchsync from './screens/admin/AppSearchsync';
import Employees from './screens/admin/Employees';
import FeeReceipt from './screens/admin/FeeReceipt';
import NewFeeReceipt from './screens/admin/NewFeeReceipt';
import AdminMessages from './screens/admin/AdminMessages';
import AdminTaskPage from './screens/admin/AdminTaskPage';
import Enquiry from './screens/admin/Enquiry';
import Poll from './screens/admin/Poll';
import Notice from './screens/admin/Notice';
import IndividualStudent from './screens/admin/IndividualStudent';
import Batch from './screens/admin/Batch';
import Custom from './screens/admin/Custom';
import Attendence from './screens/admin/Attendence';
import Fee from './screens/admin/Fee';
import Communiction from './screens/admin/Communiction';
import StudentList from './screens/admin/StudentList';
import Ticket from './screens/admin/Ticket';
import Asignment from './screens/admin/Asignment';
import SeetingPage from './screens/admin/SeetingPage';
import AdminLogout from './screens/admin/AdminLogout';
import AdminTask from './screens/admin/AdminTask';


function App() {
  return (
    
    <BrowserRouter>   

      <Routes>
     
      <Route path="/" element={<LandingPage/>} />
      <Route path="/student/StudentDashBoard" element={<StudentDashBoard/>}/>
      <Route path="/common/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/admin/AdminDashBoard" element={<AdminDashBoard/>} />
      <Route path="/common/SignUp" element={<SignUp/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/dsu" element={<DailyStausUpdate/>}/>
      <Route path="/task" element={<Task/>}/>
      <Route path="/messages" element={<Messages/>}/>
      <Route path="/createrequest" element={<CreateRequest/>}/>
      <Route path="/applyleave" element={<ApplyLeave/>}/>
      <Route path="/curriculam" element={<Curriculam/>}/>
      <Route path="/logout" element={<LogOut/>}/>
      <Route path="/dashBoard" element={<Dashboard/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/batches" element={<Batches/>}/>
      <Route path="/holidays" element={<Holidays/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/appSearch" element={<AppSearchsync/>}/>
      <Route path="/employee" element={<Employees/>}/>
      <Route path="/feereceipt" element={<FeeReceipt/>}/>
      <Route path="/newfeereceipt" element={<NewFeeReceipt/>}/>
      <Route path="/adminMessage" element={<AdminMessages/>}/>
      <Route path="/admintask" element={<AdminTask/>}/>
      <Route path="/enquiry" element={<Enquiry/>}/>
      <Route path="/poll" element={<Poll/>}/>
      <Route path="/notice" element={<Notice/>}/>
      <Route path="/individualstudent" element={<IndividualStudent/>}/>
      <Route path="/batch" element={<Batch/>}/>
      <Route path="/custom" element={<Custom/>}/>
      <Route path="/attedence" element={<Attendence/>}/>
      <Route path="/fee" element={<Fee/>}/>
      <Route path="/communication" element={<Communiction/>}/>
      <Route path="/studentList" element={<StudentList/>}/>
      <Route path="/ticket" element={<Ticket/>}/>
      <Route path="/assignment" element={<Asignment/>}/>
      <Route path="/setting" element={<SeetingPage/>}/>
      <Route path="/adminLogout" element={<AdminLogout/>}/>
      



      

      </Routes>

      

    </BrowserRouter>

   
    
  );
}

export default App;
