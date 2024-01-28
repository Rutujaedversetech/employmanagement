import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Ticket from "./ticket/ticket"; 
import Assets from "./assets/assets";
import RaiseRequest from "./raise_request/raise_request";
import AssetRequest from "./asset_request/asset_request";
import Finance from "./finance/finance";
import CabFacility from "./cab_facility/cab_facility";
import Referral from "./referral/referral";
import Reimbursement from "./expenses/reimbursement";
import BookACab from "./cab_facility/book_a_cab";
import CreateReferral from "./referral/create_referral";
import Complaints from "./complaints/complaints";
import Warning from "./warning/warning";
import Projects from "./projects/projects";
import Teams from "./projects/team";
import AttendanceManagement from "./attendance_management/attendance_management";
import CalendarTask from "./calendar/calendar_task";
import CalendarHoliday from "./calendar/calendar_holiday";
import ReimbursementRequest from "./expenses/reimbursement_form";
import SeniorDashboard from "./SeniorDeveloper/SeniorDashboad/SeniorDashboard";
import SeniorProjects from "./SeniorDeveloper/SeniorProjects/SeniorProjects";
import SeniorProjectsTeam from "./SeniorDeveloper/SeniorProjects/SeniorProjectsTeam";
import CreateProjectTask from "./SeniorDeveloper/SeniorProjects/CreateProjects";
import SeniorTask from "./SeniorDeveloper/SeniorTaskManager/SeniorTask";
import CreateTasks from "./SeniorDeveloper/SeniorTaskManager/CreateTasks";
import PerformanceTable from "./SeniorDeveloper/PerformanceNFeedback/PerformanceTable";
import CreatePerformance from "./SeniorDeveloper/PerformanceNFeedback/CreatePerformance";
import EmployeeMonitoring from "./SeniorDeveloper/EmployeeMonitoring/EmployeeMonitoring";
import PickATime from "./calendar/pick_a_time";
import NewMeetCalendar from "./calendar/new_meeting";
import MainDashboard from "./dashboard/MainDashboard/MainDashboard";
import Calendar from "react-calendar";
import Calender from "./calendar/Calender2";
import Calender2 from "./calendar/Calender2";
import UserProfile from "./Profile/UserProfile";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard><MainDashboard/></Dashboard>} />
          <Route path="/ticket" element={<Dashboard><Ticket /></Dashboard>} />
          <Route path="/assets" element={<Dashboard><Assets /></Dashboard>} />
          <Route path="/RaiseRequest" element={<RaiseRequest/>} />
          <Route path="/AssetRequest" element={<AssetRequest />} />
          <Route path="/Finance" element={<Dashboard><Finance/></Dashboard>} />
          <Route path="/CabFacility" element={<Dashboard><CabFacility/></Dashboard>} />
          <Route path="/Referral" element={<Dashboard><Referral/></Dashboard>} />
          <Route path="/Reimbursement" element={<Dashboard><Reimbursement/></Dashboard>} />
          <Route path="/ReimbursementRequest" element={<ReimbursementRequest />} />
          <Route path="/BookACab" element={<BookACab/>} />
          <Route path="/CreateReferral" element={<CreateReferral/>} />
          <Route path="/Complaints" element={<Dashboard><Complaints/></Dashboard>} />
          <Route path="/Warning" element={<Dashboard><Warning/></Dashboard>} />
          <Route path="/Projects" element={<Dashboard><Projects /></Dashboard>} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/AttendanceManagement" element={<Dashboard><AttendanceManagement /></Dashboard>} />
          <Route path="/CalendarTask" element={<CalendarTask />} />
          <Route path="/CalendarHoliday" element={<CalendarHoliday />} />
          <Route path="/Calendar" element={<Dashboard><Calender2 /></Dashboard>} />
          <Route path="/profile" element={<Dashboard><UserProfile /></Dashboard>} />

          <Route path="/PickATime" element={<PickATime />} />
          <Route path="/NewMeetCalendar" element={<NewMeetCalendar />} />

          <Route path="/SeniorDashboard" element={<SeniorDashboard />} />
          <Route path="/SeniorProjects" element={<SeniorProjects />} />
          <Route path="/SeniorProjectsTeam" element={<SeniorProjectsTeam />} />
          <Route path="/CreateProjectTask" element={<CreateProjectTask />} />
          <Route path="/SeniorTask" element={<SeniorTask />} />
          <Route path="/CreateTasks" element={<CreateTasks />} />
          <Route path="/PerformanceTable" element={<PerformanceTable />} />
          <Route path="/CreatePerformance" element={<CreatePerformance/>} />
          <Route path="/EmployeeMonitoring" element={<EmployeeMonitoring />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





























// import { Flex } from "@chakra-ui/react"
// import { Text } from "@chakra-ui/react"
// import { Box } from "@chakra-ui/react"

// const App = () => {
//   return (
//     <>
//       <Flex w='100%'
//       h= '100vh' background='#F9F9F9' borderRadius='30px'>
//         <Flex w='18%'
//         h='100vh' background='#FFF' borderRadius='20px' border='1px solid #EFF0F6'>
//         <justifyContent>
//         <Text w='100%' ml='60%' mt='20%' color='#FFB800' fontFamily='Inter' fontSize='24px' fontStyle='normal' fontWeight='700' lineHeight='normal' >EDVERSE</Text>
//         <Box border='1px solid #FFB800' h='15vh' w='15vh' mt='10%' ml='60%' borderRadius='0px 6px 0px 0px'></Box>
//         <Text w='100%' mt='6%' ml='68%' color='#000' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='600' lineHeight='18px'>Sam Wheeler</Text>
//         <Text w='100%' mt='2%' ml='50%' fontFamily='Inter' fontSize='12px' fontStyle='normal' fontWeight='400' lineHeight='normal' color='rgba(0, 0, 0, 0.50)'>samwheeler@example.com</Text>
        
//         </justifyContent>  
   
//         <justifyContent>
//           <Text mt='360%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>My Dashboard</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Calendar</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Projects</Text>

//           <Text w='400%' mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Attendance Management</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Service Request</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Finance</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Cab Facility</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Referral</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Expenses</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Complaints</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Employee Warning</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Edverse Chat</Text>
        
//         </justifyContent>
         
//         <justifyContent>
//         <Text mt='386%' ml='-90%' color='#E5E5E5' >__________________________</Text>
//         <Text mt='4%' ml='-76%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Help & Support</Text>

//         <Text mt='4%' ml='-76%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Log out</Text>


//         </justifyContent>

//         </Flex>
//       </Flex>
//     </>
//   )
// }

// export default App









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
