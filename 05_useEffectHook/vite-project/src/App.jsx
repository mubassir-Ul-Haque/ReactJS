import { useEffect, useState } from "react";

function App() {

  const [user, setUsers] = useState([]);
  // const [name, setName] = useState("")
  const [count, setCount] = useState(30)

  useEffect(() => {
    async function GithubProfile() {

      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      setUsers(data);
      console.log("hello")
    }

    GithubProfile();
  }, [count])


  return (
    <>
      <h1>GitHub User</h1>
      <input type="text" value={count} onChange={(e)=> setCount(e.target.value)}></input>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
        {
          user.map(user => (
            <img key={user.login} src={user.avatar_url} height={"100px"} />

          ))
        }
      </div>
    </>
  )
}

export default App;