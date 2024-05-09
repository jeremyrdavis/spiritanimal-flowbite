export default async function assignSpiritAnimal(name) {
    const response = await fetch('http://localhost:8080//spiritanimals/assign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: name
    });
    const data = await response.json();
    console.log(data);
    return data;
};

async function whatIsMySpiritAnimal(workflowId) {
    const response = await fetch('http://localhost:8080//spiritanimals/whatIs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: workflowId
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function aPoemAboutMySpiritAnimal(workflowId) {
    const response = await fetch('http://localhost:8080//spiritanimals/poem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: workflowId
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function anotherPoemAboutMySpiritAnimal(workflowId) {
    const response = await fetch('http://localhost:8080//spiritanimals/addToPoem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: workflowId
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function likeMySpiritAnimal(workflowId) {
    const response = await fetch('http://localhost:8080/spiritanimals/like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: workflowId
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function submitFeedbackAboutThisDemo(workflowId, feedback) {
    let feedbackJson = JSON.stringify({id: workflowId, feedback: feedback});
    const response = await fetch('http://localhost:8080/spiritanimals/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: feedbackJson
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export { assignSpiritAnimal, whatIsMySpiritAnimal, aPoemAboutMySpiritAnimal, anotherPoemAboutMySpiritAnimal, likeMySpiritAnimal, submitFeedbackAboutThisDemo }


