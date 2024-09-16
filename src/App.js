
import './App.css';
import React from 'react';
import ProtectedRoute from './Login/SignupComponent/ProtectedRoute';

import { Routes ,Route } from 'react-router-dom';
import Desktop18 from './Login/SigninComponent/Desktop18';
import Desktop34 from './Homepage/FirstScreen/Desktop34';
import Home1 from './Homepage/SecondScreen/Home1';
import Desktop19 from './Login/SignupComponent/Desktop19';
 import Desktop27 from './Admin/Catagory/Desktop27';
 import Desktop32 from './Admin/CatagoryAfterAddComponent/Desktop32';
 import Desktop33 from './Admin/createCatagoryComponent/Desktop33';
 import Desktop26 from './TeacherModule/TeacherCatagoryComponent/Desktop26';
 import Desktop25 from './TeacherModule/TeacherCourseComponent/Desktop25';
 import TeacherProfile1 from './TeacherModule/TeacherProfile/TeacherProfile1';
 import Desktop30 from './TeacherModule/VedioCourseComponent/Desktop30';
 import Desktop from './TeacherModule/ComponentCourseAfterCreate/Desktop';
 import Desktop21 from './User/CatagorySelectComponent/Desktop21';
import Desktop22 from './User/CatgoryAfterPaid/Desktop22';
import Desktop24 from './User/CourseComponent/Desktop24';
import HomePage1 from './User/CourseSelectComponent/HomePage1'
import Desktop28 from './User/MyprofileComponent/Desktop28';
import Desktop29 from './User/VedioCourse/Desktop29'
import Desktop23 from './TeacherModule/CreateCourseComponent/Desktop23';
import Desktop20 from './User/DashboardComponent/Desktop20';
import DashboarD from './Admin/Dashboard/Dashboard';
import SignUpPage from './TeacherModule/SignUpTeacher/SignTeacher';
import MainContent from './TeacherModule/Dashboard/MainContent';
import Dashboard from './Admin/Dashboard/Dashboard';
import FeedbackForm from './FeedBack/Feedback';



function App() {
 // const data = true;
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Desktop34/>}></Route>
  <Route path='Dashboard' element={<DashboarD/>}></Route>
  <Route path='Home' element={<Home1/>}></Route>
 <Route path='Signin' element={<Desktop18/>}></Route>
   <Route path='Signup' element={<Desktop19/>}></Route>
   <Route 
          path="/protected-page" 
          element={
            <ProtectedRoute>
              <Desktop19 /> {/* This is your protected component */}
            </ProtectedRoute>
          } 
        />
  <Route path="Catagory" element={<Desktop27 />} />
  <Route path="Catagory/CreateCatagory/AfterCreate" element={<Desktop32 />} />
  <Route path="Catagory/CreateCatagory" element={<Desktop33/>} />
  <Route path="Dashboard" element={<Dashboard />} />
  <Route path="1" element={<Desktop/>} />
  <Route path="2" element={<Desktop23/>} />
  <Route path="3" element={<Desktop26/>} />
  <Route path="4" element={<Desktop25/>} />
  <Route path="5" element={<TeacherProfile1/>} />
  <Route path="6" element={<Desktop30/>} />
  <Route path="/SignupTeacher" element={<SignUpPage/>} /> 
  <Route path="8" element={<MainContent/>} /> 
  
  <Route path="CatagorySelectComponent" element={<Desktop21/>} />
  <Route path="CatgoryAfterPaid" element={<Desktop22/>} />
   <Route path="CourseComponent" element={<Desktop24/>} />
  <Route path="CourseSelectComponent" element={<HomePage1/>} />
  <Route path="DashboardComponent" element={<Desktop20/>} /> 
 <Route path="/MyprofileComponent" element={<Desktop28/>} />
  <Route path="VedioCourse" element={<Desktop29/>} />
  <Route path="Feedback" element={<FeedbackForm/>} />
</Routes>


   
    </div>
  );
}

export default App;
