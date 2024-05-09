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
        switch (workflow.step) {
            case 1:
                await assignSpiritAnimal(workflow.name).then(result => {
                    console.log("result: ", result);
                    setWorkflow({
                        ...workflow,
                        id: result.workflowId,
                        step: workflow.step + 1,
                        spiritAnimal: result.spiritAnimal,
                        name: workflow.name,
                        whatIs: result.whatIs,
                        poem: result.poem,
                        updatedPoem: result.updatedPoem,
                        liked: result.liked,
                        feedback: result.feedback
                    })
                });
            default:
                break;
        }
    }

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
        <WorkflowForms workflow={workflow} openModal={openModal} setWorkflow={updateWorkflow}/>
    </>
  )
}

export default App;
