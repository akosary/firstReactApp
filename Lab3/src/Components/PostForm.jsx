import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { PostsAPI } from "../API/Posts";

export function PostForm() {
  let navigate = useNavigate();
  let [formValue, setFormValues] = useState({});

  let [Post, setPost] = useState({});
  const { id } = useParams();

  const getPostById = async () => {
    let response = await PostsAPI.getPostById(id);
    setPost(response.data);
    setFormValues(response.data);
  };
  useEffect(() => {
    if (id != 0) {
      getPostById();
    }
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    if (id == 0) {
      await PostsAPI.addPost(formValue);
    } else {
      await PostsAPI.editPost(id, formValue);
    }
    navigate("/Posts");
  };
  const operationHandler = (e) => {
    setFormValues({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-center">
      <h1>{id == 0 ? "Add Post " : "Edit Post"}</h1>
      <form onSubmit={submit}>
        <MDBInput
          className="mb-4"
          id="form5Example1"
          label="Name"
          name="name"
          defaultValue={Post.name}
          onChange={operationHandler}
        />
        <MDBInput
          className="mb-4"
          type="text"
          id="form5Example2"
          name="desc"
          onChange={operationHandler}
          defaultValue={Post.desc}
        />
        <MDBInput
          className="mb-4"
          type="text"
          id="form5Example2"
          name="author"
          defaultValue={Post.author}
          onChange={operationHandler}
        />
        <MDBBtn type="submit" block>
          {id == 0 ? "Add Post " : "Edit Post"}
        </MDBBtn>
      </form>
    </div>
  );
}
