import "./styles.css";
import LoadingSpinner from "./LoadingSpinner";
import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appWC9sr0ilXCkMVM/Table%201?api_key=keymvy5rkITkPnGEB"
    )
      .then((res) => res.json())
      .then((data) => {
        setState(data.records);
      })
      .catch((error) => {});
  }, []);
  console.log("response", state);
  return (
    <div>
      <table width="100%" border="2px">
        <tr>
          <th>Players Name</th>
          <th>Players Email</th>
          <th>Players position</th>
          <th>coach</th>
        </tr>
        <tbody>
          {state.map((user, index) => {
            return (
              <tr key={index.plsyes}>
                <td>{user.fields.PlayersName}</td>
                <td>{user.fields.Email}</td>
                <td>{user.fields.Position}</td>
                <td>{user.fields.Coach}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
