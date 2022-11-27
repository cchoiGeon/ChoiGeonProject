//기본 세팅
const express = require("express");
const server = express();
const qs = require("querystring");
const fs = require("fs");
//내가 만든 모듈들 가져오기
const thisscript = require("./thisscript"); //기본 틀 script
const thiscss = require("./thiscss"); // 기본 틀 css
const overlap = require("./overlap_div,script"); // 중복되는 코드들을 모아놓음 repeat으로 묶음 
const report = require("./report_div,script"); // report 신고하기 기능을 담당하는 div와 script를 따로 만듬
const Lectureroom = require("./AtoE_div,script"); // A동~E동까지 div와 script를 따로 만듬 
const board = require("./board_div,script"); // 게시판 div와 script를 만듬
const login = require("./login");
const signinupcss = require('./logincss');
const signinupscript = require('./loginscript');
const register = require('./register');


server.use(express.static("/CreateServer"));
server.use(express.static("images"));
//홈페이지
server.get("/", (req, res) => {
  res.send(overlap.repeat(thiscss,`
<div id="layoutSidenav_content" class="videobackground">
  <main>
      <div class="container-fluid px-4">
          <div class="fixed-top">
              <video src="./index.mp4" autoplay loop muted width="100%" ></video>
          </div>
      </div>
  </main>
</div>`,``,thisscript));
});

// Lectureroom/강의실 선택시 
server.get("/A", (req, res) => { 
  res.send(overlap.repeat(thiscss,Lectureroom.Adiv,Lectureroom.script,thisscript));
});

server.get("/B", (req, res) => { 
  res.send(overlap.repeat(thiscss,Lectureroom.Bdiv,Lectureroom.script,thisscript));
});
server.get("/C", (req, res) => { 
  res.send(overlap.repeat(thiscss,Lectureroom.Cdiv,Lectureroom.script,thisscript));
});

server.get("/D", (req, res) => { 
  res.send(overlap.repeat(thiscss,Lectureroom.Ddiv,Lectureroom.script,thisscript));
});

server.get("/E", (req, res) => { 
  res.send(overlap.repeat(thiscss,Lectureroom.Ediv,Lectureroom.script,thisscript));
});

server.get("/sangyoung", (req, res) => { 
  res.send(overlap.repeat(thiscss,Lectureroom.Sangyoungdiv,Lectureroom.Sangyoungscript,thisscript));
});

//ADDONS 부분 게시판,신고하기,지도 
server.get("/report", (req, res) => {
  res.send(overlap.repeat(thiscss,report.div,report.script,thisscript));
});
server.get("/board", (req, res) => {
  res.send(overlap.repeat(thiscss,board.div,``,thisscript));
});
server.get("/map", (req, res) => {
  res.send(overlap.repeat(thiscss,`
<div id="layoutSidenav_content">
  <main>
      <div class="container-fluid px-4">
          <div class="text-center">
              <img src="./TUK.JPG" class="rounded" alt="...">
          </div>
      </div>
  </main>
</div>`,``,thisscript));
});

// 회원가입 
server.get("/register", (req, res) => {
  res.send(register(signinupcss,signinupscript));
});
server.post("/register/process", (req, res) => {
  var body = '';
  req.on('data',function(data){ //데이터를 처리하는 기능 , 데이터를 수신할 때마다 호출되는 콜백 함수 / request는 createServer 함수의 콜백으로 전달한 인수에서 찾을 수 있다 request = 요청할 때 웹 브라우저가 보낸 정보가 담겨있음 response = 응답할 때 웹 브라우저에 전송할 정보를 담음 
    body += data; // 데이터를 받을 때마다 body에 누적해서 합친다 
  });
  req.on('end',function(){ // 테이터 처리를 마무리하는 기능, 수신할 정보가 없으면 호출되는 콜백 함수 / 이 이벤트는 데이터 수신을 완료하면 발생하는 이벤트로 콜백에 데이터 처리를 마무리하는 기능이다 
    var post = qs.parse(body); // 누적된 body 데이터를 post에 담는다 
    Userpassword = post.password;
    checkpassword = post.checkpassword;
    Username = post.name;
    Userid = post.id;
    if(Userpassword === checkpassword){
      res.writeHead(302, {'Location': '/'});
      res.end();
    }else{
      res.writeHead(302, {'Location':'/register'});
      res.end();
    }
  });
});

server.get("/login", (req, res) => {
  res.send(login(signinupcss,signinupscript));
});
server.post("/login/process", (req, res) => {
  var body = '';
  req.on('data',function(data){ //데이터를 처리하는 기능 , 데이터를 수신할 때마다 호출되는 콜백 함수 / request는 createServer 함수의 콜백으로 전달한 인수에서 찾을 수 있다 request = 요청할 때 웹 브라우저가 보낸 정보가 담겨있음 response = 응답할 때 웹 브라우저에 전송할 정보를 담음 
    body += data; // 데이터를 받을 때마다 body에 누적해서 합친다 
  });
  req.on('end',function(){ // 테이터 처리를 마무리하는 기능, 수신할 정보가 없으면 호출되는 콜백 함수 / 이 이벤트는 데이터 수신을 완료하면 발생하는 이벤트로 콜백에 데이터 처리를 마무리하는 기능이다 
    var post = qs.parse(body); // 누적된 body 데이터를 post에 담는다 
    Loginid = post.id;
    Loginpassword = post.password;
    if(Loginid === Userid && Loginpassword === Userpassword){
      res.writeHead(302, {'Location': '/'});
      res.end();
    }else{
      res.writeHead(302,{'Location': '/login'});
      res.end();
    }
    
  });
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});