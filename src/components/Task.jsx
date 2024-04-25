import Stack from 'react-bootstrap/Stack';
import TaskItem from './TaskItem';
import ProgressBars from './ProgressBars';
import { useState, useEffect } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

function Task(props) {
    const [formData, setFormData] = useState({ title: "", description: "", date: "", comp: "" });
    const [tasks, setTasks] = useState([]);
    const [completionPercentage, setCompletionPercentage] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            title: formData.title,
            desc: formData.description,
            date: formData.date,
            comp: "0" // Default value is set to uncompleted
        };

        setTasks([...tasks, newTask]);
        setFormData({ title: "", description: "", date: "" }); // Clear the form fields
    };

    const updateTask = (id, updatedTask) => {
        const updatedTasks = tasks.map((task, index) => 
            index === id ? { ...updatedTask } : task
        );
        setTasks(updatedTasks);
    };
    

    //Checks for updates and processes task completion
    useEffect(() => {
        const completionPercentage = calculateCompletionPercentage();
        setCompletionPercentage(completionPercentage);
    }, [tasks]);

    //Toogles the completion of a task
    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map((task, index) => 
            index === id ? { ...task, comp: task.comp === "1" ? "0" : "1" } : task
        );
        setTasks(updatedTasks);
    };

    //Calculates the percentage of completion for the progress bar
    const calculateCompletionPercentage = () => {
        if (tasks.length === 0) return 0;
        const completedTasks = tasks.filter(task => task.comp === "1");
        return Math.round((completedTasks.length / tasks.length) * 100);
    };


    return (
        <div className="task">
            <Stack gap={3}>
                <h2>{props.title}</h2>
                <ProgressBars value={completionPercentage} />
                <div>
                    {tasks.map((task, index) => (
                        <TaskItem 
                            key={index} 
                            id={index} 
                            title={task.content.title} 
                            desc={task.desc} 
                            date={task.date} 
                            comp={task.comp} 
                            toggleCompletion={toggleTaskCompletion}
                            updateTask={updateTask}
                        />
                    ))}
                    <TaskItem title={props.content[0].title} desc={props.content[0].desc} date={props.content[0].date} comp={props.content[0].comp} />
                    <TaskItem title={props.content[1].title} desc={props.content[1].desc} date={props.content[1].date} comp={props.content[1].comp} />
                </div>
                <Form onSubmit={handleSubmit}>
                    <Stack direction="horizontal" gap={3}>
                        <FloatingLabel controlId="title" label="Title" className="mb-3 title">
                            <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
                        </FloatingLabel>
                        <FloatingLabel controlId="description" label="Description" className="mb-3 description">
                            <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} />
                        </FloatingLabel>
                        <FloatingLabel controlId="date" label="Date" className="mb-3 date">
                            <Form.Control type="date" name="date" placeholder="" value={formData.date} onChange={handleChange} />
                        </FloatingLabel>
                        <div className="taskButton">
                            <Button className="no-break" type="submit" variant="success">Add new item</Button>
                        </div>
                    </Stack>
                </Form>
            </Stack>
        </div>
    );
}

export default Task;
