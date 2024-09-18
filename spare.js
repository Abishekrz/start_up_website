
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"iwp"
})
// connection.connect();
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    const { email, password } = req.body;
    const sql = 'INSERT INTO registration (email, password) VALUES (?, ?)';
    con.query(sql,[email,password],function(err,result){
        if(err) return console.log(err);
        return console.log(result);

    })
})
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });