const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  // Simulate email sending
  console.log("Simulated email sending:");
  console.log("From:", email);
  console.log("Message:", message);

  res.status(200).send("Email sent successfully (simulated)!");
});

app.listen(5000, () => console.log("Server running on port 5000"));
