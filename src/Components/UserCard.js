import React from "react";
import { Card, Button } from "react-bootstrap";
const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name[0]}</Card.Title>
          <Card.Text>{user.name}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.address.city}</Card.Text>
          <Card.Text>{user.address.street}</Card.Text>
          <Button variant="primary">Show Profile</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
