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
            <td className=" items">
              <div className="tdItems">
                coalssssssssssssssssssssssssssssssssssssssssssss
              </div>
            </td>
            <td>
              <div className="tdItems">4</div>
            </td>
            <td>
              <div className="tdItems">
                It burns so much and this is very long so you will make it
                smaller
              </div>
            </td>
            <td>
              <div className="tdItems">
                <button className="action">Edit</button>
                <button className="action">Delete</button>
              </div>
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
