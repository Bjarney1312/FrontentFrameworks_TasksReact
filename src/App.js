import './App.css';

import Lanes from './components/Lanes';
import {Nav} from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      
      <Nav className ="navbar navbar-dark bg-dark fixed-top" id="nav">
         <span className ="navbar-brand">TASKBOARD</span>
      </Nav>
      <Lanes></Lanes>
     
    </div >
  );
}

export default App;
