const express = require("express");
const app = express();
const ai = require("./router/ai")
const user = require("./router/user")

const PORT = 8000;

app.get("/", (req, res) => {
    res.status(200).json({test: true})
})

app.use(express.json())
app.use("/ai", ai)
app.use("/user", user)

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})