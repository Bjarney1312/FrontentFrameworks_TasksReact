import { Button, Card, Row } from 'react-bootstrap';
import { useState } from 'react';
import Task from '../components/Task';
import EditTask from '../components/EditTask';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanes } from '../features/lanesSlice';
import { selectTasks, nextState, saveTask } from '../features/tasksSlice';


function Lanes(props) {

    const lanes = useSelector(selectLanes);
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

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

    function getTasks(lane){
        return Object.values(tasks).filter(task => task.status === lane.status);  
    }

    let lanesElement = lanes.map((lane, index) => {

        let button = null;
        let tasks = getTasks(lane).map(task => <Task task={task} edit={() => edit(task)} changeState={() => dispatch(nextState(task))}></Task>);

        if (index === 0) {
            button = <Button variant="primary" size="sm" className="pull-right" onClick={addTask}>Add</Button>
        }

        return <div className="col-md-4 col-xs-12" key={lane.id}>
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
            <Row>{lanesElement}</Row>
            <EditTask task={editingTask} saveTask={(task) => dispatch(saveTask(task))}></EditTask>
        </>
    )
}

export default Lanes;