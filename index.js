const express = require("express");
const app = express();
const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
  });
  
  app.get("/", (req, res) => {
    res.send("Try navigating to /user2.");
  });
  
  app.get("/user", (req, res) => {
      console.log(req.params);
    res.send(`Received a GET request for user2!
  Try navigating to /user/somevalue/profile/somevalue.`);
  });
  app.post("/user", (req, res) => {
    res.send("Received a POST request for user!");
  });
  