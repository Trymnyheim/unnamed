import { Stack, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';

function TaskItem(props) {
  const [formData, setFormData] = useState({
    title: props.title || "",
    desc: props.desc || "",
    date: props.date || "",
    comp: props.comp || "0"
  });

  const [lgShow, setLgShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update task completion status using toggleCompletion prop
    props.toggleCompletion(props.id);

    const updatedTask = {
      title: formData.title,
      desc: formData.desc,
      date: formData.date,
      comp: formData.comp
    };

    props.updateTask(props.id, updatedTask); // Update task data
  };

  return (
    <div className="task">
      <Stack direction="horizontal" gap={3}>
        <div className="title bold">{formData.title || "Empty task"}</div>
        <div className="description">{formData.desc || "Press edit to initiate or remove the task"}</div>
        <div className="date no-break">{formData.date || "No set date"}</div>
        <div className="taskButton no-break">
          <Button onClick={() => props.toggleCompletion(props.id)} variant="success">{props.comp === "1" ? "Complete" : "Incomplete"}</Button>{' '}
        </div>
        <Button variant="primary" onClick={() => setLgShow(true)}>Edit</Button>
        <Modal         
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg">
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Editing "{formData.title || "Empty task"}"</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Stack direction="horizontal" gap={3}>
                <FloatingLabel controlId="title" label="Title" className="mb-3 title">
                  <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="description" label="Description" className="mb-3 description">
                  <Form.Control type="text" name="desc" value={formData.desc} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="date" label="Date" className="mb-3 date">
                  <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="comp" label="Completion" className="mb-3">
                  <Form.Select name="comp" value={formData.comp} onChange={handleChange}>
                    <option value="0">Incomplete</option>
                    <option value="1">Complete</option>
                  </Form.Select>
                </FloatingLabel>
              </Stack>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setLgShow(false)}>
                Close
              </Button>
              <Button type="submit" variant="success" onClick={() => setLgShow(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Stack>
    </div>
  );
}

export default TaskItem;
