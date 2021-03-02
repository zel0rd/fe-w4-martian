
//서버에서 사용할 미들웨어 정의 장소
//express 객체 선언 : 미들웨어, Express제공 미들웨어 객체 선언 
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const cors = require('cors');

//--------------------------------------------
//라우터 선언
const index_router =require('./routes/index');

//미드뤠어 등록을 위해 app객체에 express객체 등록 
const app =  express();
// app.locals.homeContents = require('./api/homeContents.json');

//app.set 메서드를 통해 express 앱 설정
app.set("view engine","ejs");
app.engine('ejs',require('ejs').renderFile);


//--------------------------------------------
//미들웨어 등록 시작 
app.use(express.static(path.join(__dirname,'public')));
app.use('/',index_router);
// app.use('/image',image_router);
app.use(cors());


//--------------------------------------------
app.listen(3004,(err)=>{
    if(err) return console.log(err);
    console.log('The server is listening on port 3004');
});
//get 메서드의 url 이 기본값이 되게 되면 ejs 출력
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.ejs');
});

// 에러 catch
app.use((req,res)=>{
    res.sendStatus(404);
})