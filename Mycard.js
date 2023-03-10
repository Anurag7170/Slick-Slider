import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Mycard.css"

function BasicCard() {
  return (
    <Card
      style={{
        width: 300,
        height: 300,
        border: "1px solid rgb(49, 54, 61)",
        backgroundColor: "#0d1117",
        color: "black",
      }}
    >
      
      
      <Card.Img variant="top" src="" />
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
