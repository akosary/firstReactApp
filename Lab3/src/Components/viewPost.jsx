import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsAPI } from "../API/Posts";
import { Button, Card } from "react-bootstrap";

export function viewPost() {
  let [Post, setPost] = useState({});
  const { id } = useParams();

  const getPostById = async () => {
    let response = await PostsAPI.getPostById(id);
    setPost(response.data);
  };
  useEffect(() => {
    getPostById();
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Product Details: </Card.Title>
        <Card.Text>{Post.id}</Card.Text>
        <Card.Text>{Post.name}</Card.Text>
        <Card.Text>{Post.desc}</Card.Text>
        <span>{Post.author}</span>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
