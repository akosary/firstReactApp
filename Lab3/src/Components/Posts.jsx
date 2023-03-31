import { React, useEffect, useNavigate, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { PostsAPI } from "../API/Posts";

export default function Posts() {
  const navigate = useNavigate();
  let [Posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    let response = await PostsAPI.getAllPosts();
    setPosts(response.data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const viewPost = (PostId) => {
    navigate(`/Posts/${PostId}`);
  };
  const deletePost = async (PostId) => {
    await PostsAPI.deletePost(PostId);
    let postList = Posts.filter((Post) => Post.id !== PostId);
    setPosts(postList);
  };
  const editPost = (PostId) => {
    navigate(`/Posts/${PostId}/edit`);
  };

  const AddPage = () => {
    navigate("/Posts/0/edit");
  };
  return (
    <div>
      <div className="col-2 mb-5">
        <button className="btn btn-primary" onClick={AddPage}>
          Add Post
        </button>
      </div>
      <MDBTable
        striped
        className=" my-5 border border-black border-3 rounded rounded-2 p-5"
      >
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Author</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {Posts.map((post, index) => {
            return (
              <tr key={index}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.desc}</td>
                <td>{post.author}</td>
                <td>
                  <i
                    onClick={() => viewPost(post.id)}
                    className="fs-2 mx-2 text-warning bi bi-eye-fill"
                  ></i>
                  <i
                    onClick={() => deletePost(post.id)}
                    className="fs-2 mx-2 text-danger bi bi-trash"
                  ></i>
                  <i
                    onClick={() => editPost(post.id)}
                    className="fs-2 mx-2 text-info bi bi-pencil-square"
                  ></i>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
