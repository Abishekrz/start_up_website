var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"iwp"
})
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("SELECT * FROM registration",function(err,result){
        if(err) return console.log(err);
        return console.log(result);

    })
})