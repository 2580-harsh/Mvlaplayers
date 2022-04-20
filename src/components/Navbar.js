import React, { useEffect, useState } from "react";

const Navbar = (props) => {
  return (
    <div className="App">
      {props.state.map((s) => {
        return (
          <>
            <table>
              <td>
                <th>MVLA Players </th>
                <h1>{s.fields["Players Name"]}</h1>
                <h2>{s.fields["Coach"]}</h2>
                <h3>{s.fields["Position"]}</h3>
                <h4>{s.fields["Email"]}</h4>
              </td>
            </table>
          </>
        );
      })}
    </div>
  );
};

export default Navbar;
