const express = require("express");
const app = express();
const dbConnection = require("./db")
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())
app.use("/api/cars", require('./routes/carsRoute'))
app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
