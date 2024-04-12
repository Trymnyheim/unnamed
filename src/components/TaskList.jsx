import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import Task from './Task'; // Make sure to import Task component

function TaskList() {
    const [formData, setFormData] = useState({ taskName: "" });
    const [taskLists, setTaskLists] = useState([]); // Initialize tasks state

    const createTask = (event) => {
        event.preventDefault();
        
        const newTaskList = {
            taskName: formData.taskName
        };
        
        setTaskLists([...taskLists, newTaskList]); // Update tasks state
        setFormData({ taskName: "" }); // Reset form data
    };

    return (
        <>
            <div className="taskList">
                {taskLists.map((taskList, index) => (
                    <Task key={index} title={taskList.taskName} />
                ))}
            </div>
            <Form className="newTask" onSubmit={createTask}>
                <h3>Create a new task list:</h3>
                <Stack direction="horizontal" gap={3}>
                    <FloatingLabel controlId="taskName" label="Title of task list" className="mb-3 taskName">
                        <Form.Control 
                            type="text" 
                            name="taskName"
                            value={formData.taskName} 
                            onChange={(e) => setFormData({ taskName: e.target.value })}
                        />
                    </FloatingLabel>
                    <div className="taskButton">
                        <Button className="no-break" type="submit" variant="success">Create task list</Button>
                    </div>
                </Stack>
            </Form>
        </>
    );
}

export default TaskList;

