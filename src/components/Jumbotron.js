import classes from './Jumbotron.module.css';
import { Button } from 'react-bootstrap';

export default function Jumbotron() {
  return (
    <div className={classes.jumbotron}>
      <h2>20% Summer Season Off</h2>
      <p>The discount will last by 31st Aug 2021!</p>
      <Button variant="success">Learn More</Button>{' '}
    </div>
  );
}
