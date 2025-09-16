const express = require("express"); // impor module express
const app = express(); // buat express application
const port = 3000; // port yang akan digunakan

app.get("/", (req, res) => {
    res.send("Hello world");
} )

app.get("/about", (req, res) => {
    res.send("About Us - UMDP");
} )

app.get("/contact", (req, res) => {
    // res.send("Contact Us");
    res.sendFile(__dirname + "/contact.html");
})

app.get("/mahasiswa", (req, res) => {
    res.json({
        status: "success",
        message: "Data mahasiswa",
        data: ["Ritzy", "Naufal", "Marcel"]
    })
})

app.get("/nilai", (req, res) => {
    // silakan dicoba
    res.json({
         status: "success",
        message: "Data nilai",
        data: [
            {mk: "Bahasa Indonesia", nilai: "A"},
            {mk: "PAW 1", nilai: "A"},
            {mk: "PAB 1", nilai: "B+"}
        ]
    })
})

app.get("/fakultas/:id", (req, res) => {
    // res.send(`Fakultas id : ${req.params.id}`);
    res.send("Fakultas ID: " + req.params.id);
} )

// jika route yang diakses tidak terdaftar, maka ditampilkan Not Found
app.use("/", (req, res) => {
    res.status(404); // http response code (not found)
    res.send("<h1>Not Found</h1>")
} )

app.listen(port, () => {
    console.log(`Server dapat diakses : http://localhost:${port}`);
})