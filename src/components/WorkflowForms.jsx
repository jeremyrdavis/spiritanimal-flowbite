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


const switchForm = (workflow, setWorkflow) => {
    switch(workflow.step) {
        case 1:
            return <WorkflowForm01 workflow={workflow} setWorkflow={setWorkflow} />;
        case 2:
            return <WorkflowForm02  setWorkflow={setWorkflow} />;
        default:
            return <WorkflowForm01  setWorkflow={setWorkflow} />;
    }
}

export function WorkflowForms ({workflow, openModal, setWorkflow}) {
    return(
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
                {switchForm(workflow, setWorkflow)}
        </Modal>

    )
}

export function WorkflowForm01 ({workflow, setWorkflow}) {
    return (
        <>
        <Modal.Header>Find Your Spirit Animal</Modal.Header>
            <form id="nameform" onSubmit={(e) => {
                e.preventDefault();
                setWorkflow({...workflow, name: e.target.name.value, step: 2});
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

export function WorkflowForm02({workflow, setWorkflow}) {
    return (
        <>
            <h1>What is your spirit animal?</h1>
            <p>{workflow.animalName}</p>
            <form id="whatIsForm" onSubmit={setWorkflow}>
            <Button type="submit" >What is my spirit animal?</Button>
            </form>
        </>
    );
}