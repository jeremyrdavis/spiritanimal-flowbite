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
        spiritAnimal: null,
        whatIs: null,
        poem: null,
        updatedPoem: null,
        liked: false,
        feedback: null
    });

    const updateWorkflow = async (workflow) => {
        let result = await callBackend(workflow);
        console.log("result: ", result);
        setWorkflow({
            id: result.id,
            step: workflow.step + 1,
            spiritAnimal: result.spiritAnimal,
            name: result.name,
            whatIs: result.whatIs,
            poem: result.poem,
            updatedPoem: result.updatedPoem,
            liked: result.liked,
            feedback: result.feedback
        });
    }

    async function callBackend(workflow) {
        switch(workflow.step) {
        case 1:
            return assignSpiritAnimal(workflow.name);
        case 2:
            return whatIsMySpiritAnimal(workflow.id);
        case 3:
            return aPoemAboutMySpiritAnimal(workflow.id);
        case 4:
            return anotherPoemAboutMySpiritAnimal(workflow.id);
        case 5:
            return likeMySpiritAnimal(workflow.id);
        case 6:
            return submitFeedbackAboutThisDemo(workflow.id, workflow.feedback);
    }}

    // async function callBackend(workflow) {
    //     switch (workflow.step) {
    //         case 1:
    //             await assignSpiritAnimal(workflow.name).then(result => {
    //                 console.log("result: ", result);
    //                 setWorkflow({...workflow,
    //                     id: result.workflowId,
    //                     step: workflow.step + 1,
    //                     spiritAnimal: result.spiritAnimal,
    //                     name: workflow.name,
    //                     whatIs: result.whatIs,
    //                     poem: result.poem,
    //                     updatedPoem: result.updatedPoem,
    //                     liked: result.liked,
    //                     feedback: result.feedback
    //             })});
    //         default:
    //             break;
    //     }
    // }

  return (
    <>
        <WorkflowForms workflow={workflow} openModal={openModal} updateWorkflow={updateWorkflow}/>
    </>
  )
}

export default App;
