import express from "express";
const app = express();
const port =3000;

app.get('/', (req, res) => {
    res.send("<h1>HELoo<h1>")
})

app.listen(port, () => {
    console.log(`The Sever Is Running At Port ${port}.`);
})