const express = require("express"); // impor module express
const app = express(); // buat express application
const port = 3000; // port yang akan digunakan

app.get("/", (req, res) => {
    res.send("Hello world");
} )

app.get("/about", (req, res) => {
    res.send("About Us");
} )

app.get("/contact", (req, res) => {
    res.send("Contact Us");
})

app.listen(port, () => {
    console.log(`Server dapat diakses : http://localhost:${port}`);
})