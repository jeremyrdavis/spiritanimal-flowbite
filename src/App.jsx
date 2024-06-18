import { useState } from 'react'
import './App.css'
import { Button } from "flowbite-react";

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
        poeticAddition: null,
        liked: false,
        feedback: null
    });

    const updateWorkflow = async (workflow) => {
        console.log("updateWorkflow: ", workflow);
        // if the user has liked their spirit animal, skip the poem and feedback steps
        if(workflow.liked === true && workflow.step < 5) {
            workflow.step = 5;
        }
        // if the user has submitted feedback
        let result = await callBackend(workflow);
        if(workflow.step == 6) {
            console.log("send feedback: ", workflow.feedback);
            onCloseModal();
        }
        console.log("result: ", result);
        setWorkflow({
            id: result.id,
            step: workflow.step + 1,
            spiritAnimal: result.spiritAnimal,
            name: result.name,
            whatIs: result.whatIs,
            poem: result.poem,
            updatedPoem: result.updatedPoem,
            poeticAddition: result.poeticAddition,
            liked: result.liked,
            feedback: result.feedback
        });
        if(workflow.step == 6) {
            setWorkflow({
                id: '',
                step: 1,
                spiritAnimal: '',
                name: '',
                whatIs: '',
                poem: '',
                updatedPoem: '',
                poeticAddition: '',
                liked: '',
                feedback: ''
            });
        }
    }

    function onCloseModal() {
        setOpenModal(false);
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

  return (
    <>
        <Button onClick={() => setOpenModal(true)}>Get Another Spirit Animal</Button>
        <WorkflowForms workflow={workflow} openModal={openModal} setOpenModal={setOpenModal} updateWorkflow={updateWorkflow} />
    </>
  )
}

export default App;
