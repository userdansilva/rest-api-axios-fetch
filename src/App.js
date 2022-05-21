import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {
  const [repos, setRepos] = useState([]);

  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => res.data)
      .then((data) => setRepos(data));
  }, [api]);

  return (
    <div>
      <h1>This is fine</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.title}</li>
        ))}
      </ul>
    </div>
  );
};
