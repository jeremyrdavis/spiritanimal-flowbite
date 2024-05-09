import { useState } from 'react'
import './App.css'
import { WorkflowForms, WorkflowForm01, WorkflowForm02} from "./components/WorkflowForms.jsx";
import { assignSpiritAnimal, whatIsMySpiritAnimal, aPoemAboutMySpiritAnimal, anotherPoemAboutMySpiritAnimal, likeMySpiritAnimal, submitFeedbackAboutThisDemo } from './components/BackendCalls.js';
function App() {
  const [openModal, setOpenModal] = useState(true);

    const [workflow, setWorkflow] = useState({
        id: null,
        step: 1,
        name: null,
        animalName: null,
        whatIs: null,
        poem: null,
        updatedPoem: null,
        liked: false,
        feedback: null
    });

    const updateWorkflow = (workflow) => {
        console.log("updating workflow: ", workflow);
        // switch (workflow.step) {
        //     case 1:
        //         assignSpiritAnimal(workflow.name).then(result => {
        //             console.log("data: ", result);
        //             setWorkflow(result);
        //         });
        //     default:
        //         break;
        // setWorkflow(workflow);
    }

  return (
    <>
        <WorkflowForms workflow={workflow} openModal={openModal} setWorkflow={updateWorkflow}/>
    </>
  )
}

export default App;
