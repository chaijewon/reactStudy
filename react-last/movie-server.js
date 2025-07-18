// 라이브러리
// 서버 => 생성
const express = require('express');
const request = require('request');
const app = express();
// crossorigin
const cors = require('cors');
app.use(cors());
// 세부 설정
app.use(cors({
    origin: "*",
    method: ["GET","POST","DELETE","PUT"]
}))

// 서버 구동
const server=app.listen(3355,()=>{
    console.log("Server started on http://localhost:3355")
});

app.get("/movie_home",(req,res)=>{
  var no=req.query.no;// request.getParameter("no");

  var site="";
  if(no==='1')
  {
     site="searchMainDailyBoxOffice.do"
  }
  else if(no==='2')
  {
      site="searchMainRealTicket.do"
  }
  else if(no==='3')
  {
      site="searchMainDailySeatTicket.do"
  }
  
  var url="http://www.kobis.or.kr/kobis/business/main/"+site;

  request({url:url},function (err,request,json) {
       console.log(json);
       res.json(JSON.parse(json));
  })
})
