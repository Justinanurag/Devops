import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send({
    message: "Hello from  Server 🚀 and server is live now!!",
  });
});

app.get("/health", (req, res) => {
  res.json({ 
    message:"Hello this is health page!!",
    status: "OK" });
});

app.post("/data", (req, res) => {
  res.json({
    received: req.body,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
