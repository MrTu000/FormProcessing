var express = require("express")
var hbs = require('hbs')

var app = express()

var bodyParser = require("body-parser"); //lay giu lieu tu servo qua teckbock de xu ly fom
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine','hbs')




app.post('/sendDangky',(req,res)=>{
    let nameValue = req.body.txtName;
    let genderValue = req.body.gender;
    let userInfo = {name:nameValue,gender:genderValue};
    res.render('confirm',{model:userInfo});
    // res.write('Name: ' + nameValue)
    // res.write('\nGender: ' + genderValue);
    // res.end();
})

var img = require('path').join(__dirname, '/img');
app.use(express.static(img));

app.get('/register',(req,res)=>{
    res.render('dangky')
})


app.get('/',(req,res)=>{
    res.render('index') // khi mà người dùng gọi đến trang chủ sẽ chuyển sang trang index kiểu như đường link sang trang chủ
})


var PORT = process.env.PORT || 3000  // nhờ sever chạy len tổng .nếu lấy cổng ko dc nó sẽ lấy cổng 3000
app.listen(PORT)
console.log('server is running on: ',PORT)