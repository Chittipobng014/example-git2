var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static("www"));


app.get('/profile',function(request, response){
    var output = "<html lang='en'>";
    output += "<head>";
    output += "</head>";
    output += "</html>";
    response.send(output);
})

app.post('/login', function(request,response){
    var username = request.body.username
    var password = request.body.password
    if (username === "admin" && password === "abc123**") {
        response.send("Login Success!")
    } else {
        response.send("Login fail!")
    }
})

app.listen(4001);

// app.post("/qrgen", function(request, reponse){
//     var text = request.body.text;
//     QRCode.toDataURL(text, function (err, url) {
//         console.log(url);
//         var output = "QR code for " + text + "<br>";
//         output += "<img src='" + url + "'>";
//         reponse.send(output);
//     })
// });

// app.get("/qrgen", function(request, reponse){
//     var text = request.query.text;
//     QRCode.toDataURL(text, function (err, url) {
//         console.log(url);
//         var output = "QR code for " + text + "<br>";
//         output += "<img src='" + url + "'>";
//         reponse.send(output);
//     })
// });

// app.get("/qrgen/:sid", function(request, reponse){
//     var text = request.params.sid;
//     QRCode.toDataURL(text, function (err, url) {
//         console.log(url);
//         var output = "QR code for " + text + "<br>";
//         output += "<img src='" + url + "'>";
//         reponse.send(output);
//     })
// });



