import { Button, Modal } from "flowbite-react";
import { useState } from 'react'
import './App.css'
import { WorkflowForms, WorkflowForm01, WorkflowForm02} from "./components/WorkflowForms.jsx";

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
        setWorkflow(workflow);
    }

  return (
    <>
        <WorkflowForms workflow={workflow} openModal={openModal} setWorkflow={updateWorkflow}/>
    </>
  )
}

export default App
