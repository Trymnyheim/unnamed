import React, { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import Task from './Task.jsx';

function TaskList() {
    const [taskLists, setTaskLists] = useState([]);
    const [formData, setFormData] = useState({ taskName: '' });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:3000/routes/api/dict');
            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }
            const data = await response.json();
            setTaskLists(data); // Assuming each task has a title and content property
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const createTask = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/routes/api/dict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to create task list');
            }

            const data = await response.json();
            setTaskLists([...taskLists, data]);
            setFormData({ taskName: '' });
        } catch (error) {
            console.error('Error creating task list:', error);
        }
    };

    return (
        <>
            <div className="taskList">
                {taskLists.map((task, index) => (
                    <Task key={index} title={task.title} content={task.content} />
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
