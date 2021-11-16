import { Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect }from 'react';

function EditTask(props){

    let buttonCancel = <Button variant="danger" size="sm" className="pull-right" onClick={cancel}>Cancel</Button>
    let buttonSave = <Button variant="primary" size="sm" className="pull-right" onClick={updateTask}>Save</Button>
    
    const [show, setShow] = useState(props.task !== null);
    const [task, setTask] = useState(props.task);

    useEffect(() => {
        setShow(props.task !== null);
        setTask(props.task);
    }, [props.task]);


    function cancel(){
        setShow(false);
    }

    function updateTask(){
        console.log("UpdateTask: %o", task);
        props.saveTask(task);
        setShow(false);
    }

    function handleChange(event) {
        console.log('handleChange: %s %s', event.target.name, event.target.value);
        setTask({ ...task, [event.target.name]: event.target.value });
        console.log("Nach handleChange: %o", task);
    }

    let dialog = null;
    console.log("EditTask: %o", task);
    if(task){
        dialog = <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>
                Edit Task
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Task Name" name="title" value={task.title} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" name="description" value={task.description} onChange={handleChange} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            {buttonSave}{buttonCancel}
        </Modal.Footer>
    </Modal.Dialog>
    }

    return(
        <Modal show={show}>
            {dialog}
        </Modal>
    )
}

export default EditTask;