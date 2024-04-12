import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function TaskItem(props) {

  const toggleTaskCompletion = () => {
    props.toggleCompletion(props.id);
  };

  return (
    <div className="task">
        <Stack direction="horizontal" gap={3}>
            <div className="title bold">{ props.title || "Empty task" }</div>
            <div className="description">{ props.desc || "Press edit to initiate or remove the task" }</div>
            <div className="date no-break">{ props.date || " " }</div>
            <div className="taskButton no-break">
              <Button onClick={toggleTaskCompletion} variant="success">{ props.comp === "1" ? "Done" : "Complete"}</Button>{' '}
              <Button variant="outline-dark">Edit</Button>
            </div>
        </Stack>
    </div>
  );
  
}

export default TaskItem;