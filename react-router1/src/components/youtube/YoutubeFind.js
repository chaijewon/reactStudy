import { useState,useEffect,useRef,Fragment } from "react";
import axios from 'axios'
// 서버 연결 => ajax 
/*
    서버 : JSP / Servlet
    데이터베이스 : Oracle => MyBatis 
    Front : Jquery , Ajax 
    ---------------------- 1차 프로젝트
    서버 : Spring/Spring-Boot
    데이터베이스 : Oracle => MyBatis
    Front : VueJS 
    ---------------------- 2차 프로젝트
    서버 : Spring-Boot
    데이터베이스 : MySql => JPA
    Front : React
    ----------------------- 개인 프로젝트 
    CI/CD
*/
/*
    componentWillMount() : HTML을 메모리에 저장하기 전 상태
        => 서버에서 데이터 읽기 
    componentDidMount() : HTML을 메모리에 저장된 상태 
    componentWillUpdate() : HTML에 있는 데이터 수정 전 
    componentDidUpdate() : HTML에 있는 데이터 수정 완료 
    ----------------- class형 
    => function형으로 변경 
       => 16버전 
    
    => useEffect()
       => mount / update 동시에 수행 
       => useEffect호출 
          useState변수 => setXxx
       => useXxx : Hooks 
    => useRef : 입력창을 제어할때 사용 
       <input type="text">
       -------------------

*/
// HTML(X) => XML => jsx 
// 임시태그 : Fragment , Empty 태그 : <> </>
function YoutubeFind(){
   // 데이터 관리 => 검색어 변경시마다 re-render 
   const [movie,setMovie]=useState([])
   // movie=[] => 상수 
   // {} => 한개 정보 
   // 문자열 => "" , ''
   // 정수 => 0
   const [fd, setFd]=useState('아이브')
   const fdRef=useRef(null)
   // 검색어를 받아서 데이터 전송
   // => CallBack => 시스템에 의해 자동 호출 
   useEffect(()=>{
      // 데이터를 youtube서버로부터 가지고 온다 
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${fd}&type=video&key=AIzaSyCjkIwifNo8t4OGYoxVIyUAoATzIFjEK34`)
           .then(response=>{
             // youtube로부터 데이터를 읽어 온다 
             console.log(response.data.items)
             setMovie(response.data.items)
           })
   },[fd]) //[] 한번만 수행 => [값] =>  
   /*
       movie=[{},{},{}...]
       movie.map(m=>
         
       )
   */
   // 이벤트 함수 
   const dataChange=()=>{
      if(fd==="")
      {
         fdRef.current?.focus()
         return 
      }
      if(fdRef.current)// 값이 입력된 상태
      {
         setFd(fdRef.current?.value)
      }
   }
   return (
      <Fragment>
      <div className="row">
         <h1 className="text-center">Youtube 동영상 검색</h1>
      </div>
      <div className="row">
         <input type="text" size={"30"} className="input-sm" ref={fdRef}/>
         <button className="btn-sm btn-primary" onClick={dataChange}>검색</button>
         {/*
              return에서 사용하는 주석 
              크기 : btn-sm btn-lg btn-xs
              btn-primary : 파랑색
              btn-success : 그린 
              btn-danger : 빨간색 
              btn-warning : 주황색
              btn-info : 하늘색
              btn-default  : 회색
         */}
      </div>
      <div className="row" style={{"marginTop":"10px"}}>
         {
            movie.map(m=>
               <div class="col-md-3">
                  <div class="thumbnail">
                     <embed src={"http://youtube.com/embed/"+m.id.videoId} style={{"width":"230px","height":"300px"}}></embed>
                     <div class="caption">
                        <p>{m.snippet.title}</p>
                     </div>
                  </div>
               </div>
            )
         }
      </div>
     </Fragment>
   )
}
export default YoutubeFind;