const express = require('express');
const { request, response } = require('express');
const app = express();

app.get("/test", (request, response) => {
    response.send("Hello from API")
})


app.listen(9999, () => {
    console.log("App is listening!");
})
