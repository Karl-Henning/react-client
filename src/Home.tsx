import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import fetchData from "./fetchData";

const Home = () => {
  const id = useParams().id!;

  const results = useQuery(["posts", id], fetchData);

  if (results.isLoading) {
    return <div>Loading...</div>;
  }

  const postId = results?.data;

  return (
    <>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <Link to="/about/:id">About</Link>
      {postId}
    </>
  );
};

export default Home;
