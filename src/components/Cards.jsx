import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  const style = {
    width: '20rem',
    minWidth: 300
  };
  return (
    <Card style={style}>
      <Card.Img variant="top" src={ props.img } />
      <Card.Body>
        <Card.Title>{ props.title }</Card.Title>
        <Card.Text>
            { props.text }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards;