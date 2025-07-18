import { useState,useEffect,Fragment} from "react";
import axios from "axios"
// 서버 연결 axios
/*
    useState : 변수 (일반변수가 아니다)
               변수가 변경시마다 데이터 값을 변경 
    useEffect : 데이터를 서버로부터 읽어 올 수 있게 
    --------- useState를 이용해서 다시 호출 
    Fragment : 임시 루트 태그 => xml
      | CSS => CSS를 유지하기 위해 (디자인)
*/
function Home(){
    const [curpage,setCurpage]=useState(1)
    // 프로그램 종료시까지 유지 
    const [totalpage,setTotalpage]=useState(0)
    const [food,setFood]=useState([])
    // 서버 연결 
    useEffect(()=>{
      axios.get('http://localhost:3000/food.json')
           .then(response=>{
              console.log(response.data.items)
              setTotalpage(Math.ceil(response.data.items.length/12))
              setFood(response.data.items.slice((curpage*12)-12,curpage*12))
           })
    },[curpage])
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
                        <a href="#">
                            <img src={"https://www.menupan.com"+f.poster} style={{"width":"230px","height":"150px"}}/>
                            <div class="caption">
                            <p>{f.name}</p>
                            </div>
                        </a>
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