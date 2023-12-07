import { useState } from "react";
import { Button, Container, Form, Nav, NavDropdown, Navbar, ProgressBar, Toast } from "react-bootstrap";

import { useSearchParams } from "react-router-dom";


import EmployeeHome from "./components/employee_home";
import TasksByEmployee from "./components/tasksByEmpId";
import EmployeeNavbar from "./components/eNavbar";
function EmployeeDashboard(){
    const[username,setUsername]=useState('');
    const[show,setShow]=useState('');
    const [param] = useSearchParams();
    
    
    const process = ()=>{
      if(!param.get('page')){
          return  <div>
           <EmployeeHome />
      </div>
      }
      if(param.get('page') === 'home'){
           
          return <div>
              <EmployeeHome />
          </div>
      }
      if(param.get('page') === 'your_work'){
          return <div>
              <TasksByEmployee />
          </div>
      }
     
    }
    return(
        <div>
            <EmployeeNavbar  />
            {process()} 
        

        </div>
    );
}
export default EmployeeDashboard;