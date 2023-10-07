import express from "express";
const app = express();
const port =3000;

app.get('/', (req, res) => {
    res.send("<h1>HELoo<h1>")
});

app.get('/about', (req, res) => {
    res.send("About Me")
});

app.get('/contact', (req, res) => {
    res.send("Contact")
});

app.get('/info', (req, res) => {
    res.send("more info")
});

app.listen(port, () => {
    console.log(`The Sever Is Running At Port ${port}.`);
})