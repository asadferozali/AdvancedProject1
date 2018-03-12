const express = require("express"),
    app = express(),
    mongodb = require("mongodb"),
    mongoose = require("mongoose"),
    port = process.env.PORT || 3000,
    myDB = "mongodb://localhost/AdvancedProject1Database",
    User = require("./Models/user.model.js");

mongoose.connect(myDB);

app.listen(port, (error) => {
    if (!error) {
        console.log("listening on port " + port);
    } else {
        console.log(error);
    }
});
