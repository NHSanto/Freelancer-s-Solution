import logo from './logo.svg';
import './App.scss';
import {Button, Card} from "react-bootstrap";

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column mt-2">
        <Button variant='success'>Click Me</Button>
        <Button variant="danger">Click Here</Button>
        <h1>Hello</h1>
    </div>
  );
}

export default App;
