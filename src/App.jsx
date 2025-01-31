import { GoTasklist } from "react-icons/go";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import Navbar from "./components/Navbar";


function App() {
  return (

    <div className="container justify-content-center">
      <div className="">
        <Navbar/>
        <div className="col-5 mx-auto mt-2">
          <Form/>
        </div>
        <TaskList/>

      </div>

    </div>


    
    
    
  );
}

export default App;
