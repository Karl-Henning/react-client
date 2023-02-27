import { QueryFunction } from "@tanstack/react-query";

interface APIResponseType {
  postId: number;
}

const fetchData: QueryFunction<APIResponseType, ["posts", string]> = async ({
  queryKey,
}) => {
  const id = queryKey[1];

  const response = await fetch(
    "`https://jsonplaceholder.typicode.com/posts/${id}`"
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export default fetchData;
