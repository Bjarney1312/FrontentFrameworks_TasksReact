import { Button, Card, Row } from 'react-bootstrap';
import { useState } from 'react';
import Task from '../components/Task';
import EditTask from '../components/EditTask';

function Lanes(props) {

    const [editingTask, setEditingTask] = useState(null);

    function addTask(event) {
        let newtask = {
            id: Date.now(),
            title: "New task",
            description: "",
            status: 0,
          };
        setEditingTask(newtask);
    }

    function edit(task){
        console.log("lanes edit: %o",task);
        setEditingTask(task);    
    }

    function changeState(task){
        console.log("lanes edit: %o",task);
        props.changeState(task);
    }


    function getTasks(lane){
        return Object.values(props.tasks).filter(task => task.status === lane.status);  
    }

    let lanes = props.lanes.map((lane, index) => {

        let button = null;
        let tasks = getTasks(lane).map(task => <Task task={task} edit={() => edit(task)} changeState={() => changeState(task)}></Task>);

        if (index === 0) {
            button = <Button variant="primary" size="sm" className="pull-right" onClick={addTask}>Add</Button>
        }

        return <div className="col-md-4 col-xs-12">
            <Card key={lane.id}>
                <Card.Header>
                    {lane.title}{button}
                </Card.Header>
                <Card.Body>
                    {lane.description}
                </Card.Body>
            </Card>
            {tasks}
        </div>        
    })
    return (
        <>
            <Row>{lanes}</Row>
            <EditTask task={editingTask} saveTask={props.saveTask}></EditTask>
        </>
    )
}

export default Lanes;