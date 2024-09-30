import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../assets/1.jpg";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the homepage!</p>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Home;
