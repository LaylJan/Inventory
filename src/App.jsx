import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="head"></div>
      <div className="content">
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Coal</td>
            <td>4</td>
            <td>Its coal it cooks stuff</td>
            <td className="actions">
              <button className="action">Edit</button>
              <button className="action">Delete</button>
            </td>
          </tr>
        </table>
        <div className="addbtn">
          <button>add more items</button>
        </div>
      </div>
    </div>
  );
}

export default App;
