import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function TaskItem(props) {

  return (
    <div className="task">
        <Stack direction="horizontal" gap={3}>
            <div className="title">{ props.title || "Empty task" }</div>
            <div className="description">{ props.desc || "Press edit to initiate or remove the task" }</div>
            <Button variant="success">{ props.comp == "1" ? "Done" : "Complete"}</Button>{' '}
            <Button variant="outline-dark">Edit</Button>
        </Stack>
    </div>
  );
  
}

export default TaskItem;