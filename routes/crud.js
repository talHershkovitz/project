const sql = require("../DB/db.js");

/* ----- create a new user --------------- */

exports.createNewUser = function(req,res){
if (!req.body) {
res.status(400).send({
message: "Content can not be empty!"
});
return;
}
const newUser = {
"full_name": req.body.first_name+" "+req.body.last_name,
"email": req.body.email,
"password": req.body.password,
};
sql.query("INSERT INTO users SET ?", newUser, (err, mysqlres) => {
if (err) {
console.log("error: ", err);
res.status(400).send({message: "error in creating user: " + err});
return;
}
res.send({message:"new user created successfully"});
return;
});
return;
};

/* ------------ save contact request -------- */

exports.createNewContactRequest = function(req, res){
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
        }
const newReq = {
"full_name": req.body.name,
"email": req.body.email,
"phone": req.body.phone,
"content": req.body.text,
};
sql.query("INSERT INTO contactRequest SET ?", newReq, (err, mysqlres) => {
if (err) {
console.log("error: ", err);
res.status(400).send({message: "error in creating new request: " + err});
return;
}
res.send({message:"new request created successfully"});
return;
});
return;
};

/* -------- log-in check --------- */

exports.createNewContactRequest = function(req, res){





    
}


