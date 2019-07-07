import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import Pagination from "./pagination";

export class Posts extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postPerPage: 10
  };

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost = async () => {
    this.setState({ loading: true });
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({ posts: res.data });
    this.setState({ loading: false });
  };

  paginate = num => {
    this.setState({ currentPage: num });
  };
  paginateNext = () => {
    const { posts, currentPage } = this.state;

    if (currentPage < Math.ceil(posts.length / currentPage)) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  };
  paginatePrev = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  render() {
    const { loading, posts, postPerPage, currentPage } = this.state;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="container">
        <h2 className="text-primary mb-3">Posts</h2>
        <Post loading={loading} posts={currentPost} />
        <Pagination
          paginate={this.paginate}
          postPerPage={postPerPage}
          totalPosts={posts.length}
          paginateNext={this.paginateNext}
          paginatePrev={this.paginatePrev}
        />
      </div>
    );
  }
}

export default Posts;
