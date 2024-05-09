import {
    Modal,
    Button,
    Checkbox,
    Label,
    Select,
    Textarea,
    TextInput,
} from "flowbite-react";
import React from "react";
import { useState } from 'react'


const switchForm = (workflow, updateWorkflow) => {
    switch(workflow.step) {
        case 1:
            return <WorkflowForm01 workflow={workflow} updateWorkflow={updateWorkflow} />;
        case 2:
            return <WorkflowForm02  workflow={workflow} updateWorkflow={updateWorkflow} />;
        case 3:
            return <WorkflowForm03  workflow={workflow} updateWorkflow={updateWorkflow} />;
        case 4:
            return <WorkflowForm04  workflow={workflow} updateWorkflow={updateWorkflow} />;
        case 5:
            return <WorkflowForm05  workflow={workflow} updateWorkflow={updateWorkflow} />;
        case 6:
            return <WorkflowForm06  workflow={workflow} updateWorkflow={updateWorkflow} />;
        default:
            return <WorkflowForm01  workflow={workflow} updateWorkflow={updateWorkflow} />;
    }
}

export function WorkflowForms ({workflow, openModal, setOpenModal, updateWorkflow}) {
    return(
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
                {switchForm(workflow, updateWorkflow)}
        </Modal>

    )
}

export function WorkflowForm01 ({workflow, updateWorkflow}) {
    return (
        <>
        <Modal.Header>Find Your Spirit Animal</Modal.Header>
            <form id="nameform" onSubmit={(e) => {
                e.preventDefault();
                updateWorkflow({...workflow, name: e.target.name.value});
            }}>
            <Modal.Body>
                <Label>Name:</Label>
                <TextInput type="text" name="name"/>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit">Get My Spirit Animal!</Button>
            </Modal.Footer>
            </form>
        </>
    );
}

export function WorkflowForm02({workflow, updateWorkflow}) {
    console.log("02 workflow: ", workflow);
    return (
        <>
            <Modal.Header>Your Spirit Animal Is a {workflow.spiritAnimal}</Modal.Header>
            <form id="whatIsForm">
                <Modal.Body>
                    {workflow.spiritAnimal}
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={(e) => {
                        e.preventDefault();
                        updateWorkflow({...workflow, liked:true});
                    }}>I Am a {workflow.spiritAnimal}!</Button>
                    <Button type="submit" onClick={(e) => {
                        console.log("likeSpiritAnimal: ", workflow);
                        e.preventDefault();
                        updateWorkflow({...workflow});
                    }}>What is a {workflow.spiritAnimal}?</Button>
                </Modal.Footer>
            </form>
        </>
    );
}

export function WorkflowForm03({workflow, updateWorkflow}) {
    return(
        <>
            <Modal.Header>Your Spirit Animal Is</Modal.Header>
            <form id="whatIsForm" onSubmit={(e) => {
                e.preventDefault();
                updateWorkflow({...workflow});
            }}>
                <Modal.Body>
                    {workflow.whatIs}
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={(e) => {
                        e.preventDefault();
                        updateWorkflow({...workflow, liked:true});
                    }}>I'm Happy with My {workflow.spiritAnimal}!</Button>
                    <Button type="submit">I'm Still Not Convinced</Button>
                </Modal.Footer>
            </form>
        </>
    )
}

export function WorkflowForm04({workflow, updateWorkflow}) {
    return(
        <>
            <Modal.Header>Does This Poem Change Your Mind?</Modal.Header>
            <form id="peomForm" onSubmit={(e) => {
                e.preventDefault();
                updateWorkflow({...workflow});
            }}>
                <Modal.Body>
                    {workflow.poem}
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={(e) => {
                        e.preventDefault();
                        updateWorkflow({...workflow, liked:true});
                    }}>This Poem Changed My Mind About My {workflow.spiritAnimal}!</Button>
                    <Button type="submit">No</Button>
                </Modal.Footer>
            </form>
        </>
    )
}

export function WorkflowForm05({workflow, updateWorkflow}) {
    return(
        <>
            <Modal.Header>How About This Poem?</Modal.Header>
            <form id="peomForm" onSubmit={(e) => {
                e.preventDefault();
                updateWorkflow({...workflow});
            }}>
                <Modal.Body>
                    {workflow.updatedPoem}
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={(e) => {
                        e.preventDefault();
                        updateWorkflow({...workflow, liked:true});
                    }}>This One Did the Trick!</Button>
                    <Button type="submit">Still No</Button>
                </Modal.Footer>
            </form>
        </>
    )
}

export function WorkflowForm06({workflow, updateWorkflow}) {
    console.log("06 workflow: ", workflow);
    return(
        <>
            <Modal.Header>Please Tell Us How You Feel About This Demo</Modal.Header>
            <form id="feedbackForm" onSubmit={(e) => {
                e.preventDefault();
                updateWorkflow({...workflow, feedback: e.target.feedback.value});
            }}>
                <Modal.Body>
                    <Label>Feedback:</Label>
                    <Textarea name="feedback"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit">Submit Feedback</Button>
                </Modal.Footer>
            </form>
        </>
    )
}