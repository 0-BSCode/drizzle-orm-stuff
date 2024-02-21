import express from "express";

const app = express();

app.get("/", (_req, res) => {
  return res.json({
    message: "Hello World!",
  });
});

app.listen(3000, () => {
  console.log("🚀Server listening on http://localhost:3000");
});
