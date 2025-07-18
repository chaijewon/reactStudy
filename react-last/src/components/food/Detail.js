import { useState,useEffect,Fragment } from "react";
import { useNavigate,useParams } from "react-router";
import axios from "axios";
/*
    1명 => 프로그램 완성 10개월 
    10명 => 1개월 

    미국 => 6개월이상 
    유럽 => 3~4개월 
    일본 => 2개월
    대만 => 1개월
    우리나라 => 내일
    
    => 프로그램 언어 : java 
    => JavaScript 
    => Oracle 
    ----------------------
    | 소스 통합 : Framework 
      
    const Detail=()=>{
    
    }
    const Detail=function(){
    
    }
    export default Detail=(){
    
    }
*/
function Detail(){
   const {fno}=useParams()
   const nav=useNavigate() // 목록 이동 => 화면 이동 
   const [detail,setDetail]=useState({})
   // [] , {}
   useEffect(()=>{
     axios.get('http://localhost:3000/food.json')
           .then(response=>{
              console.log(response.data.items)
              const arr=response.data.items
              setDetail(arr.find(food=>food.fno==fno))
           })
   },[fno])
   return (
     <div className="row">
       <table className="table">
        <tbody>
            <tr>
                <td width={"30%"} className="text-center" rowSpan={"9"}>
                   <img src={"https://www.menupan.com"+detail.poster} style={{"width":"100%"}}/>
                </td>
                <td colSpan={"2"}>{detail.name}</td>
            </tr>
            <tr>
                <td width={"15%"}>주소</td>
                <td width={"55%"}>{detail.address}</td>
            </tr>
            <tr>
                <td width={"15%"}>전화</td>
                <td width={"55%"}>{detail.phone}</td>
            </tr>
            <tr>
                <td width={"15%"}>음식종류</td>
                <td width={"55%"}>{detail.type}</td>
            </tr>
            <tr>
                <td width={"15%"}>가격대</td>
                <td width={"55%"}>{detail.price}</td>
            </tr>
            <tr>
                <td width={"15%"}>주차</td>
                <td width={"55%"}>{detail.parking}</td>
            </tr>
            <tr>
                <td width={"15%"}>영업시간</td>
                <td width={"55%"}>{detail.time}</td>
            </tr>
            <tr>
                <td width={"15%"}>테마</td>
                <td width={"55%"}>{detail.theme}</td>
            </tr>
            <tr>
                <td colSpan={"2"} className="text-right">
                    <button className="btn-sm btn-danger" onClick={()=>nav(-1)}>목록</button>
                </td>
            </tr>
        </tbody>
       </table>
     </div>
   )
}
export default Detail;