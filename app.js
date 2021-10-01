const express = require('express');
const app = express();
const sql = require("./DB/db.js")
const bodyParser = require("body-parser");
const path = require ('path');
const { resourceLimits } = require('worker_threads');
const CRUD = require("./routes/crud.js");
const port = 8080;

 // parse requests of contenttype: application/json
app.use(bodyParser.json());
 // parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true
}));

// load view engine
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// listen
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
})


//create a new user
app.post ("/newUser" , CRUD.createNewUser);

// create a new contact request
app.post("/newReq" , CRUD.createNewContactRequest);

// Create a route for getting all customers
app.get("/user", function(req, res){
    sql.query("SELECT * FROM useres", (err, mySQLrespons) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all records: " + err});
    return;
    }
    var id = mySQLrespons[0]["id"];
    var name = mySQLrespons[0]["name"];
    res.send(mySQLrespons);
    return;
    });
    });

// upload q&a
app.get("/qa", function(req, res){
    const price ={};
    sql.query("SELECT * FROM subject", (err, mySQLrespons) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all records of subject: " + err});
    return;
    }
    console.log(mySQLrespons);
    mySQLrespons.forEach(function(row){
        var sub_num = row.id;
        var sub = row.subject;
        sql.query( `select * from qa where subject = ${sub_num}`,(err, ans)=>{  if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting all records of qa: " + err});
            return;
        }
        console.log(sub+"    "+ans[0]["answer"]);
    });
    return;
    });
    });
    res.send("hhh");
});


// load class page
app.get("/class-page", function(req, res){
    sql.query("SELECT * FROM classes where id=2", (err, mySQLrespons) => {
        if (err) {
        console.log("error: ", err);
        res.status(400).send({message: "error in getting all records: " + err});
        return;
        }
        var name = mySQLrespons[0]["name"];
        var description = mySQLrespons[0]["description"];
        var build = mySQLrespons[0]["building"];
        var num = mySQLrespons[0]["class"];
        
        res.send(name+"  "+build);
        return;
        });
 });

 app.get("/class/:id", function(req, res){
  //   openClassPage(1);
  sql.query(`SELECT * FROM positive_db.classes where id = ${req.params.id}`, (err, mySQLrespons) => {
    if (err) {
    console.log("db error: ", err);
    res.status(400).send({message: "error in getting all records: " + err});
    return;
    }
  
    var image= mySQLrespons[0]["img"];
    var title= mySQLrespons[0]["title"];
    var building= mySQLrespons[0]["building"];
    var description= mySQLrespons[0]["description"];
    var roomNum= mySQLrespons[0]["room number"];
    
    res.render('class',{
        image,
        title,
        building,
        description,
        roomNum
    });
    return;
    });

});
   
app.get("/about-us", function(req, res){
    res.sendFile(path.join(__dirname, '/views/about-us.html'));
    });
app.get("/class-schedule", function(req, res){
    res.sendFile(path.join(__dirname, '/views/class-schedule.html'));
    });
app.get("/home-page", function(req, res){
    res.sendFile(path.join(__dirname, '/views/home-page.html'));
     });
app.get("/login-page", function(req, res){
    res.sendFile(path.join(__dirname, '/views/login-page.html'));
     });
 app.get("/price-page", function(req, res){
    res.sendFile(path.join(__dirname, '/views/price-page.html'));
    });
app.get("/q&a", function(req, res){
    res.sendFile(path.join(__dirname, '/views/q&a.html'));
    });
app.get("/registration", function(req, res){
    res.sendFile(path.join(__dirname, '/views/registration.html'));
    });
app.get("/user-page", function (req, res){
        res.sendFile(path.join(__dirname, '/views/user-page.html' ));
    });   
app.get("/review", function (req, res){
        res.sendFile(path.join(__dirname, '/views/review.html' ));
    });
app.get("/terms" , function(req, res){
    res.sendFile(path.join(__dirname, '/views/terms.pdf' ));
});
