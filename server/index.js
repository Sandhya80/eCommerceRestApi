const express = require ("express");
const app = express();
const port = 5000;
const cors = require("cors");

//Adding middleware:
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is now listening on the Port ${port}`)
});