import { useState,useEffect,Fragment} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
// 서버 연결 axios
/*
    useState : 변수 (일반변수가 아니다)
               변수가 변경시마다 데이터 값을 변경 
    useEffect : 데이터를 서버로부터 읽어 올 수 있게 
    --------- useState를 이용해서 다시 호출 
    Fragment : 임시 루트 태그 => xml
      | CSS => CSS를 유지하기 위해 (디자인)

    slice 
    slice(startNum , endNum)
                       |
                      endNum-1
    slice(1,10) => 1~9 : 배열에서 원하는 위치부터 자르기
    1페이지 slice(0,10)
           slice(10,20) ...
    예)
        const arr=[1,2,3,4,5]
                   0 1 2 3 4 
        const result=arr.slice(0,3)
              ------
              | [1,2,3]
              arr.slice(2,4) [2,3]
*/
function Home(){
    const [curpage,setCurpage]=useState(1)
    // 프로그램 종료시까지 유지 
    const [totalpage,setTotalpage]=useState(0)
    const [food,setFood]=useState([])
    // 서버 연결 ==> React-Query ==> TanStack-Query
    // 은행 / 증권 / 비트코인 / 국세청 / 예약 / 검색 / 
    // AI cdn
    // Spring-Boot : 서버 역할 
    // client => 별도 ===> MSA
    useEffect(()=>{
      axios.get('http://localhost:3000/food.json')
           .then(response=>{
              console.log(response.data.items)
              setTotalpage(Math.ceil(response.data.items.length/12))
              setFood(response.data.items.slice((curpage*12)-12,curpage*12))
           })
    },[curpage]) //[] => 한번만 수행 
    // [curpage] => curpage가 변경되면 다시 실행 
    // 버튼 클릭시 처리 
    const prev=()=>{
       setCurpage(curpage>1?curpage-1:curpage)
    }
    const next=()=>{
       setCurpage(curpage<totalpage?curpage+1:curpage)
    }
    return (
        <Fragment>
        <div className="row">
            {
                food.map(f=> 
                    <div class="col-md-3">
                        <div class="thumbnail">
                        <NavLink to={"/food_detail/"+f.fno}>
                            <img src={"https://www.menupan.com"+f.poster} style={{"width":"230px","height":"150px"}}/>
                            <div class="caption">
                            <p>{f.name}</p>
                            </div>
                        </NavLink>
                        </div>
                    </div> 
                )
            }
        </div>
        <div className="row text-center" style={{"marginTop":"10px"}}>
           <button className="btn-sm btn-info" onClick={prev}>이전</button>
            {curpage} page / {totalpage} pages
           <button className="btn-sm btn-warning" onClick={next}>다음</button>
        </div>
        </Fragment>
    )
}
// 등록 
export default Home;