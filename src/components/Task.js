import { Card, Button } from 'react-bootstrap';

function Task(props) {

    return (
        <Card key={props.task.id}>
            <Card.Body>
                <Card.Title>
                    {props.task.title}
                </Card.Title>
                <Card.Text>
                    {props.task.description}
                </Card.Text>
                <Card.Text>
                    Fällig : {props.task.fälligkeit}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" size="sm" className="pull-right" onClick={props.edit}>Edit</Button>
                <Button variant="primary" size="sm" className="pull-right" onClick={props.changeState}>Weiter</Button>
            </Card.Footer>
        </Card>
    )
}

export default Task;