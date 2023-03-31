import axios from "axios";

let URL = "http://localhost:3000/posts";

const getAllPosts = () => axios.get(URL);
const getPostById = (PostId) => axios.get(`${URL}/${PostId}`);
const addPost = (Post) => axios.post(URL, Post);
const editPost = (PostId, Post) => axios.put(`${URL}/${PostId}`, Post);
const deletePost = (PostId) => axios.delete(`${URL}/${PostId}`);

export const PostsAPI = {
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
  addPost,
};
