import logo from './logo.svg';
import './App.css';
import { useState,Fragment } from 'react';
// 라이브러리 사용 
/*
    state : 데이터 변경시마다 다시 브라우저로 변경된 데이터를 전송
    const [movie,setMovie]=useState({})
                              ------ 상태 (데이터 변경 감지)
                                             |
                                            화면 변경
    프로그램 단점 => 한번 수행하면 다시 수행 할 수 없다 

    => 1
       2
       3 => 1번부터 다시 수행 => let , var 
       4
       5
       => react는 state 프로그램 (데이터 관리 프로그램)
       LLM /  랭체인 
*/
function App(props) {
  const [movie,setMovie]=useState({})
  /*
     정수 useState(0)
     문자 useState('')
     배열 useState([])

     => useEffect : 서버를 연결할때 사용 
        --------- mounted 
                    |
                  처음 시작 => window.onload 
     => router 
         | 화면 변경 
     --------------------- react 기초 
     | Redux / TanStack-Query 
                    | TypeScript 
     | 개인 프로젝트 : 가산점 : 10%
     | = react 가능자 65%
     | = CI/CD => 우대 
  */
  const detail=(m)=>{
    //movie=m
    setMovie(m) // 값을 저장 movie. => 처음부터 다시 실행
  }
  return (
    <div className='container'>
      <div className='col-sm-8'>
        <table className='table'>
          <thead>
            <tr>
              <th className='text-center'>순위</th>
              <th className='text-center'></th>
              <th className='text-center'>영화명</th>
              <th className='text-center'>감독</th>
              <th className='text-center'>장르</th>
            </tr>
          </thead>
          <tbody>
            {
              props.movie.map(m=>
                 <tr className='dataTr' onMouseOver={()=>detail(m)}>
                  <td className='text-center'>{m.rank}</td>
                  <td className='text-center'>
                    <img src={"https://www.kobis.or.kr/"+m.thumbUrl} 
                    style={{"width":"30px","height":"30px"}}/>
                  </td>
                  <td>{m.movieNm}</td>
                  <td>{m.director}</td>
                  <td>{m.genre}</td>
                 </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div className='col-sm-4'>
        <MovieDetail movie={movie}/>
      </div>
    </div>
  );
}
function MovieDetail(props){
  return (
    <Fragment>
     <h1 className='text-center'>영화 상세</h1>
     <table className='table'>
      <tbody>
        <tr>
          <td width={"30%"} className='text-center' rowSpan={"5"}>
            <img src={"https://www.kobis.or.kr/"+props.movie.thumbUrl} style={{"width":"100%"}}/>
          </td>
          <td colSpan={"2"}>
            <h3>{props.movie.movieNm}</h3>
          </td>
        </tr>
        <tr>
          <th width="15%">감독</th>
          <td width="55%">{props.movie.director}</td>
        </tr>
        <tr>
          <th width="15%">상영일</th>
          <td width="55%">{props.movie.startDate}</td>
        </tr>
        <tr>
          <th width="15%">장르</th> 
          <td width="55%">{props.movie.genre}</td>
        </tr>
        <tr>
          <th width="15%">등급</th>
          <td width="55%">{props.movie.watchGradeNm}</td>
        </tr>
      </tbody>
     </table>
    </Fragment>
  )
}

export default App;
