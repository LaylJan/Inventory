import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { MongoClient } from "mongodb";
import "./index.css";

// const uri =
//   'mongosh "mongodb+srv://inventory.2fpnxxj.mongodb.net/" --apiVersion 1 --username layljandee --password 31vx5sl6QdJ7hZm4';
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db("Inventory");
//     const stored = database.collection("stored");

//     const query = { item: "coal" };
//     const item = await movies.findOne(query);
//     console.log(item);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
